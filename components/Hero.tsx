"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Ember = { id: number; left: number; delay: number; duration: number; size: number; drift: number };

export default function Hero() {
  const [embers, setEmbers] = useState<Ember[]>([]);

  useEffect(() => {
    setEmbers(
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        size: 2 + Math.random() * 4,
        drift: (Math.random() - 0.5) * 60,
      }))
    );
  }, []);
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "var(--bg-primary)",
        paddingTop: "80px",
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 50% 60%, rgba(249,115,22,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Ember particles */}
      {embers.map((ember) => (
        <div
          key={ember.id}
          style={{
            position: "absolute",
            bottom: "10%",
            left: `${ember.left}%`,
            width: `${ember.size}px`,
            height: `${ember.size}px`,
            borderRadius: "50%",
            background: `radial-gradient(circle, var(--accent-gold), var(--accent))`,
            animation: `ember-rise ${ember.duration}s ${ember.delay}s ease-in infinite`,
            ["--drift" as string]: `${ember.drift}px`,
            opacity: 0,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* Main content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 24px",
          maxWidth: "900px",
          width: "100%",
        }}
      >
        {/* Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-tag"
        >
          SNS Marketing Agency
        </motion.p>

        {/* Main catchcopy */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: "clamp(32px, 6vw, 80px)",
            fontWeight: 900,
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            marginBottom: "24px",
            color: "var(--text-primary)",
          }}
        >
          まだ知られていない
          <br />
          <span className="shimmer-text">価値に、狼煙を。</span>
        </motion.h1>

        {/* Sub copy */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            fontSize: "clamp(15px, 2vw, 20px)",
            color: "var(--text-secondary)",
            lineHeight: 1.8,
            marginBottom: "48px",
            maxWidth: "640px",
            margin: "0 auto 48px",
          }}
        >
          SNSで集客したいけど何から始めればいい？
          <br />
          個人の強みを世の中に届けたい。
          <br />
          <span style={{ color: "var(--accent)", fontWeight: 600 }}>
            Noroshibiが、あなたの「狼煙」を上げます。
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://ws.formzu.net/dist/S644748193/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ textDecoration: "none", fontSize: "16px" }}
          >
            🔥 無料相談はこちら
          </a>
          <a
            href="#services"
            className="btn-outline"
            style={{ textDecoration: "none", fontSize: "16px" }}
          >
            サービスを見る
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{
            marginTop: "64px",
            display: "flex",
            gap: "32px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "800万+", label: "総再生回数" },
            { num: "310万", label: "最大単発再生" },
            { num: "23,500", label: "フォロワー獲得" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 900,
                  color: "var(--accent)",
                }}
              >
                {stat.num}
              </div>
              <div
                style={{ fontSize: "13px", color: "var(--text-secondary)", marginTop: "4px" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
          color: "var(--text-secondary)",
          fontSize: "12px",
          letterSpacing: "0.1em",
        }}
      >
        <span>SCROLL</span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, var(--accent), transparent)",
            animation: "pulse-glow 2s ease-in-out infinite",
          }}
        />
      </motion.div>
    </section>
  );
}
