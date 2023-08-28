import s from './Loader.module.css';
const Loader = () => {
  return (
    <div
      aria-label="Orange and tan hamster running in a metal wheel"
      role="img"
      className={s['wheel-and-hamster']}
    >
      <div className={s['wheel']}></div>
      <div className={s['hamster']}>
        <div className={s['hamster__body']}>
          <div className={s['hamster__head']}>
            <div className={s['hamster__ear']}></div>
            <div className={s['hamster__eye']}></div>
            <div className={s['hamster__nose']}></div>
          </div>
          <div
            className={`${s['hamster__limb']} ${s['hamster__limb--fr']}`}
          ></div>
          <div
            className={`${s['hamster__limb']} ${s['hamster__limb--fr']}`}
          ></div>
          <div
            className={`${s['hamster__limb']} ${s['hamster__limb--fr']}`}
          ></div>
          <div
            className={`${s['hamster__limb']} ${s['hamster__limb--fr']}`}
          ></div>
          <div className={s['hamster__tail']}></div>
        </div>
      </div>
      <div className={s['spoke']}></div>
    </div>
  );
};

export default Loader;
