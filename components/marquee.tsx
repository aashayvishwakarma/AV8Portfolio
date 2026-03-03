export function Marquee() {
  const items = [
    "Python",
    "TypeScript",
    "AWS",
    "Azure",
    "Next.js",
    "SQL",
    "React",
    "Node.js",
    "Svelte",
    "Cloud Architecture",
    "RAG Systems",
    "Data Engineering",
    "DynamoDB",
    "Lambda",
    "S3",
  ]

  const marqueeContent = items.map((item, i) => (
    <span key={i} className="flex items-center gap-4">
      <span className="whitespace-nowrap text-sm uppercase tracking-[0.2em] text-foreground">
        {item}
      </span>
      <span className="text-primary" aria-hidden="true">
        {"//"}
      </span>
    </span>
  ))

  return (
    <div className="overflow-hidden py-4" aria-label="Skills marquee">
      <div className="animate-marquee flex w-max items-center gap-4">
        {marqueeContent}
        {marqueeContent}
      </div>
    </div>
  )
}
