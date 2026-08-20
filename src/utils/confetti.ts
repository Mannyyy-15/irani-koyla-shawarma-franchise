export function triggerConfetti() {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  try {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100vw';
    canvas.style.height = '100vh';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      if (canvas.parentNode) canvas.parentNode.removeChild(canvas);
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#c5a880', '#e5c392', '#f5f2eb', '#ffffff', '#9e7f52'];
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      rotation: number;
      vRot: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: canvas.width * 0.5 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.5 + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 12,
        vy: -Math.random() * 10 - 4,
        size: Math.random() * 6 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        vRot: (Math.random() - 0.5) * 8,
        opacity: 1,
      });
    }

    let animationFrameId: number;
    let startTime = performance.now();

    function render(currentTime: number) {
      const elapsed = currentTime - startTime;
      if (elapsed > 2200) {
        if (canvas.parentNode) {
          canvas.parentNode.removeChild(canvas);
        }
        return;
      }

      ctx?.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.vx *= 0.98; // drag
        p.rotation += p.vRot;
        if (elapsed > 1200) {
          p.opacity = Math.max(0, 1 - (elapsed - 1200) / 1000);
        }

        ctx!.save();
        ctx!.translate(p.x, p.y);
        ctx!.rotate((p.rotation * Math.PI) / 180);
        ctx!.globalAlpha = p.opacity;
        ctx!.fillStyle = p.color;
        ctx!.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
        ctx!.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);
  } catch (e) {
    // Fail silently
  }
}
