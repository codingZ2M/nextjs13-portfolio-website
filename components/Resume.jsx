import Link from "next/link";

const Resume = () => {
  return (
    <section className="bg-black text-white mb-16 sm:mb-20 px-2">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row items-center justify-center lg:justify-between p-4 lg:p-8 border shadow-md shadow-dark-tremor-content-emphasis rounded-lg">
       
          {/* Self Introduction Column */}
          <div className="w-full lg:w-2/3 lg:order-1 mt-8 lg:mt-0">
            <h2 className="text-2xl sm:text-5xl font-normal mb-4">Resume</h2>
            
            <p className="mb-4 text-justify">
                My resume highlights my proficiency in front-end and back-end
                technologies, my project portfolio, and my educational background.
                Whether you're a potential employer or just curious to learn more about
                me, my resume has got you covered.
            </p>
          
             {/* About Me Button */}
             <button className="mt-10 bg-gray-700 hover:bg-gray-900 text-white py-2 px-6 rounded-full transition duration-300">
               Download
            </button>
            
            <div className="flex  flex-col gap-1 mt-4 items-start">
              <span>codingz2m@gmail.com</span>
              <span>+1 (404) 100 2001</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
