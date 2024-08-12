import { Link } from 'react-router-dom';
import Charity from '../assets/charity.jpg';

const eventsData = [
    {
        id: 1,
        title: 'Annual Charity Run',
        description: 'Join us for our annual charity run to raise funds for clean water initiatives. Participants of all ages are welcome!',
        date: 'September 15, 2024',
        time: '8:00 AM - 12:00 PM',
        location: 'Central Park, New York City',
        registrationLink: 'https://example.com/register/charity-run',
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
        registrationLink: 'https://example.com/register/youth-leadership',
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
        registrationLink: 'https://example.com/register/farming-seminar',
        // image: 'https://via.placeholder.com/300',
        image: Charity,
    },
];

const Events = () => {
    return (
        <div className="max-w-screen-lg mx-auto p-5">
            <h1 className="text-3xl font-bold text-center my-8">Upcoming Events</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventsData.map(event => (
                    <div key={event.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h2 className="text-xl font-bold">{event.title}</h2>
                            <p className="text-gray-600 mt-2">{event.date} | {event.time}</p>
                            <p className="text-gray-600 mt-2">{event.location}</p>
                            <p className="mt-4">{event.description}</p>
                            <Link to={`/events/${event.id}`} className="text-blue-500 hover:underline mt-4 block">
                                Learn More & Register
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Events;
