// style={{fontFamily: "Permanent Marker", fontSize: "3rem"}}
const GetInvolved = () => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Form Submitted SUCCESSFULLY!');
    };

    return (
        <div className="max-w-screen-lg mx-auto p-5">
            <h1 className="text-3xl font-bold text-center my-8">Get Involved</h1>

            {/* Introduction Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">How You Can Help</h2>
                <p className="text-gray-600">
                    We are always looking for passionate individuals to join us in our mission to create positive change. Whether you want to volunteer your time, donate, or spread the word, your contribution makes a significant impact.
                </p>
            </section>

            {/* Volunteer Opportunities Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Volunteer Opportunities</h2>
                <ul className="list-disc list-inside text-gray-600">
                    <li className="mb-2">Community Outreach: Help us reach out to local communities and provide essential services.</li>
                    <li className="mb-2">Event Organization: Assist in planning and organizing our events and workshops.</li>
                    <li className="mb-2">Fundraising: Support our fundraising efforts by organizing or participating in campaigns.</li>
                    <li className="mb-2">Social Media Advocacy: Use your social media skills to spread awareness about our causes.</li>
                </ul>
            </section>

            {/* Volunteer Form Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Volunteer Information Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input type="text" id="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input type="email" id="email" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="tel" id="phone" className="mt-1 p-2 w-full border border-gray-300 rounded-md" required />
                    </div>
                    <div>
                        <label htmlFor="interests" className="block text-sm font-medium text-gray-700">Areas of Interest</label>
                        <select id="interests" className="mt-1 p-2 w-full border border-gray-300 rounded-md">
                            <option>Community Outreach</option>
                            <option>Event Organization</option>
                            <option>Fundraising</option>
                            <option>Social Media Advocacy</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="availability" className="block text-sm font-medium text-gray-700">Availability</label>
                        <textarea id="availability" rows="4" className="mt-1 p-2 w-full border border-gray-300 rounded-md" placeholder="Please describe your availability"></textarea>
                    </div>
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                        Submit
                    </button>
                </form>
            </section>

            {/* Donations Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
                <p className="text-gray-600 mb-4">
                    Your donations help us fund our projects and reach more people in need. Even a small contribution can make a big difference.
                </p>
                <a href="https://example.com/donate" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600">
                    Donate Now
                </a>
            </section>
        </div>
    );
};

export default GetInvolved;
