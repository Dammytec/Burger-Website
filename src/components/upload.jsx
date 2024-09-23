import React, { useState } from 'react';




function UploadForm() {
  const [fileName, setFileName] = useState('Upload CV');
  const [filePreview, setFilePreview] = useState(null);
  const [showDeleteBtn, setShowDeleteBtn] = useState(false);

  const handleFileUpload = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      setFileName(file.name);
      setFilePreview(URL.createObjectURL(file)); // Generate a URL for the uploaded file
      setShowDeleteBtn(true);
    }
  };

  const deleteCV = () => {
    setFileName('Upload CV');
    setFilePreview(null); // Clear the image preview
    setShowDeleteBtn(false);
    document.getElementById('file-upload').value = '';
  };

  return (
    <div className="text-center">
      <div className="relative">
        <input
          type="file"
          id="file-upload"
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls"
          onChange={handleFileUpload}
        />
        <label
          htmlFor="file-upload"
          className="border outline-none mt-8 h-36 w-[500px] shadow-md font-[flame] font-[700] text-red-600 text-center pl-4 bg-white cursor-pointer hover:bg-slate-400 hover:bg-opacity-10 transition-colors ease-in-out flex items-center justify-center z-0"
        >
          {filePreview ? (
            <img
              src={filePreview}
              alt="CV Preview"
              className="h-full w-full object-cover"
            />
          ) : (
            <span>{fileName}</span>
          )}
        </label>
        {showDeleteBtn && (
          <button
            onClick={deleteCV}
            className="absolute top-2 right-2 bg-red-500 text-white font-bold py-2 px-4 rounded"
          >
            Delete CV
          </button>
        )}
        <h3 className="mt-2 font-[700] font-[flame] tracking-tight text-[#502314] mr-52 pr-10">
          pdf, jpg, jpeg, png, doc, docx, xls
        </h3>
      </div>
    </div>
  );
}

export default UploadForm;


