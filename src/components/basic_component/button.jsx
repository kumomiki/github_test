import style from 'src/components/basic_component/button.module.scss'
export const Button = ({ title }) => {
  return <button className={style.buttonOrange}> {title} </button>;
};
