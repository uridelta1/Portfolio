export default function About({ profile, skills }) {
  return (
    <div>
      <div className="bio-text">
        {profile.bio.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="bio-divider">Skills &amp; tools</div>
      <div className="skills-grid">
        {skills.map((s) => (
          <div className="skill-pill" key={s.name}>
            <span>{s.name}</span>
            <span className="lvl">{s.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
