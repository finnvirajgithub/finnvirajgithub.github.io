const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: "/images/js.png" },
      { name: "Java", icon: "/images/java.jpeg" },
      { name: "Python", icon: "/images/python.png" },
      { name: "PHP", icon: "/images/PHP-logo.svg.png" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: "/images/React.webp" },
      { name: "HTML5", icon: "/images/html.png" },
      { name: "CSS3", icon: "/images/css-logo.png" },
      { name: "Bootstrap", icon: "/images/bootstrap.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: "/images/nodejs.png" },
      { name: "Express", icon: "/images/express.png" },
      { name: "Spring Boot", icon: "/images/spring-boot-logo.png" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: "/images/mongodb.png" },
      { name: "MySQL", icon: "/images/mysql.png" },
      { name: "Firebase", icon: "/images/firebase.png" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "AWS", icon: "/images/aws.jpeg" },
      { name: "Docker", icon: "/images/docker.png" },
      { name: "GitHub", icon: "/images/github.png" },
      { name: "Postman", icon: "/images/postman.png" },
      { name: "Selenium", icon: "/images/Selenium_Logo.png" },
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-widest">Skills & Tools</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-foreground mb-6">{category.title}</h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-lg bg-card border border-border p-2 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300">
                      <img
                        src={skill.icon || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-8 h-8 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
