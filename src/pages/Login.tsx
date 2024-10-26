import React, { useState } from 'react';
import { Form, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import InputField from '../components/ui/InputField';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [formErrors, setFormErrors] = useState<string | null>(null);

  const onFinish = (values: any) => {
    console.log('Login Success:', values);
    navigate('/dashboard');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Login Failed:', errorInfo);
    setFormErrors('Please fill in all required fields correctly.');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[400px] h-[450px] flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-900">Login to AdGenie</h1>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="space-y-4"
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Enter a valid email!' },
            ]}
          >
            <InputField
              label="Email"
              className="rounded-md"
              value={form.getFieldValue('email') || ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                form.setFieldsValue({ email: e.target.value })
              }
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <InputField
              label="Password"
              type="password"
              value={form.getFieldValue('password') || ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                form.setFieldsValue({ password: e.target.value })
              }
              className="rounded-md"
            />
          </Form.Item>

          {formErrors && (
            <div className="text-red-500 text-center mb-2">{formErrors}</div>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-gradient-to-r h-fit from-blue-400 to-blue-600 hover:scale-105 text-white font-semibold py-3 rounded-xl transition-all duration-300"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
