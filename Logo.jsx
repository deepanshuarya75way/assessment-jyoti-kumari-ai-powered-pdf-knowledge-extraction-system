import { BookMarked } from 'lucide-react'

export default function Logo({ size = 22, showText = true }) {
  return (
    <div className="flex items-center gap-2">
      <BookMarked size={size} className="text-annotation" strokeWidth={2} />
      {showText && (
        <span className="font-serif text-lg font-semibold text-ink">
          DocuMind <span className="text-annotation">AI</span>
        </span>
      )}
    </div>
  )
}
