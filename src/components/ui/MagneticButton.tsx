import {
  useRef,
  type AnchorHTMLAttributes,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from 'react'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
  strength?: number
}

/**
 * Anchor that subtly pulls toward the cursor. Strength is the max offset in px.
 * Disabled on touch + reduced-motion users — both fall back to a static anchor.
 */
export default function MagneticButton({
  children,
  strength = 8,
  className = '',
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null)

  const handleMove = (e: ReactPointerEvent<HTMLAnchorElement>) => {
    if (e.pointerType !== 'mouse') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    const dx = Math.max(-strength, Math.min(strength, (x / rect.width) * strength * 2))
    const dy = Math.max(-strength, Math.min(strength, (y / rect.height) * strength * 2))
    el.style.setProperty('--mx', `${dx}px`)
    el.style.setProperty('--my', `${dy}px`)
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--mx', '0px')
    el.style.setProperty('--my', '0px')
  }

  return (
    <a
      ref={ref}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`magnet inline-flex items-center ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}
