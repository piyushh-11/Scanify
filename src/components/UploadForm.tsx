import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { processReceiptImage, ReceiptData } from '../utils/llm';

/**
 * UploadForm Component
 * Handles receipt image upload and processing using GPT-4 Vision
 * Provides a drag-and-drop interface with visual feedback
 */
export const UploadForm: React.FC = () => {
  const [receiptData, setReceiptData] = useState<ReceiptData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (!file) return;

    try {
      const data = await processReceiptImage(file);
      setReceiptData(data);
      setError(null);
    } catch (err) {
      setError('Failed to process receipt');
      setReceiptData(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg']
    },
    maxFiles: 1
  });

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          {isDragActive ? 'Drop the receipt here' : 'Drag and drop a receipt image, or click to select'}
        </p>
      </div>

      {error && (
        <div className="mt-4 text-red-500 text-center">{error}</div>
      )}

      {receiptData && (
        <div className="mt-4 text-left">
          <pre className="bg-gray-50 p-4 rounded">
            {JSON.stringify(receiptData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};
