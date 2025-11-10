import { useState, useEffect } from "react";
import ModeToggle from "../common/ModeToggle";

function Header({ darkMode, setDarkMode, handleToggle, social }) {
  const [followers, setFollowers] = useState(0);

  useEffect(() => {
    const total = social.reduce((a,item)=>{
    return a += item.followers
    },0);
      setFollowers(total);
  }, [social]);


  return (
    <>
      <section className="header-container lg:justify-between lg:h-32 items-center">

        <div className="header-left flex flex-col h-25 justify-center">
          <h1 className="header-h1 lg:text-size-32 text-size-24 font-bold">
            Social Media Dashboard
          </h1>
          <span className="text-[.8rem] lg:text-[.9rem] font-bold text-text-gray-650 dark:text-gray-400">Total Followers: {followers.toLocaleString()}</span>
        </div>

        <div className="toogle-container flex items-center lg:justify-end justify-between 
        w-90 h-20 pb-5 gap-3 font-bold text-[.85rem] text-text-gray-650
        lg:border-transparent border-t">
          {darkMode ? (
            <label htmlFor="label-dark" className=" dark:text-gray-400">
              Light Mode
            </label>
          ) : (
            <label htmlFor="label-light" className="dark:text-gray-400">
              Dark Mode
            </label>
          )}
          <ModeToggle
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            handleToggle={handleToggle}
          />
        </div>
      </section>
    </>
  );
}
export default Header;
