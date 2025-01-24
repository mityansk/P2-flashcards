import { useEffect, useState } from 'react';
import User from '../entities/User';
function RegistrationPage({ loginProps }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('интересный ник', { username, password });

  }, [username, password]);

  const userPass = { username, password };
  const registrate = async()=>{
    await User.createUser(userPass);
    console.log('интересный ник', { username, password });

  }

  return (
    <div className="container">
      <h2>Регистрация</h2>
      <form onSubmit={registrate}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Логин
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(event) => setUserName(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Пароль
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Войти
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;
