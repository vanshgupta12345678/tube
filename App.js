// // import React,{useState}from 'react'
// // import Navbar from "./Components/Navbar/Navbar";
// // import{Routes,Route} from "react-router-dom"
// // import Home from "./Pages/Home/Home";
// // import Video from "./Pages/Home/Video/Video";
// // import Vansh from "../src/Vansh"
// // const App = () => {
// //   const[sidebar,setSidebar]=useState(true)
// //   return (
// //     <div>
      
// //       <Navbar setSidebar={setSidebar}/>
// //       <Routes>
// //         {/* <Route path="/" element={<Vansh/>}></Route> */}
// //         <Route path="/" element={<Home sidebar={sidebar}/> }></Route>
// //         <Route path="/video/20/4521" element={<Video/>}></Route>
// //         <Route path="/video/:categoryId/:videoId" element={<Video />} >
// //         </Route>
// //         </Routes>
// //     </div>
// //   )
// // }

// // export default App
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Home/Video/Video';
import Login from '../src/Login';
import Register from '../src/Register';

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication state from localStorage or API
  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <div>
      {/* Render Navbar only if authenticated */}
      {isAuthenticated && <Navbar setSidebar={setSidebar} />}
      
      <Routes>
        {/* Routes for non-authenticated users */}
        {!isAuthenticated ? (
          <>
            <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            {/* Routes for authenticated users */}
            <Route path="/" element={<Home sidebar={sidebar} />} />
            <Route path="/video/:categoryId/:videoId" element={<Video />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        )}
      </Routes>
    </div>
  );
};

export default App;
// import React, { useState } from 'react';
// import { Routes, Route, Navigate } from 'react-router-dom';
// import Navbar from './Components/Navbar/Navbar';
// import Home from './Pages/Home/Home';
// import Video from './Pages/Home/Video/Video';
// import Login from './Login1';

// const App = () => {
//   const [sidebar, setSidebar] = useState(true);
//   const [isAuthenticated, setIsAuthenticated] = useState(false); // Add a state to manage authentication status

//   return (
//     <div>
//       <Navbar setSidebar={setSidebar} />
//       <Routes>
//         {/* Define the Login route */}
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        
//         {/* Protected routes */}
//         <Route
//           path="/"
//           element={isAuthenticated ? <Home sidebar={sidebar} /> : <Navigate to="/login" />}
//         />
//         <Route
//           path="/video/:categoryId/:videoId"
//           element={isAuthenticated ? <Video /> : <Navigate to="/login" />}
//         />
        
//         {/* Redirect all other routes to the home page */}
//         <Route path="*" element={<Navigate to="/" />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;
