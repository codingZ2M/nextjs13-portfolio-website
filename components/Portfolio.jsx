import {BsGithub} from "react-icons/bs";
import {VscLiveShare} from "react-icons/vsc";
import {GoProjectSymlink} from "react-icons/go";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: 'JOB BOARD WEBSITE - React, Tailwind CSS',
    image: 'images/project-1.png', // Replace with actual image path
    githubLink: 'https://github.com/codingZ2M/react-job-board-website',
    demoLink: 'https://react-job-board-website.web.app/',
  },
  {
    id: 2,
    title: 'E-Commerce Website - React, Next.js 13',
    image: 'images/project-2.png', // Replace with actual image path
    githubLink: 'https://github.com/codingZ2M/nextjs13-ecommerce-website',
    demoLink: 'https://nextjs13-ecommerce-website.vercel.app/',
  },
  {
    id: 3,
    title: 'CRYPTO DASHBOARD - React, Next.js 13, Rapid API',
    image: 'images/project-3.png', // Replace with actual image path
    githubLink: 'https://github.com/codingZ2M/nextjs13-crypto-dashboard',
    demoLink: 'https://nextjs13-crypto-dashboard.vercel.app/',
  },
  {
    id: 4,
    title: 'FULL STACK EVENT MANAGEMENT APP - Next.JS 13, MongoDB',
    image: 'images/project-4.png', // Replace with actual image path
    githubLink: 'https://github.com/codingZ2M/nextjs13-event-management-mongodb',
    demoLink: 'https://nextjs13-event-management-mongodb-ns8nmsyv7-codingz2m.vercel.app/',
  },
];

const Portfolio = () => {
  return (
    <div className="px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 sm:mb-24  bg-black">
         <div className="flex items-center justify-center gap-2 text-2xl sm:text-5xl font-normal  text-white text-center pt-8">
              <GoProjectSymlink/>
             <h2 >Portfolio </h2>
         </div>
         {projects.map((project) => (
          <div key={project.id}
                className="bg-gray-900 text-white p-4 rounded-lg shadow-md transition duration-300 hover:shadow-xl shadow-dark-tremor-content-emphasis
                            flex flex-col items-center justify-center"
          >
          <img
            src={project.image}
            alt={project.title}
            className="w-60 h-fit   object-cover mb-4 rounded-lg"
          />
          <h3 className="text-sm font-normal mb-4">{project.title}</h3>
          <div className="flex gap-20">
              <Link href={project.githubLink} target="_blank">
                <BsGithub className="border-2 border-gray-500 p-1 w-8 h-8 text-white rounded-full  hover:text-gray-500 transition duration-300"/>
              </Link>
              <Link href={project.demoLink} target="_blank">
                <VscLiveShare className="border-2 border-gray-500 p-1 w-8 h-8 text-white rounded-full  hover:text-gray-500 transition duration-300"/>
              </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
