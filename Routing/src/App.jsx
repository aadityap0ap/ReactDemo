import React from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//       <Link to={'/'}>Home</Link>
//       |
//       <Link to={'/neet/OnlineCoaching-Class11'}>Class11</Link>
//       |
//       <Link to={'/neet/OnlineCoaching-Class12'}>Class12</Link>
//         <Routes>
//           <Route 
//             path='/neet/onlineCoaching-Class11' 
//             element={<Class11Program/>} 
//           />
//           <Route
//             path='/neet/onlineCoaching-Class12'
//             element={<Class12Program/>}
//           />
//           <Route 
//             path='/'
//             element={<LandingPage/>}
//           />
//           //when non of these routes are exposed..then this endpoint will be called
//           <Route
//           path='*'
//           element={<ErrorPage/>} 
//           />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route 
            path='/neet/onlineCoaching-Class11' 
            element={<Class11Program/>} 
          />
          <Route
            path='/neet/onlineCoaching-Class12'
            element={<Class12Program/>}
          />
          <Route 
            path='/'
            element={<LandingPage/>}
          />
          //when non of these routes are exposed..then this endpoint will be called
          <Route
          path='*'
          element={<ErrorPage/>} 
          />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Layout(){
  return <div>
    <Link to={'/'}>Home</Link>
      |
      <Link to={'/neet/OnlineCoaching-Class11'}>Class11</Link>
      |
      <Link to={'/neet/OnlineCoaching-Class12'}>Class12</Link>
    <Outlet/>
    footer
  </div>
}

function Class11Program(){
  return <div>
    Welcome to Class 11 Program
  </div>
}

// function Class12Program(){
//   const navigate = useNavigate();
//   function redirectUser(){
//     navigate('/');
//   }
//   return <div>
//     Welcome to class 12 program
//     <button onClick={redirectUser}>Click</button>
//   </div>
// }
//the above one is used in order to learn useNavigate
function Class12Program(){
  return <div>
    Welcome to Class 12 Program
    <Link to={'/'}><button>Go to Home</button></Link>
  </div>
}

function LandingPage(){
  return <div>
    Welcome to UnAcademy
  </div>
}

function ErrorPage(){
  return <div>
    Sorry ! Page Not Found
  </div>
}

export default App;