"use client";

import { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "サービス", href: "#services" },
  { label: "選ばれる理由", href: "#why-us" },
  { label: "実績", href: "#results" },
  { label: "会社概要", href: "#company" },
  { label: "お問い合わせ", href: "#contact" },
];

export default function Navigation() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: scrolled || menuOpen ? "var(--nav-bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--nav-border)" : "1px solid transparent",
        backdropFilter: scrolled || menuOpen ? "blur(16px)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          height: "68px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <img
            src="/logo-light.png"
            alt="Noroshibi"
            style={{
              height: "52px",
              width: "auto",
              filter: theme === "dark" ? "brightness(0) invert(1)" : "none",
              transition: "filter 0.3s ease",
            }}
          />
        </a>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
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
            <button
              onClick={toggle}
              style={{
                padding: "6px 12px",
                borderRadius: "20px",
                border: "1px solid var(--bg-card-border)",
                background: "var(--bg-card)",
                color: "var(--text-secondary)",
                fontSize: "13px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {theme === "dark" ? "☀️ Light" : "🔥 Dark"}
            </button>
            <a href="#contact" className="btn-primary" style={{ textDecoration: "none", fontSize: "14px" }}>
              無料相談
            </a>
          </nav>
        )}

        {/* Mobile: hamburger + CTA */}
        {isMobile && (
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a
              href="#contact"
              className="btn-primary"
              style={{ textDecoration: "none", fontSize: "13px", padding: "10px 18px" }}
            >
              無料相談
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "var(--text-primary)",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
                padding: "4px",
              }}
              aria-label="メニュー"
            >
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "var(--text-primary)",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "var(--text-primary)",
                  transition: "opacity 0.3s",
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  width: "22px",
                  height: "2px",
                  background: "var(--text-primary)",
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
                }}
              />
            </button>
          </div>
        )}
      </div>

      {/* Mobile drawer menu */}
      {isMobile && menuOpen && (
        <div
          style={{
            background: "var(--nav-bg)",
            backdropFilter: "blur(16px)",
            padding: "8px 0 24px",
            borderTop: "1px solid var(--nav-border)",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                fontSize: "16px",
                fontWeight: 500,
                color: "var(--text-primary)",
                textDecoration: "none",
                padding: "14px 24px",
                borderBottom: "1px solid var(--divider)",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ padding: "16px 24px 0" }}>
            <button
              onClick={toggle}
              style={{
                padding: "10px 20px",
                borderRadius: "20px",
                border: "1px solid var(--bg-card-border)",
                background: "var(--bg-card)",
                color: "var(--text-secondary)",
                fontSize: "14px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              {theme === "dark" ? "☀️ ライトモード" : "🔥 ダークモード"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
