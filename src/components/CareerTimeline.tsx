type CareerEntry = {
  title: string;
  organization: string;
  start: string;
  end?: string;
  brief?: string;
};

export function CareerTimeline({ entries, education = false }: { entries: CareerEntry[]; education?: boolean }) {
  return <ol className="education-list career-timeline">
    {entries.map(entry => <li key={`${entry.organization}-${entry.title}`} data-reveal={education ? "right" : "left"}>
      {education
        ? <svg className="timeline-marker" viewBox="0 0 24 24" aria-hidden="true"><path d="m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6M22 9v7" /></svg>
        : <span className="timeline-marker timeline-node" aria-hidden="true" />}
      <div className="timeline-content">
        <h3>{entry.title}</h3>
        <p className="timeline-organization">{entry.organization}</p>
        {entry.brief?.trim() && <p className="timeline-brief">{entry.brief}</p>}
      </div>
      <span className="timeline-date"><time dateTime={entry.start}>{entry.start}</time>{entry.end && <>–<time dateTime={entry.end}>{entry.end}</time></>}</span>
    </li>)}
  </ol>;
}
