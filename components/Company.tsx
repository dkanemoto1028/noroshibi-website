"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const companyInfo = [
  { label: "会社名", value: "株式会社Noroshibi" },
  { label: "設立", value: "2026年5月" },
  { label: "代表取締役", value: "金本 大知（Daichi Kanemoto）" },
  { label: "事業内容", value: "SNSアカウント運用代行、ショート動画マーケティング、SNSコンサルティング、日中クロスボーダーSNS展開支援" },
  { label: "対応プラットフォーム", value: "Instagram / TikTok / YouTube / 小紅書 / Bilibili" },
];

const ceoProfile = [
  { icon: "🎓", label: "UCLA 卒業", desc: "米国カリフォルニア大学ロサンゼルス校にて現代社会学と社会心理学を学ぶ" },
  { icon: "💼", label: "SmartNews 勤務", desc: "テックメディア企業でマーケティング・データ分析に従事" },
  { icon: "🍽️", label: "日本・海外で飲食・接客業を経験", desc: "現場で売上向上を追求する中、SNSが集客を根本から変える可能性を体感。日中両国でのSNS運用にも従事。" },
  { icon: "🚀", label: "Noroshibi 創業", desc: "「埋もれた価値に狼煙を」の理念で2026年に起業" },
];

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

export default function Company() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="company"
      style={{
        background: "var(--bg-primary)",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <FadeInSection>
          <p className="section-tag">Company</p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.3,
              marginBottom: "64px",
              color: "var(--text-primary)",
            }}
          >
            会社概要
          </h2>
        </FadeInSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "24px" : "48px",
          }}
        >
          {/* Company info table */}
          <FadeInSection delay={0.1}>
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--bg-card-border)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "20px 28px",
                  borderBottom: "1px solid var(--bg-card-border)",
                  background: "var(--bg-secondary)",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  基本情報
                </h3>
              </div>
              {companyInfo.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    flexDirection: isMobile ? "column" : "row",
                    padding: isMobile ? "16px 20px" : "18px 28px",
                    borderBottom:
                      i < companyInfo.length - 1
                        ? "1px solid var(--bg-card-border)"
                        : "none",
                    gap: isMobile ? "4px" : "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: "var(--accent)",
                      minWidth: isMobile ? "auto" : "110px",
                      flexShrink: 0,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: isMobile ? "14px" : "14px",
                      color: "var(--text-primary)",
                      lineHeight: 1.7,
                      wordBreak: "break-word",
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* CEO Profile */}
          <FadeInSection delay={0.2}>
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--bg-card-border)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  padding: "20px 28px",
                  borderBottom: "1px solid var(--bg-card-border)",
                  background: "var(--bg-secondary)",
                }}
              >
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  代表プロフィール
                </h3>
              </div>

              <div style={{ padding: "28px" }}>
                {/* CEO name */}
                <div style={{ marginBottom: "24px" }}>
                  <div
                    style={{
                      fontSize: "22px",
                      fontWeight: 900,
                      color: "var(--text-primary)",
                      marginBottom: "4px",
                    }}
                  >
                    金本 大知
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Daichi Kanemoto — 代表取締役
                  </div>
                  <div
                    style={{
                      marginTop: "12px",
                      fontSize: "13px",
                      color: "var(--text-secondary)",
                      lineHeight: 1.7,
                    }}
                  >
                    日中ハーフ。UCLAにて現代社会学・社会心理学を学んだ後、SmartNewsにてマーケティングに従事。
                    日本・海外の飲食・接客現場で売上向上を追求する中、SNSが集客を根本から変える可能性を体感。その後、日中両国でSNS運用に従事し、Noroshibiの創業へ。
                  </div>
                </div>

                {/* Timeline */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {ceoProfile.map((item, i) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        gap: "14px",
                        alignItems: "flex-start",
                      }}
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          background: "var(--accent-glow)",
                          border: "1px solid var(--accent)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "16px",
                          flexShrink: 0,
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "var(--text-primary)",
                            marginBottom: "2px",
                          }}
                        >
                          {item.label}
                        </div>
                        <div
                          style={{
                            fontSize: "12px",
                            color: "var(--text-secondary)",
                            lineHeight: 1.5,
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
