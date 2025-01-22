import { Terminal, Braces, Mail, User } from "lucide-react";
import Link from "next/link";

export default function About() {
  const paragraphs = [
    "I'm Abhinav Patel, a computer science enthusiast who enjoys delving deep into the subject. My interests cover a broad range of topics, including computer graphics, computer architecture, compiler design, functional programming, and low-level programming. I have a strong interest in programming language design and closely follow research in functional programming. While I explore web development occasionally, my primary focus is on writing efficient and effective code without unnecessary complexity.",
    
    "I primarily program in Rust, as it aligns well with my focus on performance and safety. Although I can write C++, I tend to prefer C-style code because it supports my functional programming approach. I also occasionally work with Haskell, TypeScript, Golang, OCaml, and assembly. Exploring new programming languages is something I genuinely enjoy, particularly those that contribute to functional programming research. Whenever I come across an interesting language, I make it a point to write code in it to better understand its concepts. I am always eager to improve and expand my knowledge through hands-on experience.",
    
    "My passion for physics and mathematics has greatly influenced my interest in physics-based rendering. I enjoy exploring the intersection of these disciplines with computer science and continuously strive to understand their fundamental principles. My eBook collection, sourced from platforms like Library Genesis and Anna’s Archive, contains over 3000 books spanning computer science, physics, and mathematics. I frequently read research papers from Sci-Hub and search for PDFs to expand my understanding of various topics. I strongly believe in learning by doing, and I often experiment and troubleshoot to gain practical insights.",
    
    "Beyond my technical pursuits, I find writing to be a meaningful form of self-expression. Whether it's poetry or experimental prose, I enjoy conveying thoughts and emotions through words. My book, Her Dead Voice, is written in poetry format and presents real-life stories that shed light on social issues and injustices. It aims to encourage younger generations to reflect on their actions and their impact on others. I am deeply committed to standing against injustice and doing my part to create awareness. Currently, I am contributing in the ways available to me, but I aspire to make a greater impact in the future.",
    
    "Balancing my technical and creative interests keeps me motivated and always learning. Whether I'm coding or writing, I approach both with curiosity and dedication. I enjoy simplifying complex concepts and making them more accessible. There is always something new to learn, and I wholeheartedly embrace the journey. While I may not keep track of everything I learn, the process itself is what excites me the most.",
    
    
  ];

  const linesPerParagraph = 9; // Define how many lines per paragraph to display

  return (
    <div className="max-w-3xl mx-auto space-y-12">
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-[rgb(var(--keyword))] pl-12">
          <Terminal size={20} />
          <h1 className="text-2xl font-bold">~/about</h1>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="line-numbers w-12 pt-1">
            {Array.from({ length: paragraphs.length * linesPerParagraph }, (_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 text-[rgb(var(--function))]">
              <User size={18} />
              <h2 className="text-xl">About Me</h2>
            </div>

            <div className="space-y-2 pl-4">
              {paragraphs.map((paragraph, index) => (
                <div key={index} className="text-[rgb(var(--string))]">
                  {paragraph.split('\n').map((line, lineIndex) => (
                    <p key={lineIndex}>{line}</p>
                  ))}
                </div>
              ))}
               <p className="text-[rgb(var(--string))]">"Feel free to connect with me—whether it’s to discuss programming, physics, writing, or simply to share ideas. I'm always open to learning from others and exchanging knowledge.reach out to me via<Link href='/blog' className="text-[rgb(var(--variable))] hover:text-[rgb(var(--keyword))] underline transition">Contact</Link>"</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
