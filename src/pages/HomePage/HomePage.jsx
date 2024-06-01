import css from "./HomePage.module.css";

export default function HomePage ()  {
  return (
    <div className={css.wrapper}>
   
      <div className={css.container}>
      <h1 className={css.home_title}>
      Always stay in touch!
      </h1>
      <img
      className={css.image}
      src="/depositphotos_38572411-stock-photo-black-retro-phone.jpg"
      />
    </div>
    </div>
  );
};

