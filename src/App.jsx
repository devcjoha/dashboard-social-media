import useOverviewData from "./hooks/useOverviewData";
import useSocialData from "./hooks/useSocialData";
import Dashboard from "./view/Dashboard";
import { useEffect, useState } from "react";

function App() {
  const dataViews = useOverviewData({});
  const dataSocial = useSocialData({});
  const socialInfo = dataSocial.social;
  const overviews = dataViews.overview;
  const [overview, setOverview] = useState([]);
  const [social, setSocial] = useState([]);
  const [darkMode, setDarkMode] = useState(() => {
    const saveTheme = localStorage.getItem("theme");
    return saveTheme === "dark";
  });

useEffect(()=>{
const root = document.documentElement;
if(darkMode){
root.classList.add("dark");
localStorage.setItem("theme", "dark");
} else {
  root.classList.remove("dark");
  localStorage.setItem("theme", "light");
}
},[darkMode])
  
  useEffect(() => {
    setOverview(overviews);
    setSocial(socialInfo);
  }, [overviews, socialInfo]);
  
  const handleToggle = () => {
    setDarkMode((prevTheme) => !prevTheme);
  };
  return (
    <>
      <main className="app max-w-screen mx-auto min-h-screen text-gray-950 dark:bg-gray-950 bg-white-bg dark:text-text-white z-0 @container">
        <div className="bg-pattern flex justify-center z-10 h-60 w-screen
        lg:dark:bg-top-bg-pattern lg:bg-top-bg-pattern-light ">
        <Dashboard
          overview={overview}
          social={social}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          handleToggle={handleToggle}
        />
        </div>
      </main>
    </>
  );
}

export default App;
