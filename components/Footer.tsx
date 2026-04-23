"use client";

import { useTheme } from "./ThemeProvider";

export default function Footer() {
  const year = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--divider)",
        padding: "48px 24px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          textAlign: "center",
        }}
      >
        {/* Logo */}
        <img
          src="/logo-light.png"
          alt="Noroshibi"
          style={{
            height: "72px",
            width: "auto",
            filter: theme === "dark" ? "brightness(0) invert(1)" : "none",
            transition: "filter 0.3s ease",
          }}
        />

        {/* Tagline */}
        <p style={{ color: "var(--accent)", fontSize: "14px", fontWeight: 600 }}>
          まだ知られていない価値に、狼煙を。
        </p>

        {/* Nav links */}
        <nav style={{ display: "flex", gap: "24px", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { label: "サービス", href: "#services" },
            { label: "選ばれる理由", href: "#why-us" },
            { label: "実績", href: "#results" },
            { label: "導入の流れ", href: "#flow" },
            { label: "会社概要", href: "#company" },
            { label: "お問い合わせ", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: "13px",
                color: "var(--text-secondary)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Divider */}
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "1px",
            background: "var(--divider)",
          }}
        />

        {/* Copyright */}
        <p style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
          © {year} 株式会社Noroshibi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
