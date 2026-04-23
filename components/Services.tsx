"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FORM_URL = "https://ws.formzu.net/dist/S644748193/";

const platforms = [
  {
    id: "instagram",
    name: "Instagram",
    nameJa: "インスタグラム",
    color: "#C32AA3",
    colorB: "#F46F30",
    isGradient: true,
    emoji: "📸",
    tag: "法人・個人",
    tagColor: "#C32AA3",
    desc: "フィード・リール・ストーリーズを活用した世界観構築と来店誘導。アルゴリズムを熟知した投稿設計でフォロワー獲得と売上向上を実現します。",
    features: [
      "フィード投稿企画・制作",
      "リール動画制作・編集",
      "ストーリーズ運用",
      "ハッシュタグ戦略設計",
      "インサイト分析・改善レポート",
    ],
  },
  {
    id: "tiktok",
    name: "TikTok",
    nameJa: "ティックトック",
    color: "#010101",
    colorB: "#69C9D0",
    isGradient: true,
    emoji: "🎵",
    tag: "法人・個人",
    tagColor: "#EE1D52",
    desc: "Z世代・ミレニアル世代に圧倒的リーチを持つTikTok。企画から撮影・編集まで一貫対応し、アルゴリズムを徹底攻略して爆発的な認知拡大を実現。",
    features: [
      "ショート動画企画・脚本",
      "撮影・演出サポート",
      "動画編集・エフェクト加工",
      "TikTokアルゴリズム対策",
      "バイラル戦略の立案・実行",
    ],
  },
  {
    id: "x",
    name: "X (Twitter)",
    nameJa: "エックス",
    color: "#000000",
    colorB: "#333333",
    isGradient: false,
    emoji: "✖️",
    tag: "法人・個人",
    tagColor: "#000000",
    desc: "リアルタイム性と拡散力が強みのX。インプレッション最大化とフォロワーコミュニティの育成で、ブランド認知と信頼感を同時に高めます。",
    features: [
      "ツイート企画・投稿管理",
      "エンゲージメント向上施策",
      "トレンド活用コンテンツ",
      "フォロワー獲得戦略",
      "インプレッション分析",
    ],
  },
  {
    id: "youtube",
    name: "YouTube",
    nameJa: "ユーチューブ",
    color: "#FF0000",
    colorB: "#CC0000",
    isGradient: false,
    emoji: "▶️",
    tag: "法人・個人",
    tagColor: "#FF0000",
    desc: "長尺動画からYouTube Shortsまで、資産性の高いコンテンツでブランドを構築。SEO最適化でチャンネル登録者を継続的に伸ばします。",
    features: [
      "動画企画・構成設計",
      "サムネイル・タイトル最適化",
      "YouTube SEO対策",
      "YouTube Shorts制作",
      "チャンネル分析・改善提案",
    ],
  },
  {
    id: "red",
    name: "RED（小紅書）",
    nameJa: "シャオホンシュー",
    color: "#FF2442",
    colorB: "#CC001A",
    isGradient: false,
    emoji: "🔴",
    tag: "法人限定",
    tagColor: "#FF2442",
    desc: "中国最大のライフスタイルSNS・小紅書でインバウンド集客を実現。中国語ネイティブチームによる現地目線のコンテンツ制作で中華圏ユーザーに響く発信を。",
    features: [
      "中国語コンテンツ制作",
      "インバウンド集客設計",
      "KOL（インフルエンサー）連携",
      "日中ローカライズ対応",
      "中国市場トレンドリサーチ",
    ],
  },
  {
    id: "consulting",
    name: "SNSコンサル",
    nameJa: "内製化・戦略支援",
    color: "#B22222",
    colorB: "#8B1111",
    isGradient: false,
    emoji: "📊",
    tag: "法人限定",
    tagColor: "#6366F1",
    desc: "SNS運用の内製化・自走化をサポート。複数媒体の全体戦略設計からチーム育成まで、貴社に最適なSNS体制を構築するコンサルティングサービスです。",
    features: [
      "全媒体SNS戦略設計",
      "担当者育成・研修プログラム",
      "社内ガイドライン作成",
      "KPI設計・月次レポート",
      "定期コンサルティング（月1回〜）",
    ],
  },
];

function FadeInSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ background: "var(--bg-secondary)", padding: "100px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <FadeInSection>
          <p className="section-tag">Services</p>
          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 48px)",
              fontWeight: 900,
              lineHeight: 1.3,
              marginBottom: "12px",
              color: "var(--text-primary)",
            }}
          >
            対応プラットフォーム
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "15px",
              marginBottom: "56px",
              lineHeight: 1.8,
              maxWidth: "520px",
            }}
          >
            Instagram・TikTok・X・YouTube・REDの主要5媒体に完全対応。
            各プラットフォームのプロが専門チームとして担当します。
          </p>
        </FadeInSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
            gap: "20px",
          }}
        >
          {platforms.map((p, i) => (
            <FadeInSection key={p.id} delay={i * 0.07}>
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--bg-card-border)",
                  borderRadius: "16px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "transform 0.25s ease, box-shadow 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(-4px)";
                  el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.10)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Top color bar */}
                <div
                  style={{
                    height: "4px",
                    background: p.isGradient
                      ? `linear-gradient(90deg, ${p.colorB}, ${p.color})`
                      : p.color,
                  }}
                />

                <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                  {/* Header */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      marginBottom: "16px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          background: p.isGradient
                            ? `linear-gradient(135deg, ${p.colorB}25, ${p.color}25)`
                            : `${p.color}15`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "24px",
                          flexShrink: 0,
                        }}
                      >
                        {p.emoji}
                      </div>
                      <div>
                        <div
                          style={{
                            fontWeight: 900,
                            fontSize: "15px",
                            color: "var(--text-primary)",
                            lineHeight: 1.2,
                          }}
                        >
                          {p.name}
                        </div>
                        <div
                          style={{
                            fontSize: "11px",
                            color: "var(--text-secondary)",
                            marginTop: "2px",
                          }}
                        >
                          {p.nameJa}
                        </div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 700,
                        color: p.id === "consulting" ? "#6366F1" : p.tagColor,
                        background:
                          p.id === "consulting" ? "rgba(99,102,241,0.1)" : `${p.tagColor}15`,
                        padding: "3px 9px",
                        borderRadius: "20px",
                        border: `1px solid ${
                          p.id === "consulting"
                            ? "rgba(99,102,241,0.25)"
                            : `${p.tagColor}35`
                        }`,
                        whiteSpace: "nowrap",
                        flexShrink: 0,
                      }}
                    >
                      {p.tag}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "13px",
                      lineHeight: 1.8,
                      marginBottom: "18px",
                      flex: 1,
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Features */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                    {p.features.map((f) => (
                      <div
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          fontSize: "12px",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <span
                          style={{
                            width: "15px",
                            height: "15px",
                            borderRadius: "50%",
                            background: p.isGradient
                              ? `linear-gradient(135deg, ${p.colorB}, ${p.color})`
                              : p.color,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            color: "#fff",
                            fontSize: "9px",
                          }}
                        >
                          ✓
                        </span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div style={{ padding: "0 24px 24px" }}>
                  <a
                    href={FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "block",
                      textAlign: "center",
                      padding: "11px",
                      borderRadius: "8px",
                      fontSize: "13px",
                      fontWeight: 700,
                      textDecoration: "none",
                      color: "#fff",
                      background: p.isGradient
                        ? `linear-gradient(90deg, ${p.colorB}, ${p.color})`
                        : p.color,
                      transition: "opacity 0.2s, transform 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      const a = e.currentTarget as HTMLAnchorElement;
                      a.style.opacity = "0.85";
                      a.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      const a = e.currentTarget as HTMLAnchorElement;
                      a.style.opacity = "1";
                      a.style.transform = "translateY(0)";
                    }}
                  >
                    このプラットフォームを相談する →
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        <FadeInSection delay={0.2}>
          <div style={{ marginTop: "56px", textAlign: "center" }}>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ textDecoration: "none", fontSize: "16px" }}
            >
              🔥 どのプラットフォームか相談する（無料）
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
