import s from './ButtonLoader.module.css';
const ButtonLoader = () => {
  return (
    <div className={s['wrapper']}>
      <div className={s['circle']}></div>
      <div className={s['circle']}></div>
      <div className={s['circle']}></div>
      <div className={s['shadow']}></div>
      <div className={s['shadow']}></div>
      <div className={s['shadow']}></div>
    </div>
  );
};

export default ButtonLoader;
