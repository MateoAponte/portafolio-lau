import {
  House, ClipboardList, Gift, UserRound, Bell, Camera, Leaf, ChevronRight,
  LockKeyhole, Pencil, Mail, Phone, MapPin, CalendarDays, MessageCircle,
  Recycle, Truck, Package, Footprints, Globe, Search, Map, Clock,
  RefreshCw, CheckCheck, Star, ArrowLeft, X,
} from "lucide-react";

const icons = [
  ["House", House], ["ClipboardList", ClipboardList], ["Gift", Gift], ["UserRound", UserRound],
  ["Bell", Bell], ["Camera", Camera], ["Leaf", Leaf], ["ChevronRight", ChevronRight],
  ["LockKeyhole", LockKeyhole], ["Pencil", Pencil], ["Mail", Mail], ["Phone", Phone],
  ["MapPin", MapPin], ["CalendarDays", CalendarDays], ["MessageCircle", MessageCircle],
  ["Recycle", Recycle], ["Truck", Truck], ["Package", Package], ["Footprints", Footprints],
  ["Globe", Globe], ["Search", Search], ["Map", Map], ["Clock", Clock],
  ["RefreshCw", RefreshCw], ["CheckCheck", CheckCheck], ["Star", Star], ["ArrowLeft", ArrowLeft], ["X", X],
] as const;

export function EcoGiroIcons() {
  return <ul className="case-lucide-icons">{icons.map(([name, Icon]) => <li key={name}>
    <Icon size={28} strokeWidth={1.75} role="img" aria-label={name} />
  </li>)}</ul>;
}
