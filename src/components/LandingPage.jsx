import { Link } from 'react-router-dom';
import Card from './Card';

// Sample images (replace with actual image URLs or import local images)
const coreValuesImage = "https://via.placeholder.com/400";
const achievementsImage = "https://via.placeholder.com/400";
const getInvolvedImage = "https://via.placeholder.com/400";

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center text-center">
      {/* Sticky Header Section */}
      <div className="sticky top-0 bg-gray-100 p-4 w-full z-10">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our NGO</h1>
        <p className="text-lg mb-8">
          Our mission is to make the world a better place.
        </p>
        <Link to="/get-involved">
          <button className="bg-red-500 text-white px-6 py-2 rounded-md transition duration-300 hover:bg-green-600">
            Join Us in Making a Difference!
          </button>
        </Link>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col items-center mt-20 space-y-12">
        <Card
          image={coreValuesImage}
          title="Our Core Values"
          text="We believe in equality, sustainability, and community empowerment. Our projects are designed to address these core values and make a lasting impact."
        />
        <Card
          image={achievementsImage}
          title="Our Achievements"
          text="Over the years, we have successfully completed numerous projects that have positively impacted thousands of lives. Our volunteers and donors have played a crucial role in these successes."
        />
        <Card
          image={getInvolvedImage}
          title="Get Involved Today"
          text="Whether you want to volunteer, donate, or spread the word, there are many ways to get involved. Join us in our mission and help us make a difference."
        />
      </div>
    </div>
  );
};

export default LandingPage;
