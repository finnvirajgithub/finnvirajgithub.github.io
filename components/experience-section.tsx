import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    period: "Feb 2025 — Sep 2025",
    title: "Intern Full Stack Developer",
    company: "S Jay Web Solutions (pvt) LTD",
    companyUrl: "https://www.sjaywebsolutions.com/",
    description:
      "Pursuing Bachelor's degree in Information Technology, focusing on software engineering, data structures, algorithms, and full-stack development. Actively participating in research projects and collaborative team assignments.",
    skills: ["Java", "React", "Node.js", "MongoDB", "Python"],
  },
  {
    period: "2023 — Present",
    title: "Freelance Developer",
    company: "Self-Employed",
    description:
      "Developed custom web applications for small businesses and startups. Built responsive, user-friendly interfaces and implemented backend services using modern technologies.",
    skills: ["React", "Node.js", "Express", "MySQL", "Firebase"],
  },
  {
    period: "2022 — Present",
    title: "Student Developer",
    company: "University Projects",
    description:
      "Led development of multiple academic projects including a gymnasium management system and patient appointment system. Collaborated with team members using agile methodologies.",
    skills: ["PHP", "Java", "Android", "Spring Boot", "Docker"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Experience</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="group grid md:grid-cols-[200px_1fr] gap-4 md:gap-8">
              <div className="text-sm text-muted-foreground font-medium">{exp.period}</div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {exp.title} ·{" "}
                  {exp.companyUrl ? (
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      {exp.company}
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-primary">{exp.company}</span>
                  )}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-0 hover:bg-primary/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
