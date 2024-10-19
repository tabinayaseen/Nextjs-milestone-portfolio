export default function About() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
        <p className="mt-4 text-gray-600">
        detail-oriented and innovative Frontend Developer. Experience in 
creating responsive, user-friendly, and visually appealing web 
interfaces. A highly skilled and efficient Backend Developer. 
Experience in building and maintaining robust server-side 
applications and various database management systems. 
        </p>
        <br></br>
        {/* Adjust margin-top for spacing */}
        <a
          href="/contact"
          className="mt-8 bg-brown-600 text-white px-7 py-3 rounded-lg hover:bg-brown-500 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </main>
  );
}
