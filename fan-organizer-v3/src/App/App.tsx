import React, {useState} from "react";

import { Layout } from "../ui/Layout";

import { Feed } from "../features/Feed";
import { Profile } from "../features/Profile";
import { Settings } from "../features/Settings";
import { Sheduler } from "../features/Sheduler";


export const App:React.FunctionComponent<{darkModeDefault:boolean | undefined}> = ({darkModeDefault=false}) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  return (
    <>
      <Layout darkMode={darkMode ? 'darkmode' : undefined} setDarkMode={setDarkMode}/>
      <Profile />
      <Feed/>
      <Sheduler/>
      <Settings/>
    </>
);
}
