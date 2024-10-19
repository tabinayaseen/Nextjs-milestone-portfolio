import Pic from './my.jpg';
import Image from 'next/image';


export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
       
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold text-brown-700 mb-4">Hello I am Tabina Yaseen</h1>
          <p className="text-lg text-brown-500 mb-6">
          A detail-oriented and innovative Frontend Developer with 2 years of experience in creating responsive, user-friendly, and visually appealing web interfaces.
          Proficient in programming languages such as PHP , C# , ASP.NET CORE with strong knowledge of databases, API development, and cloud services.
          </p>
          <a
            href="/about"
            className="bg-brown-600 text-white px-6 py-3 rounded-lg hover:bg-brown-500 transition-colors"
          >
            Learn More About Me
          </a>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src={Pic} 
            alt="Tabeena Yaseen"
            width={320}  
            height={320}
            className="rounded-full shadow-lg object-cover"
          />
        </div>
      </div>
    </main>
  );
}
