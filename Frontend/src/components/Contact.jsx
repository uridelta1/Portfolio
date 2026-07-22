import { useState } from "react";
import { sendContactMessage } from "../lib/api.js";

export default function Contact({ profile }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "ok" | "error"
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await sendContactMessage(form);
      setStatus("ok");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
        </div>
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={form.message}
            onChange={handleChange}
            placeholder="What would you like to build?"
          />
        </div>
        <button className="submit-btn" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>

        {status === "ok" && (
          <div className="form-status ok">Sent — thanks for reaching out, I'll reply soon.</div>
        )}
        {status === "error" && (
          <div className="form-status err">
            Couldn't send that ({errorMsg || "server error"}). Try again, or email me directly below.
          </div>
        )}
      </form>

      <div className="direct-contact">
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
        {profile.socials.map((s) => (
          <a href={s.url} target="_blank" rel="noreferrer" key={s.label}>
            {s.label} ↗
          </a>
        ))}
      </div>
    </div>
  );
}
