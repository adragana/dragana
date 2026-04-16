(function () {
  const canvas = document.getElementById('nnCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const colorList = [
    [143, 107, 255],
    [187, 156, 255],
    [125, 230, 202],
    [210, 176, 255],
  ];

  const NODE_COUNT = 22;
  const MAX_DIST = 130;
  const nodes = [];
  const signals = [];

  function initNodes() {
    const w = canvas.width, h = canvas.height;
    nodes.length = 0;
    for (let i = 0; i < NODE_COUNT; i++) {
      const col = colorList[Math.floor(Math.random() * colorList.length)];
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 2.5 + Math.random() * 2.5,
        col,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.008 + Math.random() * 0.006,
      });
    }
  }

  function drawConnection(ax, ay, bx, by, dist) {
    const fade = (1 - dist / MAX_DIST) * 0.79;
    const grad = ctx.createLinearGradient(ax, ay, bx, by);
    grad.addColorStop(0, `rgba(143,107,255,${fade})`);
    grad.addColorStop(1, `rgba(187,156,255,${fade * 0.45})`);
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.strokeStyle = grad;
    ctx.lineWidth = 0.7;
    ctx.stroke();
  }

  function maybeSpawnSignal() {
    if (Math.random() > 0.012) return;
    for (let a = 0; a < nodes.length; a++) {
      for (let b = a + 1; b < nodes.length; b++) {
        const dx = nodes[b].x - nodes[a].x;
        const dy = nodes[b].y - nodes[a].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST && Math.random() < 0.04) {
          signals.push({
            from: a, to: b,
            progress: 0,
            speed: 0.004 + Math.random() * 0.003,
            col: nodes[a].col,
          });
          return;
        }
      }
    }
  }

  initNodes();

  function animate() {
    const w = canvas.width, h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    nodes.forEach(n => {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > w) n.vx *= -1;
      if (n.y < 0 || n.y > h) n.vy *= -1;
      n.pulse += n.pulseSpeed;
    });

    for (let a = 0; a < nodes.length; a++) {
      for (let b = a + 1; b < nodes.length; b++) {
        const dx = nodes[b].x - nodes[a].x;
        const dy = nodes[b].y - nodes[a].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) drawConnection(nodes[a].x, nodes[a].y, nodes[b].x, nodes[b].y, dist);
      }
    }

    maybeSpawnSignal();

    for (let i = signals.length - 1; i >= 0; i--) {
      const s = signals[i];
      s.progress += s.speed;
      if (s.progress >= 1) { signals.splice(i, 1); continue; }
      const na = nodes[s.from], nb = nodes[s.to];
      const sx = na.x + (nb.x - na.x) * s.progress;
      const sy = na.y + (nb.y - na.y) * s.progress;
      const alpha = Math.sin(s.progress * Math.PI);
      ctx.beginPath();
      ctx.arc(sx, sy, 3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.col[0]},${s.col[1]},${s.col[2]},${alpha * 0.9})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(sx, sy, 7, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${s.col[0]},${s.col[1]},${s.col[2]},${alpha * 0.2})`;
      ctx.fill();
    }

    nodes.forEach(n => {
      const glow = 0.5 + 0.5 * Math.sin(n.pulse);
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * (1 + 0.25 * glow), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.col[0]},${n.col[1]},${n.col[2]},${0.3 + 0.3 * glow})`;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 0.55, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${n.col[0]},${n.col[1]},${n.col[2]},0.95)`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }

  animate();
})();
