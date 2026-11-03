import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { Maximize, X, ZoomIn, ZoomOut } from "lucide-react";
import { t } from "../i18n";

type Diagram = { src: string; alt: string; width: number; height: number };

export function ArchitectureImage({ image }: { image: Diagram }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const pan = useRef<{ x: number; y: number; left: number; top: number } | null>(null);
  const titleId = useId();
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [dragging, setDragging] = useState(false);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const ratio = image.width / image.height;
  const fitWidth = Math.max(1, Math.min(size.width - 32, (size.height - 32) * ratio));
  const imageWidth = fitWidth * zoom;
  const imageHeight = imageWidth / ratio;

  useEffect(() => {
    if (!open || !dialog.current) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = "hidden";
    const observer = new ResizeObserver(() => {
      if (viewport.current) setSize({ width: viewport.current.clientWidth, height: viewport.current.clientHeight });
    });
    if (viewport.current) observer.observe(viewport.current);
    return () => {
      observer.disconnect();
      element.close();
      document.body.style.overflow = previousOverflow;
      pan.current = null;
    };
  }, [open]);

  useLayoutEffect(() => {
    if (open && viewport.current) {
      viewport.current.scrollLeft = (imageWidth - size.width) / 2;
      viewport.current.scrollTop = (imageHeight - size.height) / 2;
    }
  }, [open, imageWidth, imageHeight, size.width, size.height]);

  const close = () => setOpen(false);

  return <div className="case-architecture-diagram">
    <img src={image.src} alt={t(image.alt)} width={image.width} height={image.height} loading="lazy" />
    <button className="architecture-zoom-trigger" type="button" aria-label={t("Open architecture image")} title={t("Open architecture image")} aria-haspopup="dialog" onClick={() => { setZoom(1); setDragging(false); setOpen(true); }}><ZoomIn size={20} strokeWidth={1.75} aria-hidden="true" /></button>
    <dialog ref={dialog} className="architecture-viewer" aria-labelledby={titleId} onCancel={close} onClose={close} onClick={event => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
    }}>
      <div className="architecture-viewer-header">
        <h2 id={titleId}>{t("Information Architecture")}</h2>
        <button type="button" aria-label={t("Close image")} title={t("Close image")} onClick={close} autoFocus><X size={20} aria-hidden="true" /></button>
      </div>
      <div className="architecture-viewer-controls" role="group" aria-label={t("Image zoom controls")}>
        <button type="button" aria-label={t("Zoom out")} title={t("Zoom out")} disabled={zoom <= 1} onClick={() => setZoom(value => Math.max(1, value - .5))}><ZoomOut size={20} aria-hidden="true" /></button>
        <output aria-live="polite" aria-label={t("Zoom level")}>{Math.round(zoom * 100)}%</output>
        <button type="button" aria-label={t("Zoom in")} title={t("Zoom in")} disabled={zoom >= 4} onClick={() => setZoom(value => Math.min(4, value + .5))}><ZoomIn size={20} aria-hidden="true" /></button>
        <button type="button" className="architecture-fit" onClick={() => setZoom(1)}><Maximize size={18} aria-hidden="true" />{t("Fit to view")}</button>
      </div>
      <div ref={viewport} className="architecture-viewer-viewport" tabIndex={0} role="region" aria-label={t("Architecture image: scroll or drag to explore")} data-zoomed={zoom > 1} data-dragging={dragging}
        onPointerDown={event => {
          if (zoom <= 1 || event.pointerType !== "mouse" || event.button !== 0) return;
          pan.current = { x: event.clientX, y: event.clientY, left: event.currentTarget.scrollLeft, top: event.currentTarget.scrollTop };
          event.currentTarget.setPointerCapture(event.pointerId);
          setDragging(true);
        }}
        onPointerMove={event => {
          if (!pan.current) return;
          event.currentTarget.scrollLeft = pan.current.left - (event.clientX - pan.current.x);
          event.currentTarget.scrollTop = pan.current.top - (event.clientY - pan.current.y);
        }}
        onPointerUp={event => { if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId); }}
        onLostPointerCapture={() => { pan.current = null; setDragging(false); }}>
        <div className="architecture-viewer-canvas" style={{ width: Math.max(size.width, imageWidth), height: Math.max(size.height, imageHeight) }}>
          {open && <img src={image.src} alt={t(image.alt)} draggable={false} style={{ width: imageWidth, height: imageHeight }} />}
        </div>
      </div>
    </dialog>
  </div>;
}
