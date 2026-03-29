'use client';

interface CameraEl { id: string; label: string; x: number; y: number; angle: number; fov: number; color?: string }
interface LightEl { id: string; label: string; x: number; y: number; angle: number; spread: number; color?: string }
interface SoundEl { id: string; label: string; x: number; y: number }
interface TalentEl { id: string; label: string; x: number; y: number }
interface WallEl { x1: number; y1: number; x2: number; y2: number }
interface FurnitureEl { label: string; x: number; y: number; w: number; h: number; rx?: number }

interface SetPlanPreviewProps {
  width: number;
  height: number;
  roomLabel: string;
  walls?: WallEl[];
  furniture?: FurnitureEl[];
  cameras: CameraEl[];
  lights: LightEl[];
  sound: SoundEl[];
  talent: TalentEl[];
}

const SCALE = 50; // px per meter
const PAD = 30;

export function SetPlanPreview({
  width, height, roomLabel, walls, furniture, cameras, lights, sound, talent,
}: SetPlanPreviewProps) {
  const svgW = width * SCALE + PAD * 2;
  const svgH = height * SCALE + PAD * 2;

  function toX(m: number) { return PAD + m * SCALE; }
  function toY(m: number) { return PAD + m * SCALE; }

  function fovPath(x: number, y: number, angle: number, fov: number, len: number) {
    const a1 = ((angle - fov / 2) * Math.PI) / 180;
    const a2 = ((angle + fov / 2) * Math.PI) / 180;
    const x1 = x + Math.cos(a1) * len;
    const y1 = y + Math.sin(a1) * len;
    const x2 = x + Math.cos(a2) * len;
    const y2 = y + Math.sin(a2) * len;
    return `M${x},${y} L${x1},${y1} A${len},${len} 0 0,1 ${x2},${y2} Z`;
  }

  return (
    <div className="bg-di-surface-lowest rounded-xl border border-di-outline-variant/15 overflow-hidden">
      <svg viewBox={`0 0 ${svgW} ${svgH}`} className="w-full max-h-64 sm:max-h-80 md:max-h-96 lg:max-h-[420px]">
        {/* Grid */}
        <defs>
          <pattern id="grid" width={SCALE} height={SCALE} patternUnits="userSpaceOnUse">
            <path d={`M ${SCALE} 0 L 0 0 0 ${SCALE}`} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect x={PAD} y={PAD} width={width * SCALE} height={height * SCALE} fill="url(#grid)" />

        {/* Room walls */}
        <rect
          x={PAD} y={PAD} width={width * SCALE} height={height * SCALE}
          fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" rx="4"
        />

        {/* Room label */}
        <text x={PAD + 8} y={PAD + 16} fill="rgba(255,255,255,0.2)" fontSize="10" fontFamily="monospace">
          {roomLabel}
        </text>

        {/* Dimensions */}
        <text x={PAD + (width * SCALE) / 2} y={PAD - 8} fill="rgba(255,255,255,0.2)" fontSize="10" textAnchor="middle" fontFamily="monospace">
          {width}м
        </text>
        <text x={PAD - 10} y={PAD + (height * SCALE) / 2} fill="rgba(255,255,255,0.2)" fontSize="10" textAnchor="middle" fontFamily="monospace" transform={`rotate(-90, ${PAD - 10}, ${PAD + (height * SCALE) / 2})`}>
          {height}м
        </text>

        {/* Furniture */}
        {furniture?.map((f, i) => (
          <g key={`f-${i}`}>
            <rect
              x={toX(f.x)} y={toY(f.y)} width={f.w * SCALE} height={f.h * SCALE}
              fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"
              rx={f.rx || 2}
            />
            <text x={toX(f.x) + (f.w * SCALE) / 2} y={toY(f.y) + (f.h * SCALE) / 2 + 3} fill="rgba(255,255,255,0.15)" fontSize="8" textAnchor="middle" fontFamily="sans-serif">
              {f.label}
            </text>
          </g>
        ))}

        {/* Light cones */}
        {lights.map((l) => (
          <path
            key={l.id}
            d={fovPath(toX(l.x), toY(l.y), l.angle, l.spread, 3.5 * SCALE)}
            fill={l.color || 'rgba(251, 191, 36, 0.08)'}
            stroke="none"
          />
        ))}

        {/* Camera FOV */}
        {cameras.map((c) => (
          <path
            key={c.id}
            d={fovPath(toX(c.x), toY(c.y), c.angle, c.fov, 4 * SCALE)}
            fill={c.color || 'rgba(59, 130, 246, 0.08)'}
            stroke="none"
          />
        ))}

        {/* Light icons */}
        {lights.map((l) => (
          <g key={`li-${l.id}`}>
            <circle cx={toX(l.x)} cy={toY(l.y)} r="10" fill="rgba(251, 191, 36, 0.2)" stroke="#f59e0b" strokeWidth="1.5" />
            <text x={toX(l.x)} y={toY(l.y) + 3} fill="#f59e0b" fontSize="10" textAnchor="middle" fontWeight="bold">☀</text>
            <text x={toX(l.x)} y={toY(l.y) + 22} fill="#f59e0b" fontSize="8" textAnchor="middle" fontFamily="sans-serif">{l.label}</text>
          </g>
        ))}

        {/* Camera icons */}
        {cameras.map((c) => (
          <g key={`ci-${c.id}`}>
            <rect x={toX(c.x) - 10} y={toY(c.y) - 7} width="20" height="14" rx="3" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="1.5" />
            <text x={toX(c.x)} y={toY(c.y) + 3} fill="#3b82f6" fontSize="8" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">
              {c.label}
            </text>
            <text x={toX(c.x)} y={toY(c.y) + 20} fill="#3b82f6" fontSize="8" textAnchor="middle" fontFamily="sans-serif">
              {c.id.includes('a') ? 'CAM A' : c.id.includes('b') ? 'CAM B' : 'ДРОН'}
            </text>
          </g>
        ))}

        {/* Sound icons */}
        {sound.map((s) => (
          <g key={`si-${s.id}`}>
            <circle cx={toX(s.x)} cy={toY(s.y)} r="8" fill="rgba(34, 197, 94, 0.2)" stroke="#22c55e" strokeWidth="1.5" />
            <text x={toX(s.x)} y={toY(s.y) + 3} fill="#22c55e" fontSize="8" textAnchor="middle">🎙</text>
            <text x={toX(s.x)} y={toY(s.y) + 20} fill="#22c55e" fontSize="7" textAnchor="middle" fontFamily="sans-serif">{s.label}</text>
          </g>
        ))}

        {/* Talent marks */}
        {talent.map((t) => (
          <g key={`ti-${t.id}`}>
            <circle cx={toX(t.x)} cy={toY(t.y)} r="12" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" strokeWidth="1.5" strokeDasharray="3,2" />
            <text x={toX(t.x)} y={toY(t.y) + 4} fill="#a855f7" fontSize="9" textAnchor="middle" fontWeight="bold" fontFamily="sans-serif">
              {t.label[0]}
            </text>
            <text x={toX(t.x)} y={toY(t.y) + 24} fill="#a855f7" fontSize="7" textAnchor="middle" fontFamily="sans-serif">{t.label}</text>
          </g>
        ))}

        {/* Legend */}
        <g transform={`translate(${PAD + 8}, ${PAD + height * SCALE - 36})`}>
          <rect x="-4" y="-10" width="220" height="40" rx="4" fill="rgba(0,0,0,0.4)" />
          {[
            { color: '#3b82f6', label: 'Камера' },
            { color: '#f59e0b', label: 'Свет' },
            { color: '#22c55e', label: 'Звук' },
            { color: '#a855f7', label: 'Позиция' },
          ].map((item, i) => (
            <g key={item.label} transform={`translate(${i * 54}, 0)`}>
              <circle cx="6" cy="6" r="4" fill={item.color} />
              <text x="14" y="10" fill="rgba(255,255,255,0.6)" fontSize="8" fontFamily="sans-serif">{item.label}</text>
            </g>
          ))}
        </g>
      </svg>
    </div>
  );
}
