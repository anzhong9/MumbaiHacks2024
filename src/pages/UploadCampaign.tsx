import React from "react";
import InputField from "../components/ui/InputField";
import { useNavigate } from "react-router-dom";



const UploadCampaign: React.FC = () => {

    const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col gap-10 py-20 items-center">
      <h1 className="text-3xl font-bold w-fit mb-4">Upload Your Idea</h1>

      {/* Estimated Reach */}
      <div className="w-full flex justify-center pr-10">
        <div className="w-fit text-center text-7xl text-gray-700">
          Estimated Reach: <br/> 1.2M ~ 3.0M
        </div>
      </div>

      {/* Form Fields */}
      <span className="flex flex-col gap-y-10 px-10 w-[550px]">
        <InputField label="Campaign Pic BHENCHOD" name="BC" />
        <InputField label="title" name="title" />
        <InputField label="Campaign description" name="description" />
        
      </span>

      {/* Create Campaign Button */}
      <div className="w-full flex justify-end pr-10">
        <button 
        onClick={() => navigate('/CamPaignPreview')}
        className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-500">
          Create Ads
        </button>
      </div>
    </div>
  );
};

export default UploadCampaign;
