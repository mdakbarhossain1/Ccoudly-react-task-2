import { useState } from "react";

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert(`Subscribed with email: ${email}`);
        setEmail('');
    };
    return (
        <div>
            <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto p-4">
                    <h2 className="text-2xl font-bold mb-4 text-center">Subscribe to our Newsletter</h2>
                    <p>Stay in the know! Sign up for our newsletter and get exclusive access to valuable content, exciting updates, and special offers delivered straight to your inbox.</p>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-800"
                            placeholder="Enter your email"
                            required
                        />
                        <button
                            type="submit"
                            className="w-full bg-slate-800 text-white px-4 py-2 rounded-md hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-600"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer