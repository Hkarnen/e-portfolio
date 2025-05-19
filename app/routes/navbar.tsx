import { Outlet, Link } from "react-router";

export default function Navbar() {
    return (
        <div className="flex flex-col min-hscreen font-sans bg-gray-50 text-gray-800">
            <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
                <div className="text-2x1 font-bold text-blue-700">Houston Karnen</div>
                <div className="space-x-6">
                    <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
                    <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About Me</Link>
                    <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-medium">Projects</Link>
                </div>
            </nav>

            <main className="flex-grow container mx-auto px-4 py-6">
                <Outlet />
            </main>

            <footer className="bg-gray-100 text-center text-sm py-4 mt-12">
                <p className="mb-1">2025 Houston Karnen</p>
                <p className="space-x-2">
                    <a href="mailto:houston.ten@gmail.com" className="text-blue-600 hover:underline">Email</a>
                    <a href="https://www.linkedin.com/in/houston-karnen-802b1922a/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a>
                    <a href="https://github.com/Hkarnen" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub</a>
                </p>
            </footer>
        </div>
    );
}