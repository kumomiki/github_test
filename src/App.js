import { Button } from './components/basic_component/button';
import style from 'src/App.module.scss'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          GtiHub Test
        </p>
        <Button title='推文' className={style.buttonOrange}/>
        <Button title='推文' className={style.buttonWhite}/>
      </header>
    </div>
  );
}

export default App;
