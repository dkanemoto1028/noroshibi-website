"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    title: "多様な専門家チーム",
    subtitle: "Diverse Expert Team",
    desc: "ディレクター・プランナー・デザイナー・動画クリエイターが揃ったチーム体制。個人への依存なく、一貫した高品質な運用を実現します。",
    highlight: "属人化しない安定した運用品質",
  },
  {
    title: "インバウンド対応 × 語学力",
    subtitle: "Multilingual & Inbound Expertise",
    desc: "代表が日中ハーフのバックグラウンドを持ち、中国語SNS（小紅書・Bilibili）の運用ノウハウも豊富。日本企業の中国展開を最短経路でサポート。",
    highlight: "小紅書・Bilibili対応可能",
  },
  {
    title: "現場経験者によるリアルな理解",
    subtitle: "Real Field Experience",
    desc: "代表が日本・海外での飲食産業・接客業の現場経験を持ち、個人事業の課題をリアルに理解するメンバーが在籍。他社では理解しづらい業界特有の課題に真摯に向き合います。",
    highlight: "飲食・接客・個人事業に特化した支援",
  },
  {
    title: "データドリブン × 高速PDCA",
    subtitle: "Data-Driven & Rapid PDCA",
    desc: "インサイトデータ・市場トレンドを常に分析し、感覚に頼らない論理的な戦略設計。確実なROIを追求する迅速な改善サイクルで結果を出します。",
    highlight: "再現性の高い成果創出",
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

export default function WhyUs() {
  return (
    <section
      id="why-us"
      style={{
        background: "var(--bg-secondary)",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <FadeInSection>
          <p className="section-tag">Why Noroshibi</p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.3,
              marginBottom: "16px",
              color: "var(--text-primary)",
            }}
          >
            選ばれる
            <span style={{ color: "var(--accent)" }}>4つの理由</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "16px",
              marginBottom: "64px",
              maxWidth: "560px",
            }}
          >
            SNS運用会社は数多くありますが、Noroshibiにしかできないことがあります。
          </p>
        </FadeInSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px",
          }}
        >
          {reasons.map((reason, i) => (
            <FadeInSection key={reason.title} delay={i * 0.12}>
              <div
                style={{
                  position: "relative",
                  background: "var(--bg-card)",
                  border: "1px solid var(--bg-card-border)",
                  borderRadius: "16px",
                  padding: "36px 32px",
                  transition: "all 0.3s ease",
                  overflow: "hidden",
                  height: "100%",
                }}
                className="card-base"
              >
                {/* Accent line top */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: `linear-gradient(90deg, var(--accent), transparent)`,
                  }}
                />

                <div style={{ marginBottom: "20px", color: "var(--accent)" }}>
                  {i === 0 && (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  )}
                  {i === 1 && (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  )}
                  {i === 2 && (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  )}
                  {i === 3 && (
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                    </svg>
                  )}
                </div>

                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: "var(--text-secondary)",
                    marginBottom: "8px",
                    textTransform: "uppercase",
                  }}
                >
                  {reason.subtitle}
                </p>
                <h3
                  style={{
                    fontSize: "19px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "16px",
                    lineHeight: 1.4,
                  }}
                >
                  {reason.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                  }}
                >
                  {reason.desc}
                </p>

                {/* Highlight badge */}
                <div
                  style={{
                    display: "inline-block",
                    background: "var(--accent-glow)",
                    border: "1px solid var(--accent)",
                    color: "var(--accent)",
                    fontSize: "12px",
                    fontWeight: 700,
                    padding: "6px 14px",
                    borderRadius: "20px",
                  }}
                >
                  {reason.highlight}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
