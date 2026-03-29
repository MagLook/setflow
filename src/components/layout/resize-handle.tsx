'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ResizeHandleProps {
  side: 'left' | 'right';
  onResize: (delta: number) => void;
  className?: string;
}

export function ResizeHandle({ side, onResize, className }: ResizeHandleProps) {
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setDragging(true);
      startX.current = e.clientX;
    },
    [],
  );

  useEffect(() => {
    if (!dragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const delta = e.clientX - startX.current;
      startX.current = e.clientX;
      onResize(side === 'left' ? delta : -delta);
    };

    const handleMouseUp = () => setDragging(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [dragging, onResize, side]);

  return (
    <div
      onMouseDown={handleMouseDown}
      className={cn(
        'w-1 cursor-col-resize hover:bg-blue-500/30 active:bg-blue-500/50 transition-colors flex-shrink-0',
        dragging && 'bg-blue-500/50',
        className,
      )}
    />
  );
}
