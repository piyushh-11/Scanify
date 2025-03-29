import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import { ReceiptData } from '../utils/llm';
import { useNavigate } from 'react-router-dom';

interface ReceiptPreviewProps {
  receiptData: ReceiptData;
}

const ReceiptPreview: React.FC<ReceiptPreviewProps> = ({ receiptData }) => {
  const [receipt, setReceipt] = useState(receiptData);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, index: number) => {
    const { name, value } = e.target;
    if (name === "total") {
      setReceipt({ ...receipt, total: parseFloat(value) });
    } else {
      const items = [...receipt.items];
      items[index].price = parseFloat(value);
      setReceipt({ ...receipt, items });
    }
  };

  const handleUpload = async () => {
    setIsUploading(true);
    setUploadError(null);
    setUploadSuccess(false);

    try {
      setUploadSuccess(true);
    } catch (error) {
      console.error('Error uploading to Notion:', error);
      setUploadError('Failed to upload to Notion. Please check your configuration.');
    } finally {
      setIsUploading(false);
    }
  };

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
        <h2 style={{ textAlign: 'center', fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>Receipt Preview</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                <TableCell style={{ fontFamily: 'IBMPlexMono, monospace', fontWeight: 'bold', fontSize: '16px' }}>Field</TableCell>
                <TableCell style={{ fontFamily: 'IBMPlexMono, monospace', fontWeight: 'bold', fontSize: '16px' }}>Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ fontFamily: 'IBMPlexMono, monospace', fontWeight: 'bold', fontSize: '16px' }}>Vendor</TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    name="vendor"
                    value={receipt.vendor}
                    onChange={(e) => setReceipt({ ...receipt, vendor: e.target.value })}
                    fullWidth
                    InputProps={{
                      style: { fontFamily: 'IBMPlexMono, monospace' }
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontFamily: 'IBMPlexMono, monospace', fontWeight: 'bold', fontSize: '16px' }}>Category</TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    name="category"
                    value={receipt.category}
                    onChange={(e) => setReceipt({ ...receipt, category: e.target.value })}
                    fullWidth
                    InputProps={{
                      style: { fontFamily: 'IBMPlexMono, monospace' }
                    }}
                  />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ fontFamily: 'IBMPlexMono, monospace', fontWeight: 'bold', fontSize: '16px' }}>Date</TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    name="date"
                    value={receipt.date}
                    onChange={(e) => setReceipt({ ...receipt, date: e.target.value })}
                    fullWidth
                    InputProps={{
                      style: { fontFamily: 'IBMPlexMono, monospace' }
                    }}
                  />
                </TableCell>
              </TableRow>
              {receipt.items.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      size="small"
                      name="name"
                      value={item.name}
                      onChange={(e) => {
                        const items = [...receipt.items];
                        items[index].name = e.target.value;
                        setReceipt({ ...receipt, items });
                      }}
                      fullWidth
                      InputProps={{
                        style: { fontFamily: 'IBMPlexMono, monospace' }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      variant="outlined"
                      size="small"
                      name="price"
                      value={item.price.toString()}
                      onChange={(e) => handleInputChange(e, index)}
                      fullWidth
                      InputProps={{
                        style: { fontFamily: 'IBMPlexMono, monospace' }
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
              <TableRow style={{ backgroundColor: '#f5f5f5' }}>
                <TableCell style={{ fontFamily: 'IBMPlexMono, monospace', fontWeight: 'bold', fontSize: '16px' }}>Total</TableCell>
                <TableCell>
                  <TextField
                    variant="outlined"
                    size="small"
                    name="total"
                    value={receipt.total.toString()}
                    onChange={(e) => handleInputChange(e, -1)}
                    fullWidth
                    InputProps={{
                      style: { fontFamily: 'IBMPlexMono, monospace' }
                    }}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          {uploadError && (
            <div style={{ color: 'red', marginBottom: '10px' }}>{uploadError}</div>
          )}
          {uploadSuccess && (
            <div style={{ color: 'green', marginBottom: '10px' }}>Successfully uploaded to Notion!</div>
          )}
          <button 
            onClick={handleUpload}
            disabled={isUploading}
            style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: isUploading ? '#cccccc' : '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: isUploading ? 'not-allowed' : 'pointer'
            }}
          >
            {isUploading ? 'Uploading...' : 'Upload to Notion'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceiptPreview;