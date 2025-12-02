import React, { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 20;
const SMOOTHNESS = 0.1;
const MOVEMENT_TIMEOUT = 100; // ms before hiding tail after stopping

const SnakeCursor = () => {
  const canvasRef = useRef(null);
  const points = useRef([]);
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const imgRef = useRef(null);
  const lastMoveTime = useRef(Date.now()); // Track last movement time

  const [isInside, setIsInside] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Load custom cursor image
  useEffect(() => {
    const img = new Image();
    img.src = "/assets/images/cursor2Image.png";
    img.onload = () => {
      imgRef.current = img;
    };
  }, []);

  // Init snake points
  useEffect(() => {
    points.current = Array.from({ length: TRAIL_LENGTH }, () => ({
      x: mouse.current.x,
      y: mouse.current.y,
    }));
  }, []);

  // Track mouse + hover state + detect mouse leaving viewport
  useEffect(() => {
    if (isMobile) return;

    const move = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      lastMoveTime.current = Date.now(); // Update movement time
    };

    const enter = () => {
      setIsInside(true);
      document.body.style.cursor = "none";
    };

    const leave = (e) => {
      if (!e.relatedTarget) {
        setIsInside(false);
        document.body.style.cursor = "auto";
      }
    };

    const checkHover = (e) => {
      const target = e.target;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick ||
        target.closest("a") ||
        target.closest("button") ||
        target.getAttribute("role") === "button" ||
        target.closest("nav") ||
        target.closest("iframe")
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    window.addEventListener("mouseover", checkHover);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
      window.removeEventListener("mouseover", checkHover);
    };
  }, [isMobile]);

  // Render loop
  useEffect(() => {
    if (isMobile || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d");

    const resizeCanvas = () => {
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const render = () => {
      if (!canvasRef.current || !ctx) return;
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      const isMoving = Date.now() - lastMoveTime.current < MOVEMENT_TIMEOUT;

      if (isInside && !isHoveringClickable && isMoving) {
        const SEGMENT_LENGTH = 15;

        const prevPoints = points.current.map((p) => ({ x: p.x, y: p.y }));

        // Move head smoothly
        points.current[0].x +=
          (mouse.current.x - points.current[0].x) * SMOOTHNESS;
        points.current[0].y +=
          (mouse.current.y - points.current[0].y) * SMOOTHNESS;

        // Position each segment exactly SEGMENT_LENGTH behind the previous
        for (let i = 1; i < points.current.length; i++) {
          const dx = prevPoints[i - 1].x - points.current[i].x;
          const dy = prevPoints[i - 1].y - points.current[i].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist > 0) {
            const t = SEGMENT_LENGTH / dist;
            points.current[i].x = prevPoints[i - 1].x - dx * t;
            points.current[i].y = prevPoints[i - 1].y - dy * t;
          }
        }

        // Draw gradient tail
        const gradient = ctx.createLinearGradient(
          points.current[0].x,
          points.current[0].y,
          points.current[points.current.length - 1].x,
          points.current[points.current.length - 1].y
        );
        gradient.addColorStop(0, "rgba(255,255,255,1)");
        gradient.addColorStop(1, "rgba(192,192,192,0)");

        // Pulsating glow
        const pulse = (Math.sin(Date.now() / 100) + 1) / 2;
        ctx.shadowColor = `rgba(255,255,255,${0.5 + pulse * 0.5})`;
        ctx.shadowBlur = 10 + pulse * 10;

        // Tail path
        ctx.beginPath();
        ctx.moveTo(points.current[0].x, points.current[0].y);
        for (let i = 1; i < points.current.length; i++) {
          ctx.lineTo(points.current[i].x, points.current[i].y);
        }
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      // Always draw the head image, even when not moving
      if (isInside && !isHoveringClickable && imgRef.current) {
        ctx.shadowBlur = 0;
        const imgSize = 32;
        ctx.drawImage(
          imgRef.current,
          points.current[0].x - imgSize / 2,
          points.current[0].y - imgSize / 2,
          imgSize,
          imgSize
        );
      }

      requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [isInside, isMobile, isHoveringClickable]);

  return (
    <>
      <style>
        {isMobile
          ? `body { cursor: auto; }`
          : isHoveringClickable
          ? `body { cursor: pointer; }`
          : isInside
          ? `body { cursor: none; }`
          : `body { cursor: auto; }`}
      </style>

      {!isMobile && (
        <canvas
          ref={canvasRef}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            pointerEvents: "none",
            zIndex: 9999,
            display: isInside ? "block" : "none",
          }}
        />
      )}
    </>
  );
};

export default SnakeCursor;
