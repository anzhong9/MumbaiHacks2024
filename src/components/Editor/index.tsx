import {
  BgColorsOutlined,
  DownloadOutlined,
  EditOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Tabs, message } from "antd";
// import Renderer from "../Renderer";

import { ContentForm, SettingsForm, ThemeForm } from "./Forms";
import { useState } from "react";
import { download } from "./download";
import { useFormState } from "../../hooks/stateContext";

import img from '../../assets/16.png'; 

const tabs = [
  {
    uid: 'edit',
    Label: () => (
      <>
        <EditOutlined /> Content
      </>
    ),
    Component: () => <ContentForm />,
  },
  {
    uid: 'setting',
    Label: () => (
      <>
        <UserOutlined /> User
      </>
    ),
    Component: () => <SettingsForm />,
  },
  {
    uid: 'theme',
    Label: () => (
      <>
        <BgColorsOutlined /> Theme
      </>
    ),
    Component: () => <ThemeForm />,
  },
  {
    uid: 'download',
    Label: () => (
      <>
        <DownloadOutlined /> Download
      </>
    ),
    Component: () => <></>
  },
];

function Editor() {
  const [form] = useFormState()!;
  const [activeKey, setActiveKey] = useState(tabs[0].uid);
  const [api, contextHolder] = message.useMessage();

  const handleTabClick = async (key: string) => {
    if (key !== 'download') {
      return setActiveKey(key);
    }

    await download(api, form);
  }

  return (
    <section className="editor">
      <div>

      <img 
  src={img} 
  alt="Description of the image" 
  style={{ width: '600px', height: '600px' ,padding:'20px' }} // Add any desired styles
/>
      </div>
      <div className="form-container">
        <Tabs
          activeKey={activeKey}
          type="card"
          className="editor-tabs"
          onTabClick={handleTabClick}
          items={tabs.map(({ Label, Component, uid }) => ({
            label: <Label />,
            key: uid,
            children: <Component />,
          }))}
        />
      </div>
    </section>
  );
}

export default Editor;