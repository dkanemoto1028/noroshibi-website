"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const companyInfo = [
  { label: "会社名", value: "株式会社Noroshibi" },
  { label: "設立", value: "2026年5月" },
  { label: "代表取締役", value: "金本 大知（Daichi Kanemoto）" },
  { label: "事業内容", value: "SNSアカウント運用代行、ショート動画マーケティング、SNSコンサルティング、日中クロスボーダーSNS展開支援" },
  { label: "対応プラットフォーム", value: "Instagram / TikTok / YouTube / 小紅書 / Bilibili" },
];

const ceoProfile = [
  { icon: "🎓", label: "UCLA 卒業", desc: "米国カリフォルニア大学ロサンゼルス校にて経営を学ぶ" },
  { icon: "💼", label: "SmartNews 勤務", desc: "テックメディア企業でマーケティング・データ分析に従事" },
  { icon: "🌃", label: "ホスト経験", desc: "水商売の現場を経験し、個人ビジネスの課題をリアルに理解" },
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
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
          className="grid-cols-1 md:grid-cols-2"
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
                    padding: "18px 28px",
                    borderBottom:
                      i < companyInfo.length - 1
                        ? "1px solid var(--bg-card-border)"
                        : "none",
                    gap: "16px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--accent)",
                      minWidth: "100px",
                      flexShrink: 0,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "var(--text-primary)",
                      lineHeight: 1.6,
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
                    日中ハーフ。UCLAを卒業後、SmartNewsにてマーケティングに従事。
                    自らホストとして働いた経験を持ち、個人ビジネスの現場課題を深く理解。
                    「まだ知られていない価値に狼煙を」の理念でNoroshibiを創業。
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
