import { useState } from 'react';
import Person from '../assets/team.jpg';

const AboutUs = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [showMission, setShowMission] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [showValues, setShowValues] = useState(false);
  const [showGoals, setShowGoals] = useState(false);

  const teamMembers = [
    {
      name: 'John Doe',
      role: 'CEO & Founder',
      // image: 'https://via.placeholder.com/150',
      image: Person,
      description: 'John has over 20 years of experience in the non-profit sector, leading initiatives that have transformed communities worldwide.',
    },
    {
      name: 'Jane Smith',
      role: 'Chief Operating Officer',
      // image: 'https://via.placeholder.com/150',
      image: Person,
      description: 'Jane oversees day-to-day operations, ensuring that our projects run smoothly and efficiently.',
    },
    {
      name: 'Alice Johnson',
      role: 'Director of Development',
      // image: 'https://via.placeholder.com/150',
      image: Person,
      description: 'Alice leads our fundraising efforts, building partnerships that support our mission and goals.',
    },
    {
      name: 'Robert Brown',
      role: 'Program Manager',
      // image: 'https://via.placeholder.com/150',
      image: Person,
      description: 'Robert manages our programs, ensuring they meet the needs of the communities we serve.',
    },
    {
      name: 'Emily Davis',
      role: 'Communications Director',
      // image: 'https://via.placeholder.com/150',
      image: Person,
      description: 'Emily is responsible for our public relations and communications, helping to share our story with the world.',
    },
  ];

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">About Us</h2>

      {/* History Section */}
      <div className="mb-6">
        <button
          onClick={() => setShowHistory(!showHistory)}
          className="w-full text-left text-xl font-semibold p-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
          Our History
        </button>
        {showHistory && (
          <div className="mt-4 p-4 bg-white shadow-md rounded-md">
            <p>
              Our NGO was founded in 2000 with a mission to help those in need. Over the years, we&apos;ve expanded our reach and impact, helping communities across the world.
            </p>
          </div>
        )}
      </div>

      {/* Mission Section */}
      <div className="mb-6">
        <button
          onClick={() => setShowMission(!showMission)}
          className="w-full text-left text-xl font-semibold p-4 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none">
          Our Mission
        </button>
        {showMission && (
          <div className="mt-4 p-4 bg-white shadow-md rounded-md">
            <p>
              Our mission is to empower communities through education, healthcare, and sustainable development projects. We strive to create lasting change by addressing the root causes of poverty and inequality.
            </p>
          </div>
        )}
      </div>

      {/* Vision Section */}
      <div className="mb-6">
        <button
          onClick={() => setShowVision(!showVision)}
          className="w-full text-left text-xl font-semibold p-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none">
          Our Vision
        </button>
        {showVision && (
          <div className="mt-4 p-4 bg-white shadow-md rounded-md">
            <p>
              Our vision is a world where everyone has access to the resources they need to lead healthy, fulfilling lives. We believe in a future where poverty and inequality are eradicated.
            </p>
          </div>
        )}
      </div>

      {/* Values Section */}
      <div className="mb-6">
        <button
          onClick={() => setShowValues(!showValues)}
          className="w-full text-left text-xl font-semibold p-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none">
          Our Values
        </button>
        {showValues && (
          <div className="mt-4 p-4 bg-white shadow-md rounded-md">
            <p>
              We are guided by values of integrity, compassion, and innovation. These principles drive our work and help us achieve our mission of empowering communities worldwide.
            </p>
          </div>
        )}
      </div>

      {/* Goals Section */}
      <div className="mb-6">
        <button
          onClick={() => setShowGoals(!showGoals)}
          className="w-full text-left text-xl font-semibold p-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none">
          Our Goals
        </button>
        {showGoals && (
          <div className="mt-4 p-4 bg-white shadow-md rounded-md">
            <p>
              Our goals include expanding our projects to reach more communities, increasing volunteer engagement, and raising awareness about the issues we address through our work.
            </p>
          </div>
        )}
      </div>


      {/* Team Members Section */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300">
              <img src={member.image} alt={member.name} style={{width: "auto", height: "400px"}} className="w-full rounded-md mb-4" />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-600">{member.role}</p>
              <p className="text-sm mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
