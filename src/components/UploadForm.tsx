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
    <div style={{
      padding: '20px',
      fontFamily: 'IBMPlexMono, monospace',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundImage: 'url(/didd.svg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{ width: '40%' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
          Upload Receipt
        </h2>
        <div
          {...getRootProps()}
          style={{
            border: `2px dashed ${isDragActive ? '#007bff' : '#ccc'}`,
            borderRadius: '8px',
            padding: '40px',
            textAlign: 'center',
            cursor: 'pointer',
            backgroundColor: isDragActive ? 'rgba(0, 123, 255, 0.1)' : 'white',
            transition: 'all 0.2s ease',
            fontFamily: 'IBMPlexMono, monospace'
          }}
        >
          <input {...getInputProps()} />
          <p style={{ 
            color: isDragActive ? '#007bff' : '#666',
            fontSize: '16px',
            margin: 0
          }}>
            {isDragActive ? 'Drop the receipt here' : 'Drag and drop a receipt image, or click to select'}
          </p>
        </div>

        {error && (
          <div style={{ 
            marginTop: '20px', 
            color: '#dc3545', 
            textAlign: 'center',
            fontFamily: 'IBMPlexMono, monospace'
          }}>
            {error}
          </div>
        )}

        {receiptData && (
          <div style={{ 
            marginTop: '20px',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ 
              fontSize: '20px', 
              fontWeight: 'bold', 
              marginBottom: '15px',
              fontFamily: 'IBMPlexMono, monospace'
            }}>
              Receipt Data
            </h3>
            <pre style={{ 
              fontFamily: 'IBMPlexMono, monospace',
              fontSize: '14px',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word'
            }}>
              {JSON.stringify(receiptData, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};
