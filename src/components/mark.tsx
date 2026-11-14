export function Mark({ className = "h-10 w-auto" }: { className?: string }) {
  return <img src="/mark.png" alt="" className={className} />;
}

export function Wordmark({ className = "h-4 w-auto" }: { className?: string }) {
  return <img src="/wordmark.png" alt="VALXEL" className={className} />;
}
