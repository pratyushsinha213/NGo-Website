
// eslint-disable-next-line react/prop-types
const Card = ({ image, title, text }) => {
  return (
    <div className="w-96 bg-white rounded-lg shadow-md overflow-hidden max-w-xs">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default Card;
