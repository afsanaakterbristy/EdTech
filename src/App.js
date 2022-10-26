import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Routes/Routes';

function App() {
  useEffect(() => {
      let htmlClasses = document.querySelector("html").classList;
      if (localStorage.theme === "dark") {
      htmlClasses.add("dark");
    }
  },[])

  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
