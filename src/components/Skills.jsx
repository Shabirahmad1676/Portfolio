const Skills = () => {
  const skills = [
    { name: "FIGMA", level: 50 },
    { name: "REACT", level: 70 },
    { name: "TAILWIND CSS", level: 90 },
  ];

  return (
    <div className="bg-[#212428] text-white py-10 px-6">
      <h2 className="text-3xl font-bold  mb-8">Skills</h2>
      <div className="grid  gap-8">
        {skills.map((skill, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between text-sm font-semibold">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-800 h-2 rounded-full mt-1">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
