import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-indigo-600">Build4Good</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
            <div>
              <button
                onClick={() => navigate('/login')}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="min-h-screen bg-white flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-5xl rounded-lg relative overflow-hidden">
          <div className="absolute -top-8 -left-8 w-64 h-64 bg-gray-200 rounded-lg rotate-12"></div>
          <div className="absolute top-32 -left-16 w-48 h-48 bg-black rounded-lg rotate-45"></div>

          <div className="absolute -bottom-8 left-24 w-56 h-56 bg-gray-200 rounded-lg -rotate-6"></div>

          <div className="absolute top-8 -right-8 w-48 h-48 bg-gray-200 rounded-lg -rotate-12"></div>
          <div className="absolute top-32 right-0 w-40 h-40 bg-black rounded-lg rotate-45"></div>
          <div className="absolute -bottom-8 right-24 w-48 h-48 bg-gray-200 rounded-lg rotate-12"></div>

          <div className="min-h-[600px] flex flex-col items-center justify-center relative z-10 py-16 px-4">
            <div className="bg-gray-300 w-20 h-20 rounded-lg flex items-center justify-center text-sm text-gray-700 mb-12">
              Logo
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Capture, Organize, and Analyze:
            </h1>

            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Your finances in one place
            </h2>


            <button className="px-8 py-3 border border-gray-300 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage