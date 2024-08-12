import { useParams } from 'react-router-dom';

const projectsData = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Providing access to clean and safe drinking water in rural areas.',
    details: 'This project aims to install water purification systems in rural communities...',
    status: 'Ongoing',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'Education for All',
    description: 'Ensuring quality education for underprivileged children.',
    details: 'Through this initiative, we have built schools, trained teachers...',
    status: 'Completed',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    title: 'Healthcare Outreach',
    description: 'Bringing medical care to remote communities.',
    details: 'Healthcare Outreach is an ongoing project aimed at bringing essential medical services to remote and underserved communities. Mobile clinics, staffed by volunteer doctors and nurses, travel to these areas to provide check-ups, vaccinations, and health education. The project has treated over 10,000 patients and is working to expand its reach.',
    status: 'Ongoing',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 4,
    title: 'Sustainable Agriculture',
    description: 'Promoting sustainable farming practices among local farmers.',
    details: 'This project works with local farmers to promote sustainable and environmentally-friendly agricultural practices. By introducing modern farming techniques, providing training, and offering financial support, we aim to increase crop yields and improve food security in the region. The project has helped over 500 farmers transition to sustainable practices.',
    status: 'Completed',
    image: 'https://via.placeholder.com/300',
  },
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find(proj => proj.id === parseInt(id));

  if (!project) return <p>Project not found</p>;

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <img src={project.image} alt={project.title} className="w-full rounded-md mb-4" />
      <p className="text-gray-600 mb-4"><strong>Status:</strong> {project.status}</p>
      <p>{project.details}</p>
    </div>
  );
};

export default ProjectDetails;
