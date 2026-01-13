import { ExternalLink, FileText, BookOpen, GraduationCap } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const publications = [
  {
    icon: FileText,
    title: "A Review on Bacterial Identification from Light Microscopy Images Using Few-Shot Learning with Prototypical Networks",
    venue: "International Journal of Advanced Networking and Applications (IJANA)",
    year: "Jan 1, 2026",
    authors: ["Sameera Rajapakshe"],
    abstract:
      "This paper reviews traditional, deep learning, and few-shot learning approaches for bacterial identification from microscopy images, with a focus on Prototypical Networks and data-scarce medical imaging scenarios.",
    tags: ["Machine Learning", "Deep Lerning"],
    link: "https://www.ijana.in/papers/V17I4-5.pdf",
    status: "Published",
  },
  // {
  //   icon: BookOpen,
  //   title: "Optimizing MERN Stack Applications for Performance",
  //   venue: "Journal of Web Technologies (Sample)",
  //   year: "2024",
  //   authors: ["Sameera Rajapakshe"],
  //   abstract:
  //     "Research paper exploring optimization techniques for MongoDB, Express, React, and Node.js applications, focusing on scalability and response time improvements.",
  //   tags: ["MERN Stack", "Performance", "Web Development"],
  //   link: "#",
  //   status: "Draft",
  // },
  // {
  //   icon: GraduationCap,
  //   title: "Comparative Analysis of Mobile Development Frameworks",
  //   venue: "University of Colombo Research Symposium (Sample)",
  //   year: "2024",
  //   authors: ["Sameera Rajapakshe", "Faculty Advisor"],
  //   abstract:
  //     "An academic project comparing React Native, Flutter, and native development approaches for cross-platform mobile application development.",
  //   tags: ["Mobile Development", "React Native", "Flutter"],
  //   link: "#",
  //   status: "Published",
  // },
]

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Research & Publications
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <p className="text-muted-foreground mb-8 text-center max-w-2xl mx-auto">
          Academic research and publications exploring software engineering, machine learning, and modern web
          development practices.
        </p>

        <div className="space-y-6">
          {publications.map((pub, index) => {
            const Icon = pub.icon
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
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {pub.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {pub.venue} · {pub.year}
                        </p>
                      </div>
                      <Badge
                        variant={pub.status === "Published" ? "default" : "secondary"}
                        className={
                          pub.status === "Published"
                            ? "bg-primary/20 text-primary border-0"
                            : "bg-secondary text-secondary-foreground border-0"
                        }
                      >
                        {pub.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{pub.authors.join(", ")}</p>
                    <p className="text-muted-foreground leading-relaxed">{pub.abstract}</p>
                    <div className="flex flex-wrap items-center gap-2 pt-2">
                      {pub.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="border-border text-muted-foreground text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {pub.link !== "#" && (
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-auto flex items-center gap-1 text-sm text-primary hover:underline"
                        >
                          View Paper <ExternalLink size={14} />
                        </a>
                      )}
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
