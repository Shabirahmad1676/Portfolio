export default function Education() {
  const experiences = [
    {
      title: "Junior Software Developer",
      company: "Bircube",
      duration: "(2023)",
      description: "Bircube Software House provides quality software and web solutions focused on client satisfaction.",
      location: "Mardan KPK",
      badgeColor: "bg-red-600"
    },
    {
      title: "Web Developer & Partner",
      company: "Gojins",
      duration: "(Dec 2023 - 2024)",
      description: "Gojins specializes in software development and digital solutions for modern businesses.",
      location: "STP Mardan",
      badgeColor: "bg-pink-600"
    }
  ];

  return (
    <div className="flex mt-10">
      {/* left */}
      <div>
      <div className="relative max-w-xl mx-auto">
      {/* Vertical Line */}
      <div className="absolute left-4 top-0 h-full w-1 bg-gray-900"></div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex gap-6 items-center">
            {/* Timeline Circle */}
            <div className="w-4 h-4 bg-red-700 rounded-full  border-4 border-gray-800"></div>

            {/* Experience Card */}
            <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg w-full">
              <h3 className="text-lg font-semibold">{exp.title}</h3>
              <p className="text-gray-400">{exp.company} - {exp.duration}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>

              {/* Location Badge */}
              <span className={`absolute top-3 right-3 text-xs font-semibold px-3 py-1 rounded-lg text-white ${exp.badgeColor}`}>
                {exp.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
      </div>
      {/* right */}
      <div>

      </div>
    </div>
  );
}
