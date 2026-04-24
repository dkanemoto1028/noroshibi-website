"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const values = [
  {
    en: "IGNITE",
    ja: "着火する",
    desc: "最初の一歩を踏み出す勇気に火をつける。あなたの可能性を解放し、行動のきっかけを生み出す。",
  },
  {
    en: "AMPLIFY",
    ja: "増幅する",
    desc: "小さな炎を大きなモメンタムへ。継続的な施策でエンゲージメントを爆発的に拡大する。",
  },
  {
    en: "MOMENTUM",
    ja: "勢い",
    desc: "止まらない推進力を生み出す。一度火がついたら、絶え間なく成長し続けるサイクルを作る。",
  },
  {
    en: "AUTHENTIC",
    ja: "本物",
    desc: "本物の価値だけを届ける。データと現場知識を融合させた、信頼できる本質的な支援。",
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

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section
      id="about"
      style={{
        background: "var(--bg-secondary)",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <FadeInSection>
          <p className="section-tag">About Noroshibi</p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.3,
              marginBottom: "24px",
              color: "var(--text-primary)",
            }}
          >
            埋もれた才能と事業に、
            <br />
            <span style={{ color: "var(--accent)" }}>光を当てる。</span>
          </h2>
        </FadeInSection>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? "20px" : "48px",
            marginBottom: "80px",
          }}
        >
          <FadeInSection delay={0.1}>
            <div
              style={{
                padding: "32px",
                borderRadius: "12px",
                border: "1px solid var(--bg-card-border)",
                background: "var(--bg-card)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "var(--accent)",
                  marginBottom: "12px",
                }}
              >
                MISSION
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  color: "var(--text-primary)",
                }}
              >
                価値と挑戦を社会に届ける
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                埋もれている才能や事業に光を当て、SNSの力で世の中に届ける。
                最初の「狼煙」を一緒に上げることが私たちの使命です。
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={0.2}>
            <div
              style={{
                padding: "32px",
                borderRadius: "12px",
                border: "1px solid var(--bg-card-border)",
                background: "var(--bg-card)",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "var(--accent)",
                  marginBottom: "12px",
                }}
              >
                VISION
              </div>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 700,
                  marginBottom: "12px",
                  color: "var(--text-primary)",
                }}
              >
                挑戦の価値を世界へ届ける
              </h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "15px" }}>
                SNSの力で情報格差をなくし、誰もが公平なチャンスを持てる世界を創る。
                あなたの挑戦が、社会を動かす原動力になる。
              </p>
            </div>
          </FadeInSection>
        </div>

        {/* Values */}
        <FadeInSection>
          <p
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "var(--accent)",
              marginBottom: "32px",
              textTransform: "uppercase",
            }}
          >
            Our Values
          </p>
        </FadeInSection>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
          }}
        >
          {values.map((val, i) => (
            <FadeInSection key={val.en} delay={i * 0.1}>
              <div
                className="card-base"
                style={{
                  padding: "28px",
                  borderRadius: "12px",
                  cursor: "default",
                }}
              >
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "16px",
                }}>
                  <div style={{
                    width: "3px",
                    height: "24px",
                    background: "var(--accent)",
                    borderRadius: "2px",
                    flexShrink: 0,
                  }}/>
                  <span style={{
                    fontSize: "11px",
                    fontWeight: 900,
                    letterSpacing: "0.15em",
                    color: "var(--accent)",
                  }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.2em",
                    color: "var(--accent)",
                    marginBottom: "4px",
                  }}
                >
                  {val.en}
                </div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "12px",
                  }}
                >
                  {val.ja}
                </div>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px", lineHeight: 1.7 }}>
                  {val.desc}
                </p>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
