import upArrow from "../../assets/icon-up.svg";
import downArrow from "../../assets/icon-down.svg";
function CardSocialMedia({
  platform,
  username,
  followers,
  change,
  icon,
  color,
}) {
  const formatFollowers = (num) => {
    return num >= 1000 ? (num / 1000).toFixed() + "K" : num;
  };

  return (
    <>
      <div
        className={
          platform !== "Instagram"
            ? `card-media-container w-90 lg:w-65 h-55 border-t-[.3rem] border-${color} rounded-md 
            dark:bg-card-bg-navy bg-card-bg-navy-light hover:bg-hover-bg-card dark:hover:bg-gray-700 cursor-pointer`
            : `card-media-container w-90 lg:w-65 h-55  rounded-md 
            dark:bg-card-bg-navy bg-card-bg-navy-light hover:bg-hover-bg-card dark:hover:bg-gray-700 cursor-pointer`
        }
      >
        {platform === "Instagram" ? (
          <div className=" bg-linear-to-r from-inst-from via-pink-500 to-inst-to p-0.5 rounded-t-[3rem] "></div>
        ) : (
          ""
        )}

        <div className="card-media flex flex-col items-center h-50 justify-around border-t border-card-bg-navy-light dark:border-card-bg-navy hover:border-none ">
          {/* Platform - username */}
          <div className="icon-user flex items-center gap-2 leading-15">
            <img className="card-icon w-5" src={icon} alt="card-icon" />
            <div className="card-username text-[.8rem] text-text-gray-650 dark:text-gray-400 font-bold">
              {username}
            </div>
          </div>
          {/* Followers */}
          <div className="flex flex-col items-center leading-10 ">
            <div className="div-followers text-[3.3rem] font-extrabold">
              {formatFollowers(followers)}
            </div>
            {platform === "YouTube" ? (
              <label className="text-[.8rem] tracking-[.3rem] text-text-gray-650 dark:text-gray-400 ">
                SUSBCRIBERS
              </label>
            ) : (
              <label className="text-[.8rem] tracking-[.3rem] text-text-gray-650 dark:text-gray-400 ">
                FOLLOWERS
              </label>
            )}
          </div>
          {/* Metric */}
          <div className="change-today inline-flex items-center gap-1">
            <img
              src={change > 0 ? upArrow : downArrow}
              alt="change-arrow"
              className="arrow w-2 h-1"
            />
            {change > 0 ? (
              <div className="div-change text-[.8rem] font-bold text-green-500 ">
                {change} Today
              </div>
            ) : (
              <div className="div-change text-[.8rem] font-bold text-red-700 ">
                {change}% Today
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
export default CardSocialMedia;
