import logo from './logo.svg';
import './App.css';
import UserView from './features/user/UserView';
import CakeView from './features/cake/CakeView';
import IcecreamView from './features/icecream/IcecreamView';

function App() {
  return (
    <div className="App">
      <CakeView></CakeView>
      <IcecreamView></IcecreamView>
      <UserView></UserView>
    </div>
  );
}

export default App;
