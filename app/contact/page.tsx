// app/contact/page.tsx
export default function Contact() {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>
          <p className="mt-4 text-gray-600">Feel free to reach out via email or phone.</p>
          <form className="mt-6">
  <input
    type="text"
    placeholder="Your Name"
    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
  />
  <input
    type="email"
    placeholder="Your Email"
    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
  />
  <textarea
    placeholder="Your Message"
    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500"
  ></textarea>
  <button
    type="submit"
    className="w-full bg-brown-600 text-white px-6 py-3 rounded-lg hover:bg-brown-500 transition-colors"
  >
    Send Message
  </button>
</form>

        </div>
      </main>
    );
  }
  