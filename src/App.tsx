import { v4 } from "uuid";
import { useEffect } from "react";
import { useLocalStorage } from '@uidotdev/usehooks';
import { FormStateProvider } from "./hooks/stateContext";
import { BACKGROUNDS, THEMES } from "./constants";
import { Form } from "antd";
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import LandingPage from "./pages/Landing";
import AddCampaign from "./pages/AddCampaign";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UploadCampaign from "./pages/UploadCampaign";
import CampaignPreview from "./pages/CampaignPreview";
import EditCampaign from "./pages/Edit/EditCampaign";

export interface ISlide {
  uid: string;
  title: string;
  text?: string;
}

export interface IColor {
  primary: string;
  secondary: string;
  accent: string;
}

export type Backgrounds = typeof BACKGROUNDS[number];

export interface State {
  selectedIdx: number;
  user: {
    headshot: string;
    name: string;
    handle: string;
  };
  theme: {
    background: Backgrounds;
    colors: IColor;
  };
  slides: ISlide[];
}

function App() {
  const [state, setState] = useLocalStorage<State>('licg', {
    selectedIdx: 0,
    user: {
      headshot: "",
      name: "",
      handle: "",
    },
    theme: {
      background: BACKGROUNDS[0],
      colors: THEMES[0],
    },
    slides: [
      {
        uid: v4(),
        title: "GROW YOUR LINKEDIN",
        text: "Cover slide Subtitle",
      }
    ],
  });
  const [form] = Form.useForm();

  useEffect(() => {
    const content = state.slides[state.selectedIdx];
    if (!content) return;
    const { text, title } = content;
    form.setFieldsValue({
      title,
      text
    });
  }, [state.selectedIdx, state.slides, form]);

  return (
    <FormStateProvider value={[state, setState]}>
      <Form layout="vertical" form={form}>
        <Router>
          <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li>
                <Link to="/addcampaign" className="text-white">Add Campaign</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-white">Dashboard</Link>
              </li>
              <li>
                <Link to="/login" className="text-white">Login</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/addcampaign" element={<AddCampaign />} />
            <Route path="/uploadcampaign" element={<UploadCampaign />} />
            <Route path="/campaignPreview" element={<CampaignPreview />} />
            <Route path="/EditCampaign/:id" element={<EditCampaign />} />

            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </Form>
    </FormStateProvider>
  );
}

export default App;
