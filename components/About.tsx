const About = () => {
  const skills = [
    "React and Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Interactive animations",
    "Responsive design",
    "Vim-inspired interfaces",
  ]

  return (
    <section id="about" className="min-h-screen flex items-center font-mono">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold mb-4 text-[#F5C2E7]">About Me</h2>
        <p className="text-lg">
          I'm a passionate developer with a love for creating unique and interactive web experiences. With a background
          in both design and development, I strive to create websites that are not only functional but also visually
          appealing and engaging.
        </p>
        <p className="text-lg text-[#F5E0DC]">My skills include:</p>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="flex items-center">
              <span className="vim-line-numbers">{index + 1}</span>
              <span>{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default About

