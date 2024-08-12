import { useParams } from 'react-router-dom';

const blogData = [
  {
    id: 1,
    title: 'Success Story: Community Empowerment',
    content: 'Our community empowerment program has been a resounding success. We worked with local leaders and organizations to provide resources and training that have made a significant impact...',
    author: 'Jane Doe',
    date: 'August 10, 2024',
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    title: 'New Initiative: Green Energy',
    content: 'We are excited to announce the launch of our green energy initiative. This project aims to promote the use of renewable energy sources and reduce our carbon footprint...',
    author: 'John Smith',
    date: 'August 5, 2024',
    image: 'https://via.placeholder.com/300',
  },
];

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogData.find(p => p.id === parseInt(id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
      <img src={post.image} alt={post.title} className="w-full rounded-md mb-4" />
      <p className="text-gray-600 mb-2"><strong>Author:</strong> {post.author}</p>
      <p className="text-gray-600 mb-2"><strong>Date:</strong> {post.date}</p>
      <div className="text-gray-800">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
