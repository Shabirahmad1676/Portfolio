import { FaCode, FaLaptopCode, FaBrain, FaBusinessTime } from "react-icons/fa";
import { SiReact, SiMongodb } from "react-icons/si";
import { IoMdArrowRoundForward } from "react-icons/io";

const featuresData = [
  {
    id: 1,
    title: "Business Strategy",
    des: "Strategic planning and actions to achieve growth and success.",
  },
  {
    id: 2,
    icon: <SiReact />,
    title: "React Development",
    des: "Creating interactive and fast UIs using the React.js library.",
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "Full Stack Development (MERN)",
    des: "Developing end-to-end apps with MongoDB, Express, React, and Node.",
  },
  {
    id: 4,
    icon: <SiMongodb />,
    title: "Database Management",
    des: "Expertise in managing and optimizing MongoDB for performance.",
  },
  {
    id: 5,
    icon: <FaBrain />,
    title: "Computer Science Enthusiast",
    des: "Passionate about technology, algorithms, and software practices.",
  },
  {
    id: 6,
    icon: <FaCode />,
    title: "Problem Solving",
    des: "Skilled in analyzing and solving complex problems effectively.",
  },
];

const FeatureCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuresData.map((feature) => (
        <div
          key={feature.id}
          className="max-w-sm p-6 flex flex-col bg-[#212428] gap-2 shadow-[10px_5px_10px_5px_rgba(0,0,0,0.29)] dark:bg-gray-800 dark:border-gray-700 rounded-2xl transform transition-transform duration-300 ease-in-out hover:scale-105"
        >
          {feature.icon && <div className="text-[#ff014f] text-3xl">{feature.icon}</div>}
          <a href="#">
            <h5 className="mb-2 text-2xl font-semibold text-white tracking-tight dark:text-white">
              {feature.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {feature.des}
          </p>
          <a href="#" className="flex font-medium items-center text-blue-600 hover:underline">
            See our guideline
          </a>
          <IoMdArrowRoundForward className="text-[#ff014f] text-3xl" />
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;


// const FeatureCards = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//       {featuresData.map((feature) => (
//         <div
//           key={feature.id}
//           className="max-w-sm p-6 flex flex-col bg-[#212428] gap-2 shadow-[10px_5px_10px_5px_rgba(0,0,0,0.29)] dark:bg-gray-800 dark:border-gray-700 rounded-2xl transform transition-transform duration-300 ease-in-out hover:scale-105"
//         >
//           {feature.icon && <div className="text-[#ff014f] text-3xl">{feature.icon}</div>}
//           <a href="#">
//             <h5 className="mb-2 text-2xl font-semibold text-white tracking-tight dark:text-white">
//               {feature.title}
//             </h5>
//           </a>
//           <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
//             {feature.des}
//           </p>
//           <a href="#" className="flex font-medium items-center text-blue-600 hover:underline">
//             See our guideline
//           </a>
//           <IoMdArrowRoundForward className="text-[#ff014f] text-3xl" />
//         </div>
//       ))}
//     </div>
//   );
// };
