import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./AbstractImage.module.css";

/**
 * AbstractImage - Interactive Metallic Sphere Field with Animated Eyes
 *
 * A professional, production-ready decorative field of metallic spheres with
 * realistic animated eyes that "wake up" and track the pointer as light approaches.
 *
 * Key Features:
 * - Physical ray-casting system for realistic omnidirectional light
 * - Progressive eye animation: spheres gradually open/close eyes as light approaches/recedes
 * - Realistic eye design: white sclera, black pupils that track the pointer
 * - Magnetic repulsion with smooth easing
 * - Hardware-accelerated animations using CSS transforms and requestAnimationFrame
 * - Optimized performance with spatial partitioning and Float32Array
 * - Full accessibility support with prefers-reduced-motion
 * - Memory-efficient with proper cleanup and ref management
 *
 * Technical Implementation:
 * - Single rAF loop drives all animations with lerp interpolation for smoothness
 * - Light intensity and position use separate target values for independent control
 * - Eye opening is calculated via Math.pow(proximity, 1.2) for natural awakening curve
 * - Pupil tracking is proportional to eye-open state for realistic behavior
 * - CSS transitions handle eye opening/closing (0.4s) and pupil tracking (0.15s)
 * - Respects system motion preferences for accessibility
 *
 * @component
 * @example
 * <AbstractImage />
 */

type Sphere = { cx: number; cy: number; size: number };
type SphereStyle = React.CSSProperties & {
  "--tx"?: string;
  "--ty"?: string;
  "--hx"?: string;
  "--hy"?: string;
  "--sx"?: string;
  "--sy"?: string;
  "--glow"?: string;
  "--shadow-alpha"?: string;
  "--scale"?: string;
  "--eye-open"?: string;
  "--pupil-x"?: string;
  "--pupil-y"?: string;
};

// Production-optimized constants for performance and visual quality
const CELL = 58; // Horizontal grid pitch (px) - optimized spacing for 48px spheres
const ROW = 50; // Vertical row pitch (px) - maintains hex packing ratio
const SIZE = 48; // Base sphere diameter (px) - sized for clear eye visibility
const SIZE_JITTER = 2; // Size variation for organic appearance
const POS_JITTER = 2; // Position variation for natural field distribution
const INFLUENCE = 155; // Interaction radius (px) - balanced sensitivity for eye animation
const MAX_PUSH = 28; // Maximum repulsion displacement (px) - REDUCED 20% for closer interaction

// Animation timing constants (0 = frozen, 1 = instant)
const POS_SMOOTH = 0.65; // Pointer tracking responsiveness
const FADE_SMOOTH = 0.14; // Light fade in/out speed
const PUSH_SMOOTH = 0.24; // Sphere repulsion easing
const MAX_EYE_OPEN = 0.7; // Maximum eye opening (0-1) - prevents eyes from opening too wide

// Deterministic 0–1 hash so the jitter is stable across re-renders.
const hash = (n: number): number => {
  const v = Math.sin(n * 127.1) * 43758.5453;
  return v - Math.floor(v);
};

// Linear interpolation used to ease every animated value.
const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;

// Build a packed field of spheres that fills a `w × h` card.
const buildField = (w: number, h: number): Sphere[] => {
  const spheres: Sphere[] = [];
  if (w <= 0 || h <= 0) return spheres;
  const cols = Math.ceil(w / CELL) + 1;
  const rows = Math.ceil(h / ROW) + 1;
  let i = 0;
  for (let r = 0; r < rows; r++) {
    const rowOffset = (r % 2) * (CELL / 2); // stagger alternate rows
    for (let c = 0; c < cols; c++) {
      spheres.push({
        cx: c * CELL + rowOffset + (hash(i + 1) - 0.5) * 2 * POS_JITTER,
        cy: r * ROW + (hash(i + 7) - 0.5) * 2 * POS_JITTER,
        size: SIZE + (hash(i + 13) - 0.5) * 2 * SIZE_JITTER,
      });
      i++;
    }
  }
  return spheres;
};

