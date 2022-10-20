import { useState } from 'react';
import { Navbar, Footer, Services, Transactions, Welcome, Blockchain, News, Exchange, Market } from './components';
import { createBrowserRouter, RouterProvider, Route, } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element:
        <div className="min-h-screen">
          <div className='gradient-bg-welcome'>
            <Navbar />
            <Welcome />
          </div>
          <Services />
          <Transactions />
          <Footer />
        </div>
    },
    {
      path: '/blockchain',
      element:
        <div className="min-h-screen">
          <div className='gradient-bg-welcome'>
            <Navbar />
            <Blockchain />
          </div>
          <Footer />
        </div>
    },
    {
      path: '/exchange',
      element:
        <div className="min-h-screen">
          <div className='gradient-bg-welcome'>
            <Navbar />
            <Exchange />
          </div>
          <Footer />
        </div>
    },
    {
      path: 'market',
      element:
        <div className="min-h-screen">
          <div className='gradient-bg-welcome'>
            <Navbar />
            <Market />
          </div>
          <Footer />
        </div>
    },
    {
      path: '/news',
      element:
        <div className="min-h-screen">
          <div className='gradient-bg-welcome'>
            <Navbar />
            <News />
          </div>
          <Footer />
        </div>
    },
  ])
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
