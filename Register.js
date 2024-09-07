// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleRegister = () => {
//     if (!username || !password) {
//       setError('Both fields are required.');
//       return;
//     }

//     // Store registration data in localStorage (for simplicity; use a backend in production)
//     localStorage.setItem('registeredUsername', username);
//     localStorage.setItem('registeredPassword', password);

//     // Navigate to login page after successful registration
//     navigate('/login');
//   };

//   return (
//     <div className="register">
//       <h2>Register</h2>
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
//       <button onClick={handleRegister}>Register</button>
//       {error && <p className="error">{error}</p>}
//       <p>Already have an account? <a href="/login">Login</a></p>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    // Store registration data in localStorage (for simplicity; use a backend in production)
    localStorage.setItem('registeredUsername', username);
    localStorage.setItem('registeredPassword', password);

    // Navigate to login page after successful registration
    navigate('/login');
  };

  return (
    <div className="register">
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
      {error && <p className="error">{error}</p>}
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
};

export default Register;
