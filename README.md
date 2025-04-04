# 📄 PDF to Excel Extractor

Transform PDFs into structured Excel data effortlessly! 🚀  

---

## 🌟 Overview  

PDF to Excel Extractor is a web-based tool that enables users to **upload PDF files** and **extract table data** into an Excel spreadsheet with just a few clicks.  

---

## 🎯 Key Features  

✅ **Drag & Drop Upload** – Easily select PDFs using drag-and-drop or file browsing.  
✅ **Table Data Extraction** – Smart regex-powered extraction for structured tables.  
✅ **Excel File Generation** – Download extracted tables as `.xlsx` files.  
✅ **Dark Mode UI** – Sleek and modern interface with dark mode support.  

---

## 🛠 Tech Stack  

### **Frontend (React)**  
⚡ React.js | 🔄 Axios | 📁 React Dropzone  

### **Backend (Express.js)**  
🛠 Express.js | 📖 PDF-Parse | 🖼 pdf2pic | 📊 XLSX | 🌍 CORS  

---

## 📁 Project Structure  

```
📂 pdf-to-excel-extractor
├── frontend/         # React App (Frontend)
│   ├── src/         # Source Files
│   │   ├── App.js   # Main React Component
│   │   ├── styles/  # CSS Files
│   ├── public/      # Static Assets
│   ├── package.json # Dependencies
│   └── ...
├── backend/         # Express.js API Server
│   ├── server.js    # Backend Logic
│   ├── uploads/     # Temporary File Storage
│   ├── package.json # Dependencies
│   └── ...
├── README.md        # Documentation
└── .gitignore       # Ignored Files
```

---

## 🏗 Installation & Setup  

### **1️⃣ Backend Setup**  
```sh
cd backend
npm install
node server.js
```
🚀 Backend will run at `http://localhost:5000`  

### **2️⃣ Frontend Setup**  
```sh
cd frontend
npm install
npm start
```
🌐 Frontend available at `http://localhost:3000`  

---

## 📡 API Endpoints  

### **`POST /upload`**  
- **Description:** Uploads a PDF file, extracts table data, and generates an Excel file.  
- **Request:** `multipart/form-data` with `pdf` as the file field.  
- **Response:** JSON containing extracted data and a download URL.  

### **`GET /download/:filename`**  
- **Description:** Downloads the generated Excel file.  
- **Response:** File download.  

---

### ⭐ **Like this project? Give it a star on GitHub!** ⭐