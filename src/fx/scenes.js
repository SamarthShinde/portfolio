// ============================================================
// Procedural neon background scenes. One per zone; the engine
// crossfades between adjacent scenes as the user scrolls.
// Every scene: (ctx, w, h, t, state) — stateless trails only,
// so two scenes can blend cleanly in one frame.
// ============================================================

const TAU = Math.PI * 2;
const rnd = (a, b) => a + Math.random() * (b - a);

function pool(state, key, n, make) {
  if (!state[key] || state[key].length !== n || state._w !== state.w || state._h !== state.h) {
    state[key] = Array.from({ length: n }, make);
  }
  return state[key];
}

/* 0 — AURORA DRIFT (hero): orbiting neon blobs + dust */
function aurora(ctx, w, h, t, s) {
  const blobs = [
    { c: '255,43,214', r: 0.52, x: 0.72, y: 0.25, sp: 0.21 },
    { c: '0,240,255', r: 0.44, x: 0.18, y: 0.75, sp: 0.16 },
    { c: '138,43,255', r: 0.40, x: 0.50, y: 0.50, sp: 0.11 },
  ];
  ctx.globalCompositeOperation = 'lighter';
  blobs.forEach((b, i) => {
    const x = (b.x + Math.cos(t * b.sp + i * 2.1) * 0.10) * w;
    const y = (b.y + Math.sin(t * b.sp * 1.3 + i) * 0.12) * h;
    const r = b.r * Math.min(w, h);
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(${b.c},0.16)`);
    g.addColorStop(1, `rgba(${b.c},0)`);
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  });
  ctx.globalCompositeOperation = 'source-over';
  const dust = pool(s, 'dust', 70, () => ({ x: rnd(0, 1), y: rnd(0, 1), z: rnd(0.3, 1), p: rnd(0, TAU) }));
  dust.forEach(d => {
    const tw = 0.35 + 0.65 * Math.abs(Math.sin(t * 0.8 + d.p));
    ctx.fillStyle = `rgba(0,240,255,${0.35 * tw * d.z})`;
    const x = (d.x * w + t * 12 * d.z) % w;
    const y = (d.y * h + Math.sin(t * 0.4 + d.p) * 20) % h;
    ctx.fillRect(x, y < 0 ? y + h : y, 1.6 * d.z, 1.6 * d.z);
  });
}

/* 1 — WARP FIELD (timeline): stars streaking outward */
function warp(ctx, w, h, t, s) {
  const cx = w / 2, cy = h / 2;
  const stars = pool(s, 'stars', 180, () => ({ a: rnd(0, TAU), d: rnd(0.02, 1), sp: rnd(0.12, 0.5), hue: Math.random() < 0.5 ? '0,240,255' : '255,43,214' }));
  stars.forEach(st => {
    st.d += st.sp * st.d * 0.035;
    if (st.d > 1.2) { st.d = rnd(0.02, 0.08); st.a = rnd(0, TAU); }
    const maxR = Math.hypot(w, h) / 2;
    const r0 = st.d * maxR, r1 = Math.max(st.d - st.sp * st.d * 0.10, 0.01) * maxR;
    const x0 = cx + Math.cos(st.a) * r0, y0 = cy + Math.sin(st.a) * r0;
    const x1 = cx + Math.cos(st.a) * r1, y1 = cy + Math.sin(st.a) * r1;
    ctx.strokeStyle = `rgba(${st.hue},${Math.min(st.d * 0.9, 0.85)})`;
    ctx.lineWidth = st.d * 2.2;
    ctx.beginPath(); ctx.moveTo(x0, y0); ctx.lineTo(x1, y1); ctx.stroke();
  });
}

/* 2 — SYNTHWAVE GRID (strengths): perspective floor + sun */
function synthgrid(ctx, w, h, t) {
  const horizon = h * 0.55;
  const sg = ctx.createLinearGradient(0, horizon - h * 0.3, 0, horizon);
  sg.addColorStop(0, 'rgba(255,43,214,0)');
  sg.addColorStop(1, 'rgba(255,43,214,0.25)');
  ctx.fillStyle = sg;
  ctx.fillRect(0, horizon - h * 0.3, w, h * 0.3);
  // sun
  const sunR = h * 0.16;
  const sun = ctx.createRadialGradient(w / 2, horizon, 0, w / 2, horizon, sunR);
  sun.addColorStop(0, 'rgba(255,122,61,0.5)');
  sun.addColorStop(1, 'rgba(255,43,214,0)');
  ctx.fillStyle = sun;
  ctx.beginPath(); ctx.arc(w / 2, horizon, sunR, Math.PI, 0); ctx.fill();
  // vertical rays
  ctx.strokeStyle = 'rgba(0,240,255,0.20)';
  ctx.lineWidth = 1;
  const VAN = w / 2;
  for (let i = -14; i <= 14; i++) {
    ctx.beginPath();
    ctx.moveTo(VAN, horizon);
    ctx.lineTo(VAN + i * w * 0.09, h);
    ctx.stroke();
  }
  // horizontal scrolling lines
  for (let i = 0; i < 14; i++) {
    const f = ((i / 14 + (t * 0.10)) % 1);
    const y = horizon + f * f * (h - horizon);
    ctx.strokeStyle = `rgba(255,43,214,${0.06 + f * 0.32})`;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }
}

/* 3 — NEURAL NET (skills): floating orbs + links */
function neural(ctx, w, h, t, s) {
  const n = Math.min(64, Math.floor(w / 22));
  const orbs = pool(s, 'orbs', n, () => ({ x: rnd(0, 1), y: rnd(0, 1), vx: rnd(-0.0006, 0.0006), vy: rnd(-0.0006, 0.0006), c: ['0,240,255', '255,43,214', '138,43,255'][Math.floor(rnd(0, 3))] }));
  orbs.forEach(o => {
    o.x = (o.x + o.vx + 1) % 1; o.y = (o.y + o.vy + 1) % 1;
  });
  for (let i = 0; i < orbs.length; i++) {
    for (let j = i + 1; j < orbs.length; j++) {
      const dx = (orbs[i].x - orbs[j].x) * w, dy = (orbs[i].y - orbs[j].y) * h;
      const d = Math.hypot(dx, dy);
      if (d < 130) {
        ctx.strokeStyle = `rgba(0,240,255,${(1 - d / 130) * 0.16})`;
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(orbs[i].x * w, orbs[i].y * h);
        ctx.lineTo(orbs[j].x * w, orbs[j].y * h);
        ctx.stroke();
      }
    }
  }
  orbs.forEach((o, i) => {
    const pulse = 1 + Math.sin(t * 2 + i) * 0.4;
    ctx.fillStyle = `rgba(${o.c},0.75)`;
    ctx.beginPath(); ctx.arc(o.x * w, o.y * h, 1.6 * pulse, 0, TAU); ctx.fill();
  });
}

/* 4 — NIGHT CITY (experience): skyline + sweeping scanline */
function city(ctx, w, h, t, s) {
  const bars = pool(s, 'bars', 42, (_, i) => ({ w: rnd(0.015, 0.05), h: rnd(0.12, 0.42), x: Math.random(), c: Math.random() < 0.5 ? '0,240,255' : '255,43,214' }));
  // stars
  const stars = pool(s, 'cstars', 90, () => ({ x: Math.random(), y: rnd(0, 0.55), p: rnd(0, TAU) }));
  stars.forEach(st => {
    ctx.fillStyle = `rgba(234,246,255,${0.25 + 0.3 * Math.abs(Math.sin(t + st.p))})`;
    ctx.fillRect(st.x * w, st.y * h, 1.2, 1.2);
  });
  bars.forEach(b => {
    const bh = b.h * h, bw = b.w * w, x = b.x * w, y = h - bh;
    ctx.fillStyle = 'rgba(10,6,28,0.9)';
    ctx.fillRect(x, y, bw, bh);
    ctx.strokeStyle = `rgba(${b.c},0.35)`;
    ctx.lineWidth = 1;
    ctx.strokeRect(x, y, bw, bh);
    // windows
    ctx.fillStyle = `rgba(${b.c},${0.22 + 0.15 * Math.sin(t * 1.5 + x)})`;
    for (let wy = y + 8; wy < h - 10; wy += 14) {
      for (let wx = x + 5; wx < x + bw - 6; wx += 10) {
        if ((Math.sin(wx * 13.37 + wy * 7.77) + 1) / 2 > 0.55) ctx.fillRect(wx, wy, 3.5, 5);
      }
    }
  });
  // scanline sweep
  const sx = ((t * 0.12) % 1.4 - 0.2) * w;
  const grad = ctx.createLinearGradient(sx - 80, 0, sx + 80, 0);
  grad.addColorStop(0, 'rgba(0,240,255,0)');
  grad.addColorStop(0.5, 'rgba(0,240,255,0.10)');
  grad.addColorStop(1, 'rgba(0,240,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(sx - 80, 0, 160, h);
}

/* 5 — LOOT VAULT (projects): wireframe polys + sparkles */
function vault(ctx, w, h, t, s) {
  const polys = pool(s, 'polys', 9, (_, i) => ({
    x: rnd(0.08, 0.92), y: rnd(0.12, 0.88), r: rnd(26, 70), n: 3 + Math.floor(rnd(0, 4)),
    sp: rnd(-0.4, 0.4), c: ['0,240,255', '255,43,214', '138,43,255', '57,255,20'][Math.floor(rnd(0, 4))],
  }));
  polys.forEach((p, i) => {
    const a0 = t * p.sp + i;
    ctx.strokeStyle = `rgba(${p.c},0.4)`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    for (let k = 0; k <= p.n; k++) {
      const a = a0 + (k / p.n) * TAU;
      const x = p.x * w + Math.cos(a) * p.r;
      const y = p.y * h + Math.sin(a) * p.r + Math.sin(t * 0.7 + i) * 12;
      k === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.stroke();
  });
  const sparks = pool(s, 'sparks', 60, () => ({ x: Math.random(), y: Math.random(), p: rnd(0, TAU) }));
  sparks.forEach(sp => {
    const a = Math.max(0, Math.sin(t * 2.2 + sp.p));
    ctx.fillStyle = `rgba(57,255,20,${a * 0.6})`;
    ctx.fillRect(sp.x * w, sp.y * h, 2, 2);
  });
}

/* 6 — TROPHY RAIN (achievements): rising gold embers */
function trophy(ctx, w, h, t, s) {
  const embers = pool(s, 'embers', 110, () => ({ x: Math.random(), y: Math.random(), sp: rnd(0.02, 0.09), drift: rnd(-0.01, 0.01), sz: rnd(1, 3), p: rnd(0, TAU) }));
  embers.forEach(e => {
    const y = (e.y - t * e.sp) % 1;
    const x = (e.x + Math.sin(t * 0.6 + e.p) * 0.02 + e.drift * t) % 1;
    const a = 0.25 + 0.5 * Math.abs(Math.sin(t * 1.4 + e.p));
    ctx.fillStyle = `rgba(255,200,60,${a})`;
    ctx.fillRect(((x + 1) % 1) * w, ((y + 1) % 1) * h, e.sz, e.sz);
  });
  ctx.globalCompositeOperation = 'lighter';
  const g = ctx.createRadialGradient(w / 2, h * 0.85, 0, w / 2, h * 0.85, h * 0.7);
  g.addColorStop(0, 'rgba(255,160,40,0.10)');
  g.addColorStop(1, 'rgba(255,160,40,0)');
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'source-over';
}

/* 7 — TERMINAL RAIN (contact): matrix glyph columns */
const GLYPHS = '01アイウエオカキクケコサシスセソ<>[]{}#$%&*+=';
function matrix(ctx, w, h, t, s) {
  const colW = 18;
  const nCols = Math.ceil(w / colW);
  const cols = pool(s, 'cols', nCols, () => ({ sp: rnd(0.12, 0.5), off: rnd(0, 100), len: 8 + Math.floor(rnd(0, 14)) }));
  ctx.font = '13px "Share Tech Mono", monospace';
  cols.forEach((c, i) => {
    const headY = ((t * c.sp * 600 + c.off * 50) % (h + c.len * 16)) - c.len * 16;
    for (let k = 0; k < c.len; k++) {
      const y = headY - k * 16;
      if (y < -16 || y > h) continue;
      const ch = GLYPHS[Math.floor((Math.sin(i * 31 + k * 7 + Math.floor(t * 6)) + 1) * 0.5 * GLYPHS.length) % GLYPHS.length];
      const a = k === 0 ? 0.9 : (1 - k / c.len) * 0.5;
      ctx.fillStyle = k === 0 ? `rgba(180,255,200,${a})` : `rgba(57,255,20,${a})`;
      ctx.fillText(ch, i * colW, y);
    }
  });
}

export const SCENES = [aurora, warp, synthgrid, neural, city, vault, trophy, matrix];
