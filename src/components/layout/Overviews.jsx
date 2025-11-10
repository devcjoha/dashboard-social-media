import CardOverviews from "../common/CardsOverviews";

function Overviews({ overview }) {
  return (
    <>
      <section className="overviews-container lg:gap-7 gap-4 ">
        <div className="title-overview flex items-end w-full h-20 text-2xl font-bold">
        <h1 className="text-gray-500 dark:text-white">Overview - Today</h1>
        </div>
        {overview.map((item, index) => {
          return (
            <CardOverviews
              key={index}
              platform={item.platform}
              metric={item.metric}
              value={item.value}
              change={item.change}
              icon={item.icon}
            />
          );
        })}
      </section>
    </>
  );
}
export default Overviews;
