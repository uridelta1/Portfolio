// // const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

// async function safeGet(path, fallback) {
//   try {
//     const res = await fetch(`${API_BASE}${path}`);
//     if (!res.ok) throw new Error(`Request failed: ${res.status}`);
//     const data = await res.json();
//     return Array.isArray(data) && data.length === 0 ? fallback : data;
//   } catch (err) {
//     // Backend not running yet, or seed data not loaded — fall back to
//     // placeholder content so the site is still fully browsable.
//     return fallback;
//   }
// }

// // export function getProjects(fallback) {
// //   return safeGet("/projects", fallback);
// // }

// // export function getAchievements(fallback) {
// //   return safeGet("/achievements", fallback);
// // }

// // export async function sendContactMessage({ name, email, message }) {
// //   try {
// //     const res = await fetch(`${API_BASE}/contact`, {
// //       method: "POST",
// //       headers: { "Content-Type": "application/json" },
// //       body: JSON.stringify({ name, email, message }),
// //     });
// //     const data = await res.json().catch(() => ({}));
// //     if (!res.ok) throw new Error(data.error || "Failed to send message");
// //     return data;
// //   } catch (err) {
// //     throw new Error(err.message || "Network error — is the server running?");
// //   }
// // }

// const API_BASE = "http://localhost:3000/api";

// export function getProjects(fallback) {
//   return safeGet("/Project", fallback);
// }

// export function getAchievements(fallback) {
//   return safeGet("/Achievement", fallback);
// }

// export async function sendContactMessage({ name, email, message }) {
//   const res = await fetch(`${API_BASE}/Message`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ name, email, message }),
//   });

//   return res.json();
// }

const API_BASE =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

async function safeGet(path, fallback) {
  try {
    const res = await fetch(`${API_BASE}${path}`);

    if (!res.ok) {
      throw new Error(`Request failed: ${res.status}`);
    }

    const data = await res.json();

    return Array.isArray(data) && data.length === 0 ? fallback : data;
  } catch (err) {
    console.error(err);
    return fallback;
  }
}

export function getProjects(fallback = []) {
  return safeGet("/Project", fallback);
}

export function getAchievements(fallback = []) {
  return safeGet("/Achievement", fallback);
}

export async function sendContactMessage({ name, email, message }) {
  try {
    const res = await fetch(`${API_BASE}/Message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(data.error || "Failed to send message");
    }

    return data;
  } catch (err) {
    throw new Error(err.message || "Network error");
  }
}