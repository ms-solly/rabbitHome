import { Terminal, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <div className="max-w-3xl mx-auto space-y-12 relative">
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-[rgb(var(--keyword))] pl-12">
            <Terminal size={20} />
            <h1 className="text-2xl font-bold">~/contact</h1>
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="line-numbers w-12 pt-1">
              {Array.from({ length: 9 }, (_, i) => (
                <div key={i}>{i + 1}</div>
              ))}
            </div>

            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-[rgb(var(--function))]">
                <Mail size={18} />
                <h2 className="text-xl">Contact Me</h2>
              </div>

              <div className="space-y-2 pl-4">
                <p className="text-[rgb(var(--string))] pl-4">
                  "I'd love to hear from you! Whether you're looking to collaborate, have questions, or just want to chat about technology, feel free to connect."
                </p>
                <p className="text-[rgb(var(--string))] pl-4">
                  "You can reach out to me via email or connect on my social media platforms below."
                </p>
              </div>

              <div className="space-y-4 pl-4">
                <div className="pl-4">
                  <p className="text-lg text-[rgb(var(--keyword))]">
                    <span className="text-[rgb(var(--function))]">let</span>{" "}
                    <span className="variable">socials</span> = {"{"}
                  </p>
                  <div className="pl-8 space-y-2">
                    <p>
                      <Link href="https://github.com/Abhinavpatel00" target="_blank" className="text-[rgb(var(--variable))] hover:text-[rgb(var(--keyword))] transition">
                        <FaGithub className="inline mr-2" size={18} />
                        GitHub
                      </Link>
                      <span className="text-[rgb(var(--string))]">,</span>
                    </p>
                    <p>
                      <Link href="https://www.linkedin.com/in/abhinav-patel-314570258/" target="_blank" className="text-[rgb(var(--variable))] hover:text-[rgb(var(--keyword))] transition">
                        <FaLinkedin className="inline mr-2" size={18} />
                        LinkedIn
                      </Link>
                      <span className="text-[rgb(var(--string))]">,</span>
                    </p>
                    <p>
                      <Link href="https://x.com/Veganabhinav" target="_blank" className="text-[rgb(var(--variable))] hover:text-[rgb(var(--keyword))] transition">
                        <FaXTwitter className="inline mr-2" size={18} />
                        X
                      </Link>
                      <span className="text-[rgb(var(--string))]">,</span>
                    </p>
                    <p>
                      <Link href="https://www.instagram.com/vegan_abhinav/" target="_blank" className="text-[rgb(var(--variable))] hover:text-[rgb(var(--keyword))] transition">
                        <FaInstagram className="inline mr-2" size={18} />
                        Instagram
                      </Link>
                    </p>
                  </div>
                  <p className="text-lg text-[rgb(var(--keyword))]">{"};"}</p>
                </div>

                <p className="text-[rgb(var(--comment))] pl-4 italic">
                  "// You can also reach me via email at: "
                </p>
                <p className="text-[rgb(var(--string))] pl-4">
                  "<Link href="mailto:patelabhinav010@gmail.com
" className="underline text-[rgb(var(--variable))] hover:text-[rgb(var(--keyword))] transition">patelabhinav010@gmail.com
</Link>"
                </p>
              </div>

              <p className="text-[rgb(var(--comment))] pl-4 italic">
                "Looking forward to connecting with you!"
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