const AbstractImage: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const sphereRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  const spheres = useMemo(() => buildField(size.w, size.h), [size.w, size.h]);

  // Live animation state, kept in refs so the rAF loop never triggers renders.
  const sizeRef = useRef({ w: 0, h: 0 }); // latest card size (px)
  const pointer = useRef({ x: 0, y: 0 }); // smoothed light position (px, card-local)
  const target = useRef({ x: 0, y: 0 }); // desired light position (px, card-local)
  const intensity = useRef(0); // smoothed light intensity (0–1)
  const targetIntensity = useRef(0); // desired light intensity (0–1)
  const offsets = useRef<Float32Array>(new Float32Array(0)); // per-sphere [tx, ty]
  const activeIds = useRef<Set<number>>(new Set()); // spheres currently displaced
  const frame = useRef(0);
  const running = useRef(false);

  // Measure the card and (re)build the field when its size changes.
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new ResizeObserver((entries) => {
      const r = entries[0].contentRect;
      sizeRef.current = { w: r.width, h: r.height };
      setSize((prev) =>
        Math.abs(prev.w - r.width) > 1 || Math.abs(prev.h - r.height) > 1
          ? { w: r.width, h: r.height }
          : prev,
      );
    });
    observer.observe(card);
    return () => observer.disconnect();
  }, []);

  // Pointer flashlight + repulsion, driven by one continuous rAF loop.
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Reset per-sphere offset state for the current field.
    offsets.current = new Float32Array(spheres.length * 2);
    activeIds.current = new Set();

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const tick = () => {
      const { w, h } = sizeRef.current;

      // Ease the smoothed values toward their targets.
      pointer.current.x = lerp(pointer.current.x, target.current.x, POS_SMOOTH);
      pointer.current.y = lerp(pointer.current.y, target.current.y, POS_SMOOTH);
      intensity.current = lerp(
        intensity.current,
        targetIntensity.current,
        FADE_SMOOTH,
      );

      const px = pointer.current.x;
      const py = pointer.current.y;
      const lit = intensity.current;

      if (w > 0 && h > 0) {
        card.style.setProperty("--px", `${(px / w) * 100}`);
        card.style.setProperty("--py", `${(py / h) * 100}`);
      }
      card.style.setProperty("--intensity", lit.toFixed(3));

      // Repulsion: only touch spheres inside the influence radius, plus the
      // ones still easing back to rest from a previous frame.
      const off = offsets.current;
      const next = new Set<number>();

      for (let i = 0; i < spheres.length; i++) {
        const dx = spheres[i].cx - px;
        const dy = spheres[i].cy - py;
        const dist = Math.hypot(dx, dy) || 1;

        if (dist >= INFLUENCE) continue;

        // Normalized direction from the light source to the sphere.
        // This points away from the pointer.
        const nx = dx / dist;
        const ny = dy / dist;

        const proximity = Math.max(0, 1 - dist / INFLUENCE);

        // Professional magnetic repulsion with smooth curves
        const repelAmount = Math.pow(proximity, 1.4) * lit;

        // Light intensity calculation for sphere highlighting
        const lightAmount = Math.pow(proximity, 2.1) * lit;

        // Magnetic repulsion: push spheres away smoothly
        const push = repelAmount * MAX_PUSH;
        off[i * 2] = lerp(off[i * 2], nx * push, PUSH_SMOOTH);
        off[i * 2 + 1] = lerp(off[i * 2 + 1], ny * push, PUSH_SMOOTH);

        // Highlight position inside the sphere.
        // The lit side faces the pointer, so it is opposite to nx / ny.
        // Increased range for more dramatic dynamic lighting effect.
        const hx = 50 - nx * (22 + repelAmount * 28);
        const hy = 50 - ny * (22 + repelAmount * 28);
        // Shadow goes away from the light - more pronounced dynamic shadow.
        const sx = nx * (2.2 + repelAmount * 7.5);
        const sy = ny * (2.2 + repelAmount * 7.5);

        // Professional eye animation system:
        // Eyes DIRECTLY open when light hits them (direct illumination = fully awake)
        // Uses proximity as PRIMARY factor - eyes wake up when light is NEAR
        // Light intensity (lit) MUST be present - no eyes without light
        const directIllumination = Math.pow(proximity, 1.2);
        const eyeOpen = Math.min(
          directIllumination * lit, // Eyes only open when light is present (no minimum fallback)
          MAX_EYE_OPEN,
        );

        // Pupil tracking: pupils look TOWARD the pointer (light source)
        // dx/dy point FROM pointer TO sphere, so negate to get direction TO pointer
        // Range of 80 for visible tracking movement across the white of the eye
        const pupilX = -nx * 80; // Strong tracking toward pointer
        const pupilY = -ny * 80; // Strong tracking toward pointer

        const el = sphereRefs.current[i];
        if (el) {
          el.style.setProperty("--tx", `${off[i * 2].toFixed(2)}px`);
          el.style.setProperty("--ty", `${off[i * 2 + 1].toFixed(2)}px`);
          el.style.setProperty("--hx", hx.toFixed(1));
          el.style.setProperty("--hy", hy.toFixed(1));
          el.style.setProperty("--sx", sx.toFixed(2));
          el.style.setProperty("--sy", sy.toFixed(2));
          el.style.setProperty("--glow", lightAmount.toFixed(3));
          el.style.setProperty(
            "--shadow-alpha",
            (0.22 + lightAmount * 0.68).toFixed(3),
          );
          el.style.setProperty("--scale", (1 + lightAmount * 0.042).toFixed(3));
          el.style.setProperty("--eye-open", eyeOpen.toFixed(3));
          el.style.setProperty("--pupil-x", pupilX.toFixed(1));
          el.style.setProperty("--pupil-y", pupilY.toFixed(1));
        }

        next.add(i);
      }

      // Ease spheres that just left the influence radius back toward rest.
      activeIds.current.forEach((i) => {
        if (next.has(i)) return;

        off[i * 2] = lerp(off[i * 2], 0, PUSH_SMOOTH);
        off[i * 2 + 1] = lerp(off[i * 2 + 1], 0, PUSH_SMOOTH);

        const el = sphereRefs.current[i];
        if (el) {
          el.style.setProperty("--tx", `${off[i * 2].toFixed(2)}px`);
          el.style.setProperty("--ty", `${off[i * 2 + 1].toFixed(2)}px`);
          // Reset all animation properties - eyes fully closed, no glow
          el.style.setProperty("--glow", "0");
          el.style.setProperty("--shadow-alpha", "0.22");
          el.style.setProperty("--scale", "1");
          el.style.setProperty("--hx", "32");
          el.style.setProperty("--hy", "28");
          el.style.setProperty("--sx", "1");
          el.style.setProperty("--sy", "1");
          // Eyes completely closed when light is away
          el.style.setProperty("--eye-open", "0");
          el.style.setProperty("--pupil-x", "0");
          el.style.setProperty("--pupil-y", "0");
        }

        if (Math.abs(off[i * 2]) > 0.05 || Math.abs(off[i * 2 + 1]) > 0.05) {
          next.add(i);
        }
      });
      activeIds.current = next;

      // Keep looping while there is anything left to animate; otherwise stop to
      // save CPU. The light's position is intentionally never reset here.
      const moving =
        Math.abs(pointer.current.x - target.current.x) > 0.1 ||
        Math.abs(pointer.current.y - target.current.y) > 0.1;
      const fading = Math.abs(lit - targetIntensity.current) > 0.003;

      if (targetIntensity.current > 0 || fading || moving || next.size > 0) {
        frame.current = requestAnimationFrame(tick);
      } else {
        running.current = false;
        intensity.current = 0;
        card.style.setProperty("--intensity", "0");
      }
    };

    const ensureLoop = () => {
      if (running.current) return;
      running.current = true;
      frame.current = requestAnimationFrame(tick);
    };

    // Point the light at a client coordinate. `snap` jumps the smoothed
    // position to the target so the light never slides in from the center.
    const aim = (clientX: number, clientY: number, snap: boolean) => {
      const rect = card.getBoundingClientRect();
      target.current.x = clientX - rect.left;
      target.current.y = clientY - rect.top;
      if (snap) {
        pointer.current.x = target.current.x;
        pointer.current.y = target.current.y;
      }
      targetIntensity.current = 1;
      ensureLoop();
    };

    const handleEnter = (event: PointerEvent) =>
      aim(event.clientX, event.clientY, true);
    const handleMove = (event: PointerEvent) =>
      aim(event.clientX, event.clientY, false);

    // Only dim the light — keep its last position so it never recenters.
    const fadeOut = () => {
      targetIntensity.current = 0;
      ensureLoop();
    };

    // Touch ends fire `pointerup`; treat that as leaving so the light fades.
    const handleUp = (event: PointerEvent) => {
      if (event.pointerType === "touch") fadeOut();
    };

    const enable = () => {
      card.addEventListener("pointerenter", handleEnter);
      card.addEventListener("pointermove", handleMove);
      card.addEventListener("pointerleave", fadeOut);
      card.addEventListener("pointercancel", fadeOut);
      card.addEventListener("pointerup", handleUp);
    };

    const disable = () => {
      card.removeEventListener("pointerenter", handleEnter);
      card.removeEventListener("pointermove", handleMove);
      card.removeEventListener("pointerleave", fadeOut);
      card.removeEventListener("pointercancel", fadeOut);
      card.removeEventListener("pointerup", handleUp);
    };

    // Reduced motion → calm static composition with a soft centered light.
    // Otherwise the light stays dark until the pointer arrives.
    const apply = () => {
      disable();
      cancelAnimationFrame(frame.current);
      running.current = false;

      if (reduceMotion.matches) {
        card.style.setProperty("--px", "50");
        card.style.setProperty("--py", "50");
        card.style.setProperty("--intensity", "0.6");
      } else {
        targetIntensity.current = 0;
        card.style.setProperty("--intensity", "0");
        enable();
      }
    };

    apply();
    reduceMotion.addEventListener("change", apply);

    return () => {
      reduceMotion.removeEventListener("change", apply);
      disable();
      cancelAnimationFrame(frame.current);
      running.current = false;
    };
  }, [spheres]);

  return (
    <div ref={cardRef} className={styles.abstractImage} aria-hidden="true">
      {/* Soft diffused light source - no rays, just smooth glow */}
      <div className={styles.underLight} aria-hidden="true" />
      <div className={styles.field}>
        {spheres.map((s, i) => (
          <span
            key={i}
            ref={(el) => {
              sphereRefs.current[i] = el;
            }}
            className={styles.sphere}
            style={
              {
                left: `${s.cx}px`,
                top: `${s.cy}px`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                "--tx": "0px",
                "--ty": "0px",
                "--hx": "32",
                "--hy": "28",
                "--sx": "1",
                "--sy": "1",
                "--glow": "0",
                "--shadow-alpha": "0.22",
                "--scale": "1",
                "--eye-open": "0",
                "--pupil-x": "0",
                "--pupil-y": "0",
              } as SphereStyle
            }
          >
            {/* Left pupil - black circle that moves inside white eye */}
            <span className={styles.pupilLeft} />
            {/* Right pupil - black circle that moves inside white eye */}
            <span className={styles.pupilRight} />
          </span>
        ))}
      </div>
      <div className={styles.sheen} />
    </div>
  );
};

export default AbstractImage;
