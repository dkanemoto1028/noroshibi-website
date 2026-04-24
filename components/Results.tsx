"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  {
    value: 8000000,
    suffix: "+",
    display: "800万+",
    label: "総動画再生回数",
    sub: "累計実績",
  },
  {
    value: 3100000,
    suffix: "",
    display: "310万",
    label: "最大単発再生回数",
    sub: "エンタメ Instagram 単投稿",
  },
  {
    value: 23500,
    suffix: "",
    display: "23,500",
    label: "獲得フォロワー数",
    sub: "特化型 Instagram メディア",
  },
  {
    value: 66000,
    suffix: "+",
    display: "6.6万+",
    label: "中国SNS最大フォロワー",
    sub: "小紅書（RED）プラットフォーム",
  },
];

const highlights = [
  { label: "100万再生超え動画", value: "複数本達成", sub: "（281万・151万 etc）" },
  { label: "中国SNS いいね＆保存数", value: "183万+", sub: "小紅書累計" },
  { label: "エンタメ系 最大単発再生", value: "310万", sub: "Instagram Reels" },
];

function CountUp({ target, duration = 2 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count >= 1000000
        ? `${(count / 1000000).toFixed(1)}M`
        : count >= 10000
        ? `${Math.floor(count / 10000)}万${count % 10000 > 0 ? "+" : ""}`
        : count.toLocaleString()}
    </span>
  );
}

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

export default function Results() {
  return (
    <section
      id="results"
      style={{
        background: "var(--bg-primary)",
        padding: "120px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <FadeInSection>
          <p className="section-tag">Track Record</p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 900,
              lineHeight: 1.3,
              marginBottom: "16px",
              color: "var(--text-primary)",
            }}
          >
            数字が証明する
            <br />
            <span style={{ color: "var(--accent)" }}>確かな実績</span>
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "16px",
              marginBottom: "64px",
              maxWidth: "560px",
            }}
          >
            感覚ではなく、データで語ります。
          </p>
        </FadeInSection>

        {/* Main stats grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px",
            marginBottom: "48px",
          }}
        >
          {stats.map((stat, i) => (
            <FadeInSection key={stat.label} delay={i * 0.1}>
              <div
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--bg-card-border)",
                  borderRadius: "16px",
                  padding: "36px 28px",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Glow bg */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "-20px",
                    right: "-20px",
                    width: "120px",
                    height: "120px",
                    background: "var(--accent-glow)",
                    borderRadius: "50%",
                    filter: "blur(40px)",
                  }}
                />

                <div
                  style={{
                    fontSize: "clamp(36px, 5vw, 52px)",
                    fontWeight: 900,
                    color: "var(--accent)",
                    lineHeight: 1,
                    marginBottom: "12px",
                  }}
                >
                  <CountUp target={stat.value} duration={2} />
                  {stat.suffix}
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                  }}
                >
                  {stat.label}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>
                  {stat.sub}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Highlights */}
        <FadeInSection delay={0.3}>
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--bg-card-border)",
              borderRadius: "16px",
              padding: "32px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "24px",
            }}
          >
            {highlights.map((h) => (
              <div key={h.label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "28px",
                    fontWeight: 900,
                    color: "var(--accent-gold)",
                    marginBottom: "4px",
                  }}
                >
                  {h.value}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--text-primary)",
                    marginBottom: "4px",
                  }}
                >
                  {h.label}
                </div>
                <div style={{ fontSize: "12px", color: "var(--text-secondary)" }}>{h.sub}</div>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
