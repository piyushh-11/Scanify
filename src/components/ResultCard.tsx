import React from 'react';

interface ResultCardProps {
  message: string;
  subMessage?: string;
  onBack: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ 
  message, 
  subMessage, 
  onBack 
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center space-x-4 w-full my-6">
        <div className="h-2 w-24 rounded-full bg-gray-300"></div>
        <div className="h-2 w-24 rounded-full bg-gray-300"></div>
        <div className="h-2 w-24 rounded-full bg-black"></div>
      </div>

      <div className="bg-gray-200 p-12 rounded text-center w-full max-w-md my-6">
        <p>{message}</p>
        {subMessage && <p className="text-sm mt-2">{subMessage}</p>}
      </div>

      <button 
        onClick={onBack} 
        className="px-6 py-2 border border-gray-300 rounded-md mt-6"
      >
        Back
      </button>
    </div>
  );
};

export default ResultCard;