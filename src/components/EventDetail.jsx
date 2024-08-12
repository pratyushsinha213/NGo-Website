import { useParams } from 'react-router-dom';
import Charity from '../assets/charity.jpg';

const eventsData = [
    {
        id: 1,
        title: 'Annual Charity Run',
        description: 'Join us for our annual charity run to raise funds for clean water initiatives. Participants of all ages are welcome!',
        date: 'September 15, 2024',
        time: '8:00 AM - 12:00 PM',
        location: 'Central Park, New York City',
        registrationLink: 'https://example.com/',
        // image: 'https://via.placeholder.com/300',
        image: Charity,
    },
    {
        id: 2,
        title: 'Youth Leadership Workshop',
        description: 'A workshop designed to inspire and empower young leaders in the community. Learn leadership skills, teamwork, and more.',
        date: 'October 5, 2024',
        time: '10:00 AM - 4:00 PM',
        location: 'Community Center, Brooklyn, NYC',
        registrationLink: 'https://example.com/',
        // image: 'https://via.placeholder.com/300',
        image: Charity,
    },
    {
        id: 3,
        title: 'Sustainable Farming Seminar',
        description: 'Explore sustainable farming practices and how they can benefit local communities. Ideal for farmers and agricultural enthusiasts.',
        date: 'November 12, 2024',
        time: '9:00 AM - 3:00 PM',
        location: 'Green Valley Farm, New Jersey',
        registrationLink: 'https://example.com/',
        // image: 'https://via.placeholder.com/300',
        image: Charity,
    },
];

const EventDetail = () => {
    const { id } = useParams();
    const event = eventsData.find(event => event.id === parseInt(id));

    if (!event) {
        return <p>Event not found.</p>;
    }

    return (
        <div className="max-w-screen-lg mx-auto p-5">
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg shadow-md" />
            <h1 className="text-3xl font-bold mt-8">{event.title}</h1>
            <p className="text-gray-600 mt-2">{event.date} | {event.time}</p>
            <p className="text-gray-600 mt-2">{event.location}</p>
            <p className="mt-6">{event.description}</p>
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-8 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Register Now
            </a>
        </div>
    );
};

export default EventDetail;
