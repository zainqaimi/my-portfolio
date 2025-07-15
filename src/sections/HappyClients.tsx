// import { motion, useAnimation } from "framer-motion";
// import { useEffect } from "react";

// const HappyClients = () => {
//   const clients = ["Google", "drilllife", "in", "amazon", "Medium", "Spotify"];
//   const controls = useAnimation();

//   // Double the array for seamless looping
//   const duplicatedClients = [...clients, ...clients];

//   useEffect(() => {
//     controls.start({
//       x: ["0%", "-50%"],
//       transition: {
//         duration: 20,
//         repeat: Infinity,
//         ease: "linear",
//       },
//     });
//   }, [controls]);

//   return (
//     <section className="md:py-16 py-8 md:px-10 px-6">
//       <div className=" mx-auto">
//         <div className="text-center mb-14">
//           <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 dark:text-white">
//             Happy Clients
//           </h2>
//           <p className="text-black max-w-2xl mx-auto dark:text-white">
//             There are many variations of passages of Lower Ipsum available, but
//             the majority have suffered alterations.
//           </p>
//         </div>

//         {/* Infinite scrolling container */}
//         <div className="relative overflow-hidden py-4">
//           {/* Gradient fade effects */}
//           <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-purple-50 to-transparent z-10" />
//           <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-purple-50 to-transparent z-10" />

//           {/* Animated logos */}
//           <motion.div className="flex " animate={controls}>
//             {duplicatedClients.map((client, index) => (
//               <div
//                 key={`${client}-${index}`}
//                 className="flex-shrink-0 px-10 py-5 mx-6 bg-white rounded-xl shadow-sm shadow-purple-100 flex items-center justify-center
//                 hover:shadow-md hover:shadow-purple-100 transition-shadow duration-300"
//               >
//                 <span className="text-gray-700 font-medium text-xl">
//                   {client}
//                 </span>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HappyClients;
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import {
  FaReact,
  FaNodeJs,
  FaLaptopCode,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFlutter,
  SiMongodb,
  SiNextdotjs,
  SiElectron,
} from "react-icons/si";

const Skills = () => {
  // Skill items with icon + name
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-500 text-4xl" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black dark:text-white text-4xl" />,
    },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-4xl" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    },
    { name: "Flutter", icon: <SiFlutter className="text-blue-500 text-4xl" /> },
    {
      name: "Electron",
      icon: <SiElectron className="text-indigo-400 text-4xl" />,
    },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
    {
      name: "Full-Stack Apps",
      icon: <FaLaptopCode className="text-purple-500 text-4xl" />,
    },
  ];

  const controls = useAnimation();
  const duplicatedSkills = [...skills, ...skills]; // loop effect

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      },
    });
  }, [controls]);

  return (
    <section className="md:py-16 py-8 md:px-10 px-6">
      <div className="mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl mb-2 font-bold text-black dark:text-white">
            My Skills
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            These are the technologies I use to build modern, scalable, and
            high-performance web & mobile applications.
          </p>
        </div>

        {/* Infinite scroll container */}
        <div className="relative overflow-hidden py-4">
          {/* Gradient fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-100 dark:from-gray-900 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-100 dark:from-gray-900 to-transparent z-10" />

          {/* Scrolling Skills */}
          <motion.div className="flex" animate={controls}>
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="flex-shrink-0 px-10 py-5 mx-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center"
              >
                {skill.icon}
                <span className="text-gray-800 dark:text-white font-medium text-lg mt-2">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
