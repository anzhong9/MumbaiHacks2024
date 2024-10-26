import { v4 } from "uuid";
import { useLocalStorage } from "@uidotdev/usehooks";
import { FormStateProvider } from "./hooks/stateContext";
import { BACKGROUNDS, THEMES } from "./constants";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
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
  const [state, setState] = useLocalStorage<State>("licg", {
    selectedIdx: 0,
    user: { headshot: "", name: "", handle: "" },
    theme: { background: BACKGROUNDS[0], colors: THEMES[0] },
    slides: [{ uid: v4(), title: "GROW YOUR BUSINESS", text: "GIVE THIS A SUBTITLE" }],
  });

  return (
    <FormStateProvider value={[state, setState]}>
      <Router>
        <Navbar />
        <div className="mt-5 min-h-screen">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/addcampaign" element={<AddCampaign />} />
            <Route path="/uploadcampaign" element={<UploadCampaign />} />
            <Route path="/campaignPreview" element={<CampaignPreview />} />
            <Route path="/editcampaign/:id" element={<EditCampaign />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </FormStateProvider>
  );
}

export default App;
