import { Link } from 'react-router-dom';
import Blog from '../assets/blog.jpg';

const blogData = [
  {
    id: 1,
    title: 'Success Story: Community Empowerment',
    excerpt: 'Learn how our community empowerment program transformed lives...',
    author: 'Jane Doe',
    date: 'August 10, 2024',
    // image: 'https://via.placeholder.com/300',
    image: Blog,
  },
  {
    id: 2,
    title: 'New Initiative: Green Energy',
    excerpt: 'We’re launching a new green energy initiative to combat climate change...',
    author: 'John Smith',
    date: 'August 5, 2024',
    // image: 'https://via.placeholder.com/300',
    image: Blog,
  },
];

const BlogList = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Blog & News</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map(post => (
          <div key={post.id} className="p-4 bg-white shadow-md rounded-md hover:shadow-lg transition-shadow duration-300">
            <img src={post.image} alt={post.title} style={{width: "auto", height: "490px"}} className="w-full rounded-md mb-4" />
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-2"><strong>Author:</strong> {post.author}</p>
            <p className="text-gray-600 mb-2"><strong>Date:</strong> {post.date}</p>
            <p className="text-gray-800 mb-4">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline">
              Read more
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
