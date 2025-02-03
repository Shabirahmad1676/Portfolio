const Education = () => {
  const experiences = [
    {
      category: "Education",
      items: [
        {
          title: "BS CS",
          uni: "UET Mardan",
          location: "Mardan KPK",
          date: "2021 - Present",
          description: "Focused on software engineering principles, algorithms, and data structures.",
        },
        {
          title: "FSc",
          uni: "SCA & SSC Rustam",
          location: "Mardan",
          date: "2019 - 2021",
          description: "Studied pre-engineering subjects including mathematics, physics, and chemistry.",
        },
        {
          title: "Matriculation",
          uni: "SCA & SSC Rustam",
          location: "Rustam",
          date: "2017 - 2019",
          description: "Studied pre-engineering subjects including mathematics, physics, and chemistry.",
        },
      ],
    },
  ];

  return (
    <div className="text-white py-10">
    
      <div className="grid md:grid-cols-2 gap-8 px-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            <h2 className="text-2xl font-semibold border-b border-gray-500 pb-2">{exp.category}</h2>
            <div className="relative border-l-8 border-gray-900 rounded  mt-4 pl-6">
              {exp.items.map((item, i) => (
                <div key={i} className="mb-6 relative">
                  <div className="absolute z-40 -left-9 top-6 flex items-center justify-center text-center w-5 h-5 bg-gray-900 rounded-full">
                  <div className="absolute z-40 -left-0 ml-1  top-1 w-3  h-3 hover:border-[#ff014f] hover:bg-[#ff014f] border  bg-gray-900 rounded-full "></div>
                  </div>
                  <div className="absolute -left-8 top-8 rounded-r w-10 h-2 bg-gray-900"></div>
                 <div className="pl-[28px] bg-[#17191C] rounded-lg  py-3">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.uni} - {item.location}</p>
                  <p className="text-sm text-gray-400">{item.date}</p>
                  <p className="text-gray-300 mt-2">{item.description}</p>
                 </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
