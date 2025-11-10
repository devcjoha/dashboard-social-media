import upArrow from "../../assets/icon-up.svg";
import downArrow from "../../assets/icon-down.svg";
function CardOverviews({ icon, metric, value, change }) {
  const formatValue = (num) => {
    return num >= 1000 ? (num / 1000).toFixed() + "K" : num;
  };
  return (
    <>
      <section
        className="card-overview @container flex flex-col  justify-between w-90 lg:w-65 h-30 p-5 rounded-md
       dark:bg-card-bg-navy bg-card-bg-navy-light hover:bg-hover-bg-card dark:hover:bg-gray-700 cursor-pointer "
      >
        {/* Line-1 */}
        <div className="flex items-center justify-between mr-2 ">
          <div className="metric text-text-gray-650  dark:text-gray-400 font-bold text-size-14">{metric}</div>
          <img src={icon} className="icon-overview w-5 h-5" alt="icon" />
        </div>
        {/* Line-2 */}
        <div className="flex flex-row items-end justify-between">
          <div className="value flex font-bold text-size-32 leading-tight self-end">{formatValue(value)}</div>

          <div className="change-today inline-flex items-center gap-1">
            <img
              src={change > 0 ? upArrow : downArrow}
              alt="change-arrow"
              className="arrow w-2 h-1"
            />
            {change > 0 ? (
              <div className="div-change text-[.8rem] font-bold text-green-500 ">
                {change}%
              </div>
            ) : (
              <div className="div-change text-[.8rem] font-bold text-red-700 ">
                {change}%
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
export default CardOverviews;
