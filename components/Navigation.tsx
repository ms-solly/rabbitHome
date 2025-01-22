import Link from "next/link"

const Navigation = () => {
  return (
    <nav className="py-4 font-mono">
      <ul className="flex justify-center space-x-6">
        {["Home", "About", "Projects", "Contact"].map((item, index) => (
          <li key={item} className="flex items-center">
            <span className="vim-line-numbers">{index + 1}</span>
            <Link href={`#${item.toLowerCase()}`} className="text-[#D9E0EE] hover:text-[#F5C2E7] transition-colors">
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation

