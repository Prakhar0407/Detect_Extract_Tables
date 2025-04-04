import React, { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [processing, setProcessing] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "application/pdf",
    onDrop: (acceptedFiles) => setFile(acceptedFiles[0]),
  });

  const handleUpload = async () => {
    if (!file) return alert("Please select a PDF file.");
    const formData = new FormData();
    formData.append("pdf", file);

    setProcessing(true);
    setData([]);
    setDownloadUrl("");

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData
      );
      setData(response.data.data);
      setDownloadUrl(response.data.downloadUrl);
    } catch (error) {
      alert(error.response?.data?.error || "Failed to process PDF.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="app-container">
      <div className="container">
        {/* Header */}
        <h1 className="app-title">📄 PDF to Excel Extractor</h1>

        {/* Drag and Drop */}
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <h5>Drag & Drop your PDF here</h5>
          <p className="text-muted">or click to select a file</p>
        </div>

        {/* File Info */}
        {file && <p className="file-selected">✔ Selected: {file.name}</p>}

        {/* Upload Button */}
        <button onClick={handleUpload} disabled={processing} className="btn-upload">
          {processing ? "⏳ Processing..." : "🔍 Extract Tables"}
        </button>

        {/* Extracted Table */}
        {data.length > 0 && (
          <div className="table-container">
            <h4>📊 Extracted Data</h4>
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    {data[0].map((col, i) => (
                      <th key={i}>{col}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((col, colIndex) => (
                        <td key={colIndex}>{col}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Download Button */}
        {downloadUrl && (
          <a href={downloadUrl} download="ExtractedData.xlsx" className="btn-download">
            ⬇️ Download Excel
          </a>
        )}

        {/* Footer */}
        <footer className="footer">
          <p>Made with ❤️ for efficiency</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
