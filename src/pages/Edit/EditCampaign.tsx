import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Editor from '../../components/Editor';
import Preview from '../../components/Preview';
import { Button, Form } from 'antd';


const EditCampaign: React.FC = () => {
 
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSave = () => {
    // Save logic (replace with actual save logic)
    console.log("Saved campaign data:", form.getFieldsValue());
    
    // Navigate to CampaignPreview page
    navigate('/CampaignPreview');
  };


  return (
    <div className="min-h-screen flex flex-col gap-10 py-20 items-center">
      <h1 className="text-3xl font-bold w-fit mb-4">Edit Campaign</h1>

      {/* Form Fields */}
      {/* <Form form={form} onValuesChange={handleInputChange} className="flex flex-col gap-y-10 px-10 w-[550px]">
        <InputField label="Campaign Name" name="title" />
        <InputField label="Audience Target" name="audienceTarget" />
        <InputField label="Caption" name="caption" />
        <InputField label="Age Target" name="ageTarget" />
        <InputField label="Gender Target" name="genderTarget" />
      </Form> */}

      {/* Preview Section */}
      <div className="w-full flex flex-col justify-center pr-10">
        <Editor />
        <Preview />
      </div>

      <Button type="primary" onClick={handleSave} className="mt-4">
        Save
      </Button>
    </div>
  );
};

export default EditCampaign;
