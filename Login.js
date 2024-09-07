// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'; // Import the CSS file

// const Login = ({ setIsAuthenticated }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     const storedUsername = localStorage.getItem('registeredUsername');
//     const storedPassword = localStorage.getItem('registeredPassword');

//     if (!username || !password) {
//       setError('Both fields are required.');
//       return;
//     }

//     if (username === storedUsername && password === storedPassword) {
//       localStorage.setItem('isAuthenticated', 'true');
//       setIsAuthenticated(true);
//       navigate('/');
//     } else {
//       setError('Invalid username or password.');
//     }
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//       {error && <p className="error">{error}</p>}
//       <p>Don't have an account? <a href="/register">Register</a></p>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

const Login = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsername = localStorage.getItem('registeredUsername');
    const storedPassword = localStorage.getItem('registeredPassword');

    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    if (username === storedUsername && password === storedPassword) {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      navigate('/');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p className="error">{error}</p>}
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  );
};

export default Login;
