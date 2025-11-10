import CardSocialMedia from "../common/CardSocialMedia";

function SocialMedia({ social }) {


  return (
    <>
      <section className="social-media-container gap-7">
          {social.map((item, index) => {
            return (
              <CardSocialMedia
                key={index}
                platform={item.platform}
                username={item.username}
                followers={item.followers}
                change={item.change}
                icon={item.icon}
                color={item.color}
              />
            );
          })}
    
      </section>
    </>
  );
}

export default SocialMedia;
