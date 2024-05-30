import css from "./HomePage.module.css";

export default function HomePage ()  {
  return (
    <div className={css.wrapper}>
      <h1 className={css.home_title}>
      Always stay in touch!
      </h1>
      <img
      className={css.image}
      src="/public/depositphotos_38572411-stock-photo-black-retro-phone.jpg"
      />
    </div>
  );
};

