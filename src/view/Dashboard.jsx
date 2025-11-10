import Header from "../components/layout/Header";
import SocialMedia from "../components/layout/SocialMedia";
import Overviews from "../components/layout/Overviews";


function Dashboard({ social, overview, handleToggle, darkMode, setDarkMode}) {
  
  return (
    <>
      <section className="dashboard lg:w-282 w-83 min-h-screen z-50">
        <Header
        social={social}
        handleToggle={handleToggle}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        ></Header>
        <SocialMedia social={social} />
        <Overviews overview={overview} />
      </section>
    </>
  );
}
export default Dashboard;
