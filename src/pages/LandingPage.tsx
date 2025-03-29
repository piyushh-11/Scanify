import { useNavigate } from 'react-router-dom'
import notionApp from "../assets/notion_app.png";
import receipt from "../assets/receipt.png";
import logo from "../assets/logo.png";

const LandingPage = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-32 -left-16 w-48 h-48 rounded-lg rotate-45 shadow-lg"
          style={{ 
            backgroundImage: `url(${notionApp})`,
            backgroundSize: "contain" 
          }}
        />
        <div className="absolute top-32 right-0 w-40 h-40 rounded-lg rotate-45 shadow-lg"></div>
        <div className="absolute -bottom-26 right-0 w-60 h-74 bg-gray-200 rounded-lg rotate-325 shadow-lg"
          style={{
            backgroundImage: `url(${receipt})`,
            backgroundSize: "100% 100%"
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 text-center px-4">
          <div className="w-24 h-24 mx-auto mb-8 rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: "100% 100%"
            }}
          />

          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-indigo-600">
            Capture, Organize, and Analyze
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
            Your finances in one place
          </h2>

          <button 
            onClick={() => navigate('/login')} 
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg font-medium hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">How to Use</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Upload Receipt</h3>
              <p className="text-gray-600">Simply drag and drop your receipt image or click to select one. We support PNG, JPG, and JPEG formats.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Review & Edit</h3>
              <p className="text-gray-600">Our AI will extract all the information. You can review and edit any details before saving.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-indigo-600 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Save to Notion</h3>
              <p className="text-gray-600">Your receipt will be automatically saved to your Notion database, organized and ready for analysis.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/login')} 
              className="px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg font-medium hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Start Organizing Your Receipts
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage