import style from 'src/components/basic_component/input.module.scss'

export const Input = ({title}) => {
  return (
    <div className={style.inputContainer}>
      <div className={style.inputTitle}>標題</div>
      <input type="text" placeholder="請輸入帳號" />
    </div>
  );
}