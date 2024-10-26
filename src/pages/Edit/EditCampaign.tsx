import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Editor from "../../components/Editor";
// import Preview from "../../components/Preview";
import { Button } from "antd";

const EditCampaign: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => { 
    localStorage.setItem('load' , 'false');

  });

  const handleSave = () => {
    console.log("Save campaign data"); // Save logic (to be expanded)
    navigate("/campaignPreview");
  };

  return (
    <div className=" h-fit flex flex-col gap-10 py-20 items-center">
      <h1 className="text-3xl font-bold mb-4">Edit Campaign</h1>
      <div className="w-full flex flex-col pr-10 max-w-[1400px] max-h-[850px]">
        <Editor />
        {/* <Preview /> */}
      </div>
      <Button type="primary" onClick={handleSave} className="mt-4">
        Save
      </Button>
    </div>
  );
};

export default EditCampaign;
