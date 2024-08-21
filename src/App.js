import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="from-login">
        <h2>
          Log in
        </h2>
        <form action='' className="form-in">
          <ul className="">
            <li className="">Email: <input type='email' placeholder='Email' className='email-in' required=""/></li>
            <li className="">Password: <input type='password' placeholder='Password' required=""/></li>
          </ul>
        </form>
        <div className="btn-submit">
          <input type="submit" className="btn" placeholder='Log in' />
        </div>
      </div>
    </div>
  );
}

export default App;
