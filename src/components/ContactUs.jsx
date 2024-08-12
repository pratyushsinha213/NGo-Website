
const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
        alert('Message sent!');
    };

    return (
        <div className="p-8 bg-gray-100">
            <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>

            <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="subject" className="block text-sm font-bold text-gray-700">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-bold text-gray-700">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Send Message
                    </button>
                </form>
            </div>

            {/* Contact Details */}
            <div className="mt-8 max-w-lg mx-auto">
                <h3 className="text-2xl font-semibold mb-4">Our Contact Information</h3>
                <p className="text-gray-600 mb-2"><strong>Phone:</strong> +1-234-567-890</p>
                <p className="text-gray-600 mb-2"><strong>Email:</strong> contact@ngo.org</p>
                <p className="text-gray-600 mb-4"><strong>Address:</strong> 123 NGO Street, City, Country</p>

                {/* Google Maps Embed */}
                <div className="w-full h-64">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.290351418577!2d-122.4064174846846!3d37.78337877975831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d71e1bfa1%3A0x57f9175bda7e14e4!2s1%20Market%20St%2C%20San%20Francisco%2C%20CA%2094111%2C%20USA!5e0!3m2!1sen!2sin!4v1630632931224!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="Google Maps Location"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
