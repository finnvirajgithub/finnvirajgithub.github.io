export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">About</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I am an IT undergraduate with a passion for{" "}
            <span className="text-foreground font-medium">software engineering</span> and{" "}
            <span className="text-foreground font-medium">problem-solving</span>. Skilled in Java, MERN stack, and React
            Native, I prioritize clean coding, collaboration, and ethical development.
          </p>
          <p>
            Currently pursuing my degree at the <span className="text-primary font-medium">University of Colombo</span>,
            I am eager to gain industry experience through an internship, contribute to impactful solutions, and grow my
            expertise as I work toward becoming a successful software engineer.
          </p>
          <p>
            In the past, I've had the opportunity to develop software across a variety of settings — from{" "}
            <span className="text-foreground font-medium">web applications</span> to{" "}
            <span className="text-foreground font-medium">mobile apps</span> and{" "}
            <span className="text-foreground font-medium">backend systems</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
