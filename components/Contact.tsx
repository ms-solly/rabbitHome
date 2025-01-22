const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center font-mono">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-[#F5C2E7]">Get in Touch</h2>
        <form className="space-y-4">
          {["name", "email", "message"].map((field, index) => (
            <div key={field}>
              <label htmlFor={field} className="block mb-1 flex items-center">
                <span className="vim-line-numbers">{index + 1}</span>
                <span className="capitalize">{field}</span>
              </label>
              {field === "message" ? (
                <textarea
                  id={field}
                  name={field}
                  rows={4}
                  className="w-full px-3 py-2 bg-[#302D41] rounded text-[#D9E0EE]"
                ></textarea>
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  className="w-full px-3 py-2 bg-[#302D41] rounded text-[#D9E0EE]"
                />
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-[#F5C2E7] text-[#1E1E2E] py-2 rounded hover:bg-[#89DAEB] transition-colors"
          >
            :send
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

