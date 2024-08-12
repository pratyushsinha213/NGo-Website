import { useState } from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Providing access to clean and safe drinking water in rural areas.',
    status: 'Ongoing',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Education for All',
    description: 'Ensuring quality education for underprivileged children.',
    status: 'Completed',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Healthcare Outreach',
    description: 'Bringing medical care to remote communities.',
    status: 'Ongoing',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    title: 'Sustainable Agriculture',
    description: 'Promoting sustainable farming practices among local farmers.',
    status: 'Completed',
    image: 'https://via.placeholder.com/300',
  },
];

const Projects = () => {
  const [selectedStatus, setSelectedStatus] = useState('All');

  const filteredProjects = selectedStatus === 'All' ? projectsData : projectsData.filter(project => project.status === selectedStatus);

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Our Projects</h2>

      {/* Filters */}
      <div className="mb-6 text-center">
        <button
          onClick={() => setSelectedStatus('All')}
          className={`mx-2 p-2 rounded-md ${selectedStatus === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedStatus('Ongoing')}
          className={`mx-2 p-2 rounded-md ${selectedStatus === 'Ongoing' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
        >
          Ongoing
        </button>
        <button
          onClick={() => setSelectedStatus('Completed')}
          className={`mx-2 p-2 rounded-md ${selectedStatus === 'Completed' ? 'bg-green-400 text-white' : 'bg-gray-200'}`}
        >
          Completed
        </button>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300">
            <img src={project.image} alt={project.title} className="w-full rounded-md mb-4" />
            <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
            <p className="text-gray-600">{project.description}</p>
            <p className="mt-2 text-sm"><strong>Status:</strong> {project.status}</p>
            <Link to={`/projects/${project.id}`} className="text-blue-500 hover:underline mt-4 block">
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
