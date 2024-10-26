import React from "react";
import InputField from "../components/ui/InputField";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/ui/ImageUpload";

const UploadCampaign: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 py-20 px-4">
      {/* Card Container */}
      <div className="bg-white shadow-2xl  px-10 py-8 w-[90%] sm:w-[600px] md:w-[700px] lg:w-[750px] rounded-[42px]">
        
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Upload Your Idea
        </h1>

        {/* Estimated Reach */}
        <div className="w-full flex justify-center mb-8">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl shadow-lg py-4 px-6 text-center text-4xl font-semibold tracking-wide">
            Estimated Reach:
            <br />
            <span className="text-5xl font-bold">1.2M ~ 3.0M</span>
          </div>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col md:flex-row gap-10 items-center w-full">
          {/* Image Upload */}
          <ImageUpload />

          {/* Input Fields */}
          <div className="flex flex-col gap-6 w-full md:w-1/2">
            <InputField label="Title" name="title"  />
            <InputField label="Campaign Description" name="description"  />
          </div>
        </div>

        {/* Create Campaign Button */}
        <div className="w-full flex justify-end mt-10">
          <button
            onClick={() => navigate('/CamPaignPreview')}
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:from-blue-600 hover:to-blue-800 transition-transform transform hover:scale-105"
          >
            Create Ads
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadCampaign;
