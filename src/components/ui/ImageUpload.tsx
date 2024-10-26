import React, { useState, useRef } from "react";
import { useDropzone } from "react-dropzone";
import { cn } from "../cnutils"; // Optional: Utility for className manipulation if needed

interface ImageUploadProps {
  onImageUpload?: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File) => {
    const previewUrl = URL.createObjectURL(file);
    setPreview(previewUrl);
    onImageUpload?.(file);
  };

  const handleDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      handleFileChange(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: handleDrop,
  });

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      handleFileChange(event.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center">
      {preview ? (
        <div className="relative size-96">
          <img
            src={preview}
            alt="Uploaded preview"
            className="object-cover w-full h-full rounded-lg"
          />
          <button
            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full"
            onClick={() => setPreview(null)}
          >
            ✕
          </button>
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={cn(
            "border-2 border-dashed border-gray-300 rounded-lg p-4 size-96 flex items-center justify-center cursor-pointer",
            isDragActive && "border-blue-500"
          )}
        >
          <input
            {...getInputProps()}
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            className="hidden"
          />
          <div className="text-center text-gray-500">
            <p>Drag & drop an image, or</p>
            <button
              type="button"
              onClick={openFilePicker}
              className="text-blue-500 underline"
            >
              select a file
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
