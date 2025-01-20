import React, { useState } from "react";
import { Storage } from "aws-amplify"; // Ensure this is imported correctly

const UploadFiles = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState("");

  const uploadFile = async () => {
    if (!selectedFile) {
      setUploadMessage("Please select a file first!");
      return;
    }

    try {
      const result = await Storage.put(selectedFile.name, selectedFile, {
        contentType: selectedFile.type, // Dynamically set content type
      });
      console.log("File uploaded successfully: ", result);
      setUploadMessage("File uploaded successfully!");
    } catch (error) {
      console.error("Error uploading file: ", error);
      setUploadMessage("Error uploading file. Please try again.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setUploadMessage(""); // Clear the message when a new file is selected
  };

  return (
    <div>
      <h2>Upload File to S3</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload</button>
      {uploadMessage && <p>{uploadMessage}</p>}
    </div>
  );
};

export default UploadFiles;
