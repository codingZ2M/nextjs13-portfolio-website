import Link from "next/link";
import {FiTwitter}  from "react-icons/fi";
import {RiLinkedinLine}  from "react-icons/ri";
import {BsGithub} from "react-icons/bs";

const AboutMe = () => {
  return (
    <section className="px-2 text-black py-6 sm:py-12 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between p-4 lg:p-8 border shadow-lg rounded-lg">

          {/* Self Introduction Column */}
          <div className="w-full lg:w-2/3  mt-8 lg:mt-0">
            <h2 className="text-2xl sm:text-5xl font-normal mb-4">Hello, I'm Raj, and I'm a Full Stack Web Developer.</h2>
            <p className="text-sm text-justify">
              Hi there! I'm a passionate web developer with a strong background in front-end and back-end technologies.
              I love creating elegant and efficient solutions to complex problems. My goal is to build web applications
              that not only look beautiful but also provide exceptional user experiences.
            </p>

             {/* About Me Button */}
             <button className="mt-10 bg-gray-700 hover:bg-gray-900 text-white py-2 px-6 rounded-full transition duration-300">
               More About Me
             </button>
            
             <div className="flex items-center justify-start space-x-4 mt-10 mb-4">
                <Link href="#">
                  <FiTwitter className="border-2 border-gray-700 p-1 w-8 h-8 rounded-full text-gray-500 hover:text-gray-900 transition duration-300"/>
                </Link>
                <Link href="https://www.linkedin.com/in/codingz2m/"  target="_blank" >
                  <RiLinkedinLine className="border-2 border-gray-700 p-1 w-8 h-8 rounded-full text-gray-500 hover:text-gray-900 transition duration-300"/>
                </Link>
                <Link href="https://github.com/codingZ2M" target="_blank">
                  <BsGithub className="border-2 border-gray-700 p-1 w-8 h-8 text-gray-500 rounded-full  hover:text-gray-900 transition duration-300"/>
                </Link>
             </div>
           
             <div className="flex  flex-col gap-1 mt-4 items-start text-sm">
                <span>codingz2m@gmail.com</span>
                <span>+1 (404) 100 2001</span>
             </div>
          </div>

             {/* Developer Photo Column */}
          <div className="w-full lg:w-1/3 py-6">
            <div className="w-44 h-44 sm:w-96 sm:h-96 rounded-full overflow-hidden mx-auto flex items-center justify-center">
              <img
                src="/images/logo.png" // Replace with your developer photo
                alt="Developer Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
