import { useEffect, useState } from 'react';
import User from '../entities/User';
function RegistrationPage() {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    console.log('интересный ник', { username, password });
  }, [username, password]);

  const registrate = async (event) => {
    event.preventDefault();
    if (username && password) {
      try {
        await User.createUser({ username, password }); 
        console.log('Данные зарегистрированы:', { username, password });
      } catch (error) {
        console.error('Ошибка регистрации:', error);
      }
    } else {
      console.error('Заполни все!');
    }
  };

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
          Регистрация
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;
