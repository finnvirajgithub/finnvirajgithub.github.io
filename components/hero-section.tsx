import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-primary font-medium tracking-wide uppercase text-sm">Welcome to my portfolio</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Hi, I'm <span className="text-primary">Sameera Rajapakshe</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
              Software Engineer & Full Stack Developer
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-lg">
              IT Undergraduate at University of Colombo, passionate about building scalable applications and solving
              complex problems through elegant code.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="https://github.com/finnvirajgithub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/sameera-rajapakshe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:svirajrajapaksha18@gmail.com"
                className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-full blur-3xl" />
              <img
                src="/images/84305394.jpeg"
                alt="Sameera Rajapakshe"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-border shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  )
}
