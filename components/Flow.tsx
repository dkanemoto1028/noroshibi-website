"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "ヒアリング",
    desc: "現状の課題・目標・ターゲット・ご予算などを丁寧にヒアリング。法人・個人どちらも歓迎。",
    duration: "初回無料",
  },
  {
    num: "02",
    title: "戦略立案",
    desc: "ヒアリング内容を基に、競合分析・ターゲット設計・プラットフォーム選定・KPI設定を行います。",
    duration: "〜1週間",
  },
  {
    num: "03",
    title: "ご契約",
    desc: "プランと費用をご確認いただき、正式にご契約。明瞭な料金体系でご安心ください。",
    duration: "即日〜",
  },
  {
    num: "04",
    title: "アカウント設定",
    desc: "プロフィール最適化・初期コンテンツ設計・ハッシュタグ戦略など、スタートダッシュの準備を整えます。",
    duration: "1〜2週間",
  },
  {
    num: "05",
    title: "運用開始",
    desc: "本格的な運用をスタート。月次レポートで進捗を共有し、PDCAを高速で回します。",
    duration: "継続",
  },
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

export default function Flow() {
  return (
    <section
      id="flow"
      style={{
        background: "var(--bg-secondary)",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <FadeInSection>
          <p className="section-tag">Flow</p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.3,
              marginBottom: "16px",
              color: "var(--text-primary)",
            }}
          >
            導入までの流れ
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "16px",
              marginBottom: "64px",
              maxWidth: "560px",
            }}
          >
            まずは無料相談から。最短で翌週には運用開始できます。
          </p>
        </FadeInSection>

        <div style={{ position: "relative" }}>
          {steps.map((step, i) => (
            <FadeInSection key={step.num} delay={i * 0.15}>
              <div
                style={{
                  display: "flex",
                  gap: "24px",
                  marginBottom: i < steps.length - 1 ? "0" : "0",
                  position: "relative",
                }}
              >
                {/* Step number + connector */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: 900,
                      color: "white",
                      boxShadow: `0 0 20px var(--accent-glow)`,
                      flexShrink: 0,
                    }}
                  >
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div
                      style={{
                        width: "2px",
                        height: "60px",
                        background: `linear-gradient(to bottom, var(--accent), var(--bg-card-border))`,
                        margin: "8px 0",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div
                  style={{
                    flex: 1,
                    paddingBottom: i < steps.length - 1 ? "0" : "0",
                    marginBottom: i < steps.length - 1 ? "8px" : "0",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        color: "var(--accent)",
                      }}
                    >
                      STEP {step.num}
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "var(--text-secondary)",
                        background: "var(--bg-card)",
                        border: "1px solid var(--bg-card-border)",
                        padding: "2px 8px",
                        borderRadius: "10px",
                      }}
                    >
                      {step.duration}
                    </span>
                  </div>
                  <div
                    style={{
                      background: "var(--bg-card)",
                      border: "1px solid var(--bg-card-border)",
                      borderRadius: "12px",
                      padding: "20px 24px",
                      marginBottom: i < steps.length - 1 ? "0" : "0",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                        marginBottom: "8px",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.7 }}>
                      {step.desc}
                    </p>
                  </div>
                  {i < steps.length - 1 && <div style={{ height: "8px" }} />}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.5}>
          <div style={{ marginTop: "48px", textAlign: "center" }}>
            <a
              href="#contact"
              className="btn-primary"
              style={{ textDecoration: "none", fontSize: "16px" }}
            >
              まずは無料相談（STEP 01）から始める
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
