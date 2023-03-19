import { Button } from './components/basic_component/button';
import style from 'src/App.module.scss'
import { Input } from './components/basic_component/input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className={style.appContainer}>
        <p>
          GtiHub Test
        </p>
        <Button title='推文' className={style.buttonOrange}/>
        <Button title='推文' className={style.buttonWhite}/>
        <Input title='標題' />
        <Input title='帳號' />
        </div>
      </header>
    </div>
  );
}

export default App;
