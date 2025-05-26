import React from "react";

export default function LandingPage() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, #ffffff, #f3f4f6)",
      padding: "2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem", textAlign: "center" }}>
        Reflecta
      </h1>
      <p style={{ fontSize: "1.125rem", color: "#4b5563", marginBottom: "1.5rem", textAlign: "center", maxWidth: "600px" }}>
        Your AI-powered communication mirror. Reflecta listens to your tone and summaries what you say — so you can improve how you connect with people.
      </p>
      <div style={{ width: "100%", maxWidth: "400px", backgroundColor: "white", padding: "2rem", borderRadius: "0.5rem", boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)" }}>
        <p style={{ marginBottom: "1rem", color: "#6b7280" }}>Join the waitlist for early access:</p>
        <form action="https://formspree.io/f/mwkajbyl" method="POST" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input type="email" name="email" placeholder="Enter your email" required
            style={{ padding: "0.75rem", borderRadius: "0.375rem", border: "1px solid #d1d5db" }} />
          <button type="submit"
            style={{
              padding: "0.75rem",
              backgroundColor: "#3b82f6",
              color: "white",
              borderRadius: "0.375rem",
              border: "none",
              fontWeight: "bold",
              cursor: "pointer"
            }}>
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}
