
const ICONS = {
  trophy: "🏆",
  medal: "🎖️",
  star: "★",
};

export default function Achievements({ achievements = [] }) {
  if (!achievements.length) {
    return (
      <div className="ach-empty">
        <div className="ach-empty-icon">✦</div>

        <div>
          <h3 style={{ margin: "0 0 6px 0", fontSize: 17 }}>
            More to come
          </h3>

          <p
            style={{
              margin: 0,
              color: "var(--muted)",
              fontSize: 13.5,
              lineHeight: 1.6,
            }}
          >
            I'm currently focused on building meaningful projects and
            continuously improving my skills. Achievements and milestones will
            be added here as they come.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {achievements.map((a) => (
        <div className="ach-row" key={a._id || a.title}>
          <div className="ach-icon">{ICONS[a.icon] || "•"}</div>

          <div>
            <div className="ach-meta">
              {a.issuer}
              {a.issuer && a.date ? " — " : ""}
              {a.date}
            </div>

            <h3 style={{ margin: "0 0 6px 0", fontSize: 17 }}>
              {a.title}
            </h3>

            <p
              style={{
                margin: 0,
                color: "var(--muted)",
                fontSize: 13.5,
                lineHeight: 1.6,
              }}
            >
              {a.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}