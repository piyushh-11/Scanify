import React from 'react';
import Navbar from '../components/Navbar';
import UploadForm from '../components/UploadForm';

const UploadPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <UploadForm />
      </div>
    </div>
  );
};

export default UploadPage;
