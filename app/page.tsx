import { Terminal, User } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="max-w-3xl mx-auto space-y-12 relative">
        <section className="space-y-4  ">
          <div className="flex items-center gap-2 text-[rgb(var(--keyword))] pl-12">
            <Terminal size={20} />
            <h1 className="text-2xl font-bold">~/rabbitHome</h1>
          </div>

        </section>

        <section className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="line-numbers w-12 pt-1">
              {Array.from({ length: 9 }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2 text-[rgb(var(--function))]">
                <User size={18} />
                <h2 className="text-xl">Hello,I am </h2>
              </div>
              <div className="space-y-2 pl-4">
              <div className="vim-cursor pl-4 text-lg ">
            <p><span className="text-[rgb(var(--keyword))]">main</span> = <span className="text-[rgb(var(--function))]">putStrLn</span><span className="text-[rgb(var(--string))]">"Abhinav P.!"</span></p> 
            {/* -- main = putStrLn "Abhinav P.!"  */}
          </div>
          <p>
            <br />
          </p>
                <p className="text-[rgb(var(--string))]">
                  "A passionate computer science enthusiast exploring new technologies and solving complex problems."
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
