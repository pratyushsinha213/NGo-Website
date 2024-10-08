import { Link } from 'react-router-dom';
import Image from '../assets/placeholderReplacement.png';

// The commented images are the placeholders but instead of the placeholders, its replaced by the image

const cardData = [
  {
    // image: "https://via.placeholder.com/400",
    image: Image,
    title: "Our Core Values",
    text: "We believe in equality, sustainability, and community empowerment. Our projects are designed to address these core values and make a lasting impact.",
  },
  {
    // image: "https://via.placeholder.com/400",
    image: Image,
    title: "Our Achievements",
    text: "Over the years, we have successfully completed numerous projects that have positively impacted thousands of lives. Our volunteers and donors have played a crucial role in these successes.",
  },
  {
    // image: "https://via.placeholder.com/400",
    image: Image,
    title: "Support from Donors",
    text: "The support from our generous donors is the backbone of our operations. Their contributions enable us to carry out our mission and change lives for the better.",
  },
  {
    // image: "https://via.placeholder.com/400",
    image: Image,
    title: "Community Impact",
    text: "Our efforts have resulted in significant positive changes within communities. We continue to work closely with local leaders to ensure that our projects are sustainable and effective.",
  },
  {
    // image: "https://via.placeholder.com/400",
    image: Image,
    title: "Future Goals",
    text: "We are committed to expanding our reach and impact in the coming years. Our future goals include launching new initiatives focused on education, healthcare, and environmental sustainability.",
  },
  {
    // image: "https://via.placeholder.com/400",
    image: Image,
    title: "Get Involved Today",
    text: "Whether you want to volunteer, donate, or spread the word, there are many ways to get involved. Join us in our mission and help us make a difference.",
  },
];

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen items-center text-center">
      {/* Sticky Header Section */}
      <div className="sticky top-0 flex flex-col bg-gray-100 p-4 w-full z-10">
        <h1 className="text-4xl font-bold mb-4 mt-4">Welcome to Our NGO</h1>
        <p className="text-lg mb-8">
          Our mission is to make the world a better place.
        </p>
        <Link to="/get-involved">
          <button className=" bg-red-500 text-white px-6 py-2 rounded-md transition duration-300 hover:bg-green-600">
            Join Us in Making a Difference!
          </button>
        </Link>
      </div>

      {/* Cards Section */}
      <div className="py-10 px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300">
            <img src={card.image} alt={card.title} style={{width: "auto", height: "400px"}} className="w-full rounded-md mb-4" />
            <h4 className="text-xl font-semibold">{card.title}</h4>
            <p className="text-gray-600">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
