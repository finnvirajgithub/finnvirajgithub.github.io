import { ExternalLink, Github, Dumbbell, Calendar, Users } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    icon: Dumbbell,
    title: "Gymnasium Management System",
    description:
      "A comprehensive system for managing gym operations including workouts, coaches, and an integrated online store. Features user authentication, workout tracking, and e-commerce functionality.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    github: "https://github.com/finnvirajgithub/Gymnasium-managment-system",
  },
  {
    icon: Calendar,
    title: "Calendar Application",
    description:
      "A Java-based Calendar Application with Firebase integration for real-time event management. Supports event creation, reminders, and synchronization across devices.",
    tech: ["Java", "Firebase", "Android", "Material Design"],
    github: "https://github.com/finnvirajgithub/My-Calander-App",
  },
  {
    icon: Users,
    title: "Patient Appointment System",
    description:
      "A web-based system for managing patient appointments and doctor schedules at a clinic. Includes appointment booking, patient records, and schedule management.",
    tech: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    github: "https://github.com/finnvirajgithub/Patient-Appointment-System",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Projects</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                className="group relative p-6 rounded-lg border border-border bg-card/50 hover:bg-card hover:border-primary/30 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Icon size={24} />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} />
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-secondary text-secondary-foreground border-0"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
