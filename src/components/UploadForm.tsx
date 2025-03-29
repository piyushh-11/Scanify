import React from 'react';

const UploadForm: React.FC = () => {
  return (
    <div className="p-4 border border-gray-300 rounded-md bg-white shadow-sm">
      <h2 className="text-lg font-bold mb-4">Upload Receipts</h2>

      {/* Drag and Drop area */}
      <div className="border-dashed border-2 border-gray-300 rounded-md py-10 flex flex-col items-center justify-center mb-4">
        <p className="text-gray-500">Drag and Drop Images</p>
        <p className="text-gray-500">Supported formats: jpg, png</p>
        <p className="text-gray-500">Max file size: 25MB each</p>
      </div>

      {/* File List Placeholder */}
      <div className="mb-4">
        <ul className="space-y-1 text-gray-700">
          <li>Image 1</li>
          <li>Image 2</li>
          <li>Image 3</li>
        </ul>
      </div>

      {/* Upload Button */}
      <div className="flex justify-end">
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          Upload
        </button>
      </div>
    </div>
  );
};

export default UploadForm;
