import React from "react";
import { Form, Select, Input, Button, InputNumber } from "antd";
import { useNavigate } from "react-router-dom";



const { Option } = Select;

const AddCampaign: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = (values: { name: string; location: string; lower_age: number; upper_age: number; gender: string; occupation: string[]; language: string[] }) => {
    console.log("Form submitted successfully with values:", values);
    navigate("/uploadcampaign");
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); // Prevent the default form submission behavior
    form.submit(); // Manually trigger form submission
  };
  

  return (
    <div className=" flex flex-col items-center bg-gradient-to-br from-blue-100 via-white to-blue-200 py-20 ">
      <div className="bg-white shadow-2xl px-10 py-8 w-[90%] sm:w-[600px] md:w-[700px] lg:w-[750px] rounded-[42px]">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Create Your Campaign
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
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          // onSubmitCapture={(e) => e.preventDefault()} // Prevent default form submission
          className="flex flex-col gap-y-6"
>
          <Form.Item
            name="name"
            label="Audience Name"
            rules={[{ required: true, message: "Please enter the audience name" }]}
          >
            <Input className="rounded-lg border border-blue-300 focus:border-blue-500" />
          </Form.Item>

          <Form.Item
            name="location"
            label="Location"
            rules={[{ required: true, message: "Please enter the location" }]}
          >
            <Input className="rounded-lg border border-blue-300 focus:border-blue-500" />
          </Form.Item>

          <Form.Item
            name="lower_age"
            label="Lower Age"
            rules={[
              { required: true, type: "number", min: 0, message: "Please enter a valid lower age" },
            ]}
          >
            <InputNumber min={0} className="w-full rounded-lg border border-blue-300 focus:border-blue-500" />
          </Form.Item>

          <Form.Item
            name="upper_age"
            label="Upper Age"
            rules={[
              { required: true, type: "number", min: 0, message: "Please enter a valid upper age" },
            ]}
          >
            <InputNumber min={0} className="w-full rounded-lg border border-blue-300 focus:border-blue-500" />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select gender" }]}
          >
            <Select placeholder="Select gender" className="rounded-lg border border-blue-300">
              <Option value="M">Male</Option>
              <Option value="F">Female</Option>
              <Option value="O">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="occupation"
            label="Occupation"
            rules={[{ required: true, message: "Please select at least one occupation" }]}
          >
            <Select
              mode="multiple"
              placeholder="Select occupation(s)"
              className="rounded-lg border border-blue-300"
            >
              <Option value="student">Student</Option>
              <Option value="engineer">Engineer</Option>
              <Option value="designer">Designer</Option>
              <Option value="developer">Developer</Option>
              <Option value="entrepreneur">Entrepreneur</Option>
              <Option value="freelancer">Freelancer</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="language"
            label="Language"
            rules={[{ required: true, message: "Please select at least one language" }]}
          >
            <Select
              mode="multiple"
              placeholder="Select language(s)"
              className="rounded-lg border border-blue-300"
            >
              <Option value="english">English</Option>
              <Option value="spanish">Spanish</Option>
              <Option value="french">French</Option>
              <Option value="german">German</Option>
            </Select>
          </Form.Item>

          {/* Submit Button */}
          <Form.Item className="w-full flex justify-end mt-6">
          <Button
              type="primary"
              onClick={handleSubmit} // Trigger custom submit handler
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-12 py-4 text-center rounded-lg font-semibold hover:from-blue-600 hover:to-blue-800 flex items-center justify-center"
            >
              Upload Campaign
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default AddCampaign;
