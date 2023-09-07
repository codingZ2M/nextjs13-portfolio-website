import {BsPersonWorkspace}  from "react-icons/bs";
import { Card, Flex, Text, ProgressBar } from "@tremor/react";

const Skills = () => {
  // Define your skills data (you can fetch this from an API or define it statically)
  const skills = [
    { name: 'HTML5', level: 90, color: 'bg-red-500' },
    { name: 'CSS3', level: 85, color: 'bg-blue-500' },
    { name: 'JavaScript', level: 80, color: 'bg-yellow-500' },
    { name: 'React', level: 75, color: 'bg-green-500' },
    { name: 'Next.JS', level: 90, color: 'bg-red-500' },
    { name: 'Typescript', level: 75, color: 'bg-green-500' },
    { name: 'Tailwindcss', level: 85, color: 'bg-blue-500' },
    { name: 'MongoDB', level: 80, color: 'bg-yellow-500' },
    { name: 'Mongoose', level: 85, color: 'bg-yellow-500' },
    { name: 'Firestore', level: 75, color: 'bg-green-500' },
    { name: 'NextAuth', level: 80, color: 'bg-yellow-500' },
    { name: 'Vercel', level: 75, color: 'bg-green-500' },
    { name: 'Firebase', level: 75, color: 'bg-green-500' },
    { name: 'Git', level: 75, color: 'bg-green-500' },
  ];

  return (
    <section className="bg-black mb-12 sm:mb-24 py-0 sm:py-12">
      <div className="container mx-auto">
         <div className="flex items-center justify-center gap-2 text-2xl sm:text-5xl font-normal text-center mb-4 sm:mb-12 pt-8">
              <BsPersonWorkspace className="text-white"/>
             <h2 className="text-white">Skills </h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {skills.map((skill, index) => (
            <div
              key={index} >
                 <Card className="w-84 mx-2 bg-gray-900">
                    <h3 className="text-sm font-normal text-white  mt-1">
                      {skill.name}
                    </h3>
                    <Flex>
                        <Text className="text-white">0% &bull; {skill.level}</Text>
                        <Text className="text-white">100%</Text>
                    </Flex>
                    <ProgressBar value={skill.level} color="teal" className="mt-3" />
                 </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
