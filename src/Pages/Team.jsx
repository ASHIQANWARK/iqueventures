import React from "react";

const teamMembers = [
  { name: "Amit", role: "Founder" },
  { name: "Priya", role: "CTO" },
  { name: "Karan", role: "Head of Ops" },
  { name: "Neha", role: "Marketing Lead" },
];

const Team = () => {
  return (
    <section className="bg-gray-100 py-20 px-8 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-12">Our Team</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
          >
            <div className="w-24 h-24 bg-gray-300 mx-auto rounded-full mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
