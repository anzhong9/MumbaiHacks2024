import React from "react";
import Editor from "../components/Editor";
import Preview from "../components/Preview";
import { Form } from "antd";

const AddCampaign: React.FC = () => {
  const [form] = Form.useForm();

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Create Your Campaign</h1>
      <Form layout="vertical" form={form}>
          <Editor />
          <Preview />
      </Form>
    </div>
  );
};

export default AddCampaign;
