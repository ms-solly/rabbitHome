import { Terminal, BookOpen, FileText } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      title: "Understanding Functional Programming",
      description: "Exploring the core concepts and paradigms of functional programming in modern languages.",
      link: "/blog/functional-programming",
    },
    {
      title: "Rust for Systems Programming",
      description: "Why Rust is a great choice for low-level systems programming with memory safety guarantees.",
      link: "/blog/rust-systems",
    },
    {
      title: "My Journey with Compiler Design",
      description: "A deep dive into building my own compiler from scratch with Haskell and LLVM.",
      link: "/blog/compiler-design",
    },
  ];

  return (
    <div>
      <div className="max-w-3xl mx-auto space-y-12 relative">
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[rgb(var(--keyword))] pl-12">
            <Terminal size={20} />
            <h1 className="text-2xl font-bold">~/blog</h1>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="line-numbers w-12 pt-1">
              {Array.from({ length: 25 }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-[rgb(var(--function))]">
                <BookOpen size={18} />
                <h2 className="text-xl">Blog</h2>
              </div>

              <div className="space-y-2 pl-4">
                <p className="text-[rgb(var(--string))] pl-4">
                  "Welcome to my blog, where I share my thoughts and learnings on computer science, programming, 
                  and other interesting topics."
                </p>
                <p className="text-[rgb(var(--string))] pl-4">
                  "This page is constantly evolving as I write and share new insights, so be sure to check back often."
                </p>
                <p className="text-[rgb(var(--string))] pl-4">
                  "For now, here are some of my latest posts. Click on any to explore more."
                </p>
              </div>

              <div className="space-y-6 pl-4">
                {blogPosts.map((post, index) => (
                  <div key={index} className="pl-4 border-l-4 border-[rgb(var(--comment))] hover:border-[rgb(var(--keyword))] transition-all">
                    <Link href={post.link} className="group block">
                      <p className="text-lg font-semibold text-[rgb(var(--keyword))] group-hover:text-[rgb(var(--function))] transition duration-300">
                        <FileText size={16} className="inline mr-2" />
                        {post.title}
                      </p>
                      <p className="text-[rgb(var(--string))] pl-6 group-hover:text-[rgb(var(--foreground))] transition duration-300">
                        {post.description}
                      </p>
                    </Link>
                  </div>
                ))}
              </div>

              <p className="text-[rgb(var(--comment))] pl-4 italic">
                "More posts coming soon. Stay tuned!"
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
