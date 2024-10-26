import React, { useState } from "react";
import { Form, Select, Input, Button, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddCampaign: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [estimatedReach, setEstimatedReach] = useState<number>(0);

  const onFinish = (values: { name: string; location: string; lower_age: number; upper_age: number; gender: string; occupation: string[]; language: string[] }) => {
    console.log("Form submitted successfully with values:", values);
    navigate("/uploadcampaign");
  };
  const handleFieldChange = () => {
    // Get current form values
    const values: { location: keyof typeof locationPopulations; lower_age: number; upper_age: number; gender: string; occupation: string[]; language: string[] } = form.getFieldsValue();
    let reach = 0;
  
    // Location impact - Population-based increases
    const locationPopulations = {
      "Mumbai": 21673000,
      "Dubai": 3331400,
      "New York": 8804190,
      "London": 8982000,
      "Tokyo": 37400068,
      "Los Angeles": 3980400,
      "Paris": 2148000,
      "Delhi": 31870000,
      "Shanghai": 26320000,
    };
  
    if (locationPopulations[values.location]) {
      reach += locationPopulations[values.location]; // Increase based on city population
    } else if (values.location) {
      reach += 500000; // Smaller increase for less populated or unspecified locations
    }
  
    // Enhanced Age Range impact
    const ageRange = values.upper_age - values.lower_age;
    if (ageRange >= 20) {
      reach += 12000000; // Large range, substantial reach boost
    } else if (ageRange >= 10) {
      reach += 5000000; // Moderate range, moderate boost
    } else {
      reach += 1000000; // Narrow range, still impactful
    }
  
    // Gender impact
    if (values.gender === "M" || values.gender === "F") {
      reach -= 20000; // Slight reduction for specific gender
    } else if (values.gender === "O") {
      reach += 800000; // Increase for inclusive option
    } else if (values.gender === "M,F") {
      reach += 1500000; // Broad audience, moderate increase
    }
  
    // Enhanced Occupation impact
    reach += (values.occupation?.length || 0) * 200000; // Stronger boost per occupation
  
    // Language impact
    reach += (values.language?.length || 0) * 50000; // Increased language impact for broader appeal
  
    setEstimatedReach(reach);
  };
  
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-blue-200 py-20">
      <div className="bg-white shadow-2xl px-10 py-8 w-[90%] sm:w-[600px] md:w-[700px] lg:w-[750px] rounded-[42px]">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Create Your Campaign</h1>

        <div className="w-full flex justify-center mb-8">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl shadow-lg py-4 px-6 text-center text-4xl font-semibold tracking-wide">
            Estimated Reach:
            <br />
            <span className="text-5xl font-bold">{(estimatedReach / 1000000).toFixed(1)}M</span>
          </div>
        </div>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onValuesChange={handleFieldChange}
          className="flex flex-col gap-y-6"
        >
          <Form.Item name="name" label="Audience Name" rules={[{ required: true, message: "Please enter the audience name" }]}>
            <Input className="rounded-lg border border-blue-300 focus:border-blue-500" />
          </Form.Item>

          <Form.Item name="location" label="Location" rules={[{ required: true, message: "Please enter the location" }]}>
            <Input className="rounded-lg border border-blue-300 focus:border-blue-500" />
          </Form.Item>

          <Form.Item name="lower_age" label="Lower Age" rules={[{ required: true, type: "number", min: 0, message: "Please enter a valid lower age" }]}>
            <InputNumber min={0} className="w-full rounded-lg border border-blue-300 focus:border-blue-500" />
          </Form.Item>

          <Form.Item name="upper_age" label="Upper Age" rules={[{ required: true, type: "number", min: 0, message: "Please enter a valid upper age" }]}>
            <InputNumber min={0} className="w-full rounded-lg border border-blue-300 focus:border-blue-500" />
          </Form.Item>

          <Form.Item name="gender" label="Gender" rules={[{ required: true, message: "Please select gender" }]}>
            <Select mode="multiple" placeholder="Select gender(s)" className="rounded-lg border border-blue-300">
              <Option value="M">Male</Option>
              <Option value="F">Female</Option>
              <Option value="O">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item name="occupation" label="Occupation" rules={[{ required: true, message: "Please select at least one occupation" }]}>
            <Select mode="multiple" placeholder="Select occupation(s)" className="rounded-lg border border-blue-300">
              <Option value="student">Student</Option>
              <Option value="engineer">Engineer</Option>
              <Option value="designer">Designer</Option>
              <Option value="developer">Developer</Option>
              <Option value="entrepreneur">Entrepreneur</Option>
              <Option value="freelancer">Freelancer</Option>
            </Select>
          </Form.Item>

          <Form.Item name="language" label="Language" rules={[{ required: true, message: "Please select at least one language" }]}>
            <Select mode="multiple" placeholder="Select language(s)" className="rounded-lg border border-blue-300">
              <Option value="english">English</Option>
              <Option value="spanish">Spanish</Option>
              <Option value="french">French</Option>
              <Option value="german">German</Option>
            </Select>
          </Form.Item>

          <Form.Item className="w-full flex justify-end mt-6">
            <Button type="primary" onClick={() => form.submit()} className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-12 py-4 text-center rounded-lg font-semibold hover:from-blue-600 hover:to-blue-800 flex items-center justify-center">
              Upload Campaign
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddCampaign;
