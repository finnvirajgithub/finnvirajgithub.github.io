export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sameera Rajapakshe. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  )
}
