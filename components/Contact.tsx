"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function FadeInSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px 16px",
  background: "var(--bg-secondary)",
  border: "1px solid var(--bg-card-border)",
  borderRadius: "8px",
  color: "var(--text-primary)",
  fontSize: "15px",
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
  boxSizing: "border-box" as const,
};

export default function Contact() {
  const [clientType, setClientType] = useState<"法人" | "個人">("法人");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`【${clientType}】お問い合わせ: ${name}様`);
    const body = encodeURIComponent(
      `■ お客様種別\n${clientType}\n\n■ お名前\n${name}\n\n■ メールアドレス\n${email}\n\n■ お問い合わせ内容\n${message}`
    );
    window.location.href = `mailto:info@noroshibi.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      style={{
        background: "var(--bg-secondary)",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <FadeInSection>
          <p className="section-tag">Contact</p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.3,
              marginBottom: "16px",
              color: "var(--text-primary)",
            }}
          >
            まずは
            <span style={{ color: "var(--accent)" }}>無料相談</span>
            から
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "16px",
              marginBottom: "48px",
            }}
          >
            法人・個人問わず、どんな小さなご相談もお気軽にどうぞ。
            <br />
            通常2営業日以内にご返信いたします。
          </p>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--bg-card-border)",
              borderRadius: "20px",
              padding: "40px",
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {/* Client type */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    marginBottom: "10px",
                    letterSpacing: "0.05em",
                  }}
                >
                  お客様種別 <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <div style={{ display: "flex", gap: "12px" }}>
                  {(["法人", "個人"] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setClientType(type)}
                      style={{
                        padding: "10px 28px",
                        borderRadius: "8px",
                        border: `2px solid ${clientType === type ? "var(--accent)" : "var(--bg-card-border)"}`,
                        background: clientType === type ? "var(--accent-glow)" : "transparent",
                        color: clientType === type ? "var(--accent)" : "var(--text-secondary)",
                        fontWeight: 700,
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        fontFamily: "inherit",
                      }}
                    >
                      {type === "法人" ? "🏢 法人・組織" : "👤 個人"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    marginBottom: "8px",
                    letterSpacing: "0.05em",
                  }}
                >
                  お名前 <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="山田 太郎"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--bg-card-border)")}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    marginBottom: "8px",
                    letterSpacing: "0.05em",
                  }}
                >
                  メールアドレス <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  style={inputStyle}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--bg-card-border)")}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "var(--text-secondary)",
                    marginBottom: "8px",
                    letterSpacing: "0.05em",
                  }}
                >
                  お問い合わせ内容 <span style={{ color: "var(--accent)" }}>*</span>
                </label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="例：Instagram運用を相談したい、フォロワーを増やしたい、TikTokを始めたい など"
                  rows={5}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--bg-card-border)")}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="btn-primary"
                style={{
                  border: "none",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontFamily: "inherit",
                  width: "100%",
                  marginTop: "8px",
                }}
              >
                送信する →
              </button>

              <p style={{ fontSize: "12px", color: "var(--text-secondary)", textAlign: "center" }}>
                送信後、2営業日以内にご連絡いたします。
              </p>
            </form>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
