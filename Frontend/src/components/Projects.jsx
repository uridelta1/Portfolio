export default function Projects({ projects }) {
  return (
    <div>
      {projects.map((p) => (
        <div className="card" key={p._id || p.title}>
          <h3>{p.title}</h3>
          <p className="tagline">{p.tagline}</p>
          <p>{p.description}</p>
          {p.stack?.length > 0 && (
            <div className="tag-row">
              {p.stack.map((s) => (
                <span className="tag-chip" key={s}>
                  {s}
                </span>
              ))}
            </div>
          )}
          <div className="link-row">
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noreferrer">
                Live site ↗
              </a>
            )}
            {p.repoUrl && (
              <a href={p.repoUrl} target="_blank" rel="noreferrer">
                Source ↗
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
