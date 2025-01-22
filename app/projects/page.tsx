import { Terminal, Code, Folder, Link2 } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    // {
    //   name: "rusty-renderer",
    //   description: "A physically-based renderer written in Rust with focus on performance and realism.",
    //   link: "https://github.com/abhinav/rusty-renderer",
    // },
    // {
    //   name: "vimfolio",
    //   description: "My personal Vim-styled portfolio built with Next.js and Tailwind CSS.",
    //   link: "https://github.com/abhinav/vimfolio",
    // },
    // {
    //   name: "graphite-compiler",
    //   description: "A functional programming language compiler written in Haskell with LLVM backend.",
    //   link: "https://github.com/abhinav/graphite-compiler",
    // },
    {
      name: "raytrace-rs",
      description: "A Rust-based ray tracing engine implementing modern rendering techniques.",
      link: "https://github.com/abhinav/raytrace-rs",
    },
  ];

  return (
    <div>
      <div className="max-w-3xl mx-auto space-y-12 relative">
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[rgb(var(--keyword))] pl-12">
            <Terminal size={20} />
            <h1 className="text-2xl font-bold">~/projects</h1>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-start gap-4">
          <div className="line-numbers w-12 pt-1">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-[rgb(var(--function))]">
                <Folder size={18} />
                <h2 className="text-xl">Projects</h2>
              </div>
              <div className="space-y-2 pl-4">
              <p className="text-[rgb(var(--string))] pl-4">
                "I showcase the work I've done across various domains, including web development, 
                design, and other creative pursuits."
              </p>
              <p className="text-[rgb(var(--string))] pl-4">
                "However, this page is currently a work in progress. I'll be updating it regularly 
                as I complete or make progress on different projects."
              </p>
              <p className="text-[rgb(var(--string))] pl-4">
                "The website you're currently visiting, rabbitHome, is an ongoing project that 
                I'm actively developing."
              </p>
              <p className="text-[rgb(var(--string))] pl-4">
                "I'll be sharing more details about rabbitHome and my other projects here once they're ready."
              </p>
              <p className="text-[rgb(var(--string))] pl-4">
                "Thank you for your patience and support. As I continue to build and refine this site, 
                be sure to check back later for updates on my work."
              </p>
              <p className="text-[rgb(var(--string))] pl-4">
                "In the meantime, feel free to explore my <Link href='/blog' className="text-[rgb(var(--variable))] hover:text-[rgb(var(--keyword))] underline transition">Blog</Link>, where I share my latest thoughts and projects."
              </p>
            </div>
              <p>e.g.,</p>
              <div className="space-y-4 pl-4">
                {projects.map((project, index) => (
                  <div key={index} className="pl-4">
                    <p className="text-lg text-[rgb(var(--keyword))]">
                      <span className="text-[rgb(var(--function))]">let</span>{" "}
                      <span className="variable">{project.name}</span> ={" "}
                      <span className="text-[rgb(var(--string))]">"</span>
                      <Link
                        href={project.link}
                        className="underline text-[rgb(var(--string))] hover:text-[rgb(var(--function))] transition duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.description}
                      </Link>
                      <span className="text-[rgb(var(--string))]">"</span>;
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
