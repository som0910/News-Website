import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<News apiKey="c546165c333a44f3bd2c3460a37de85b" key="all" pageSize={9} country="us" category="general" what=""/>} />
            <Route path='/business' element={<News apiKey="c546165c333a44f3bd2c3460a37de85b" key="business" pageSize={9} country="us" category="business" what=" - Business"/>} />
            <Route path='/entertainment' element={<News apiKey="c546165c333a44f3bd2c3460a37de85b" key="entertainment" pageSize={9} country="us" category="entertainment" what=" - Entertainment"/>} />
            <Route path='/general' element={<News apiKey="c546165c333a44f3bd2c3460a37de85b" key="general" pageSize={9} country="us" category="general" what=" - General"/>} />
            <Route path='/sports' element={<News apiKey="c546165c333a44f3bd2c3460a37de85b" key="sports" pageSize={9} country="us" category="sports" what=" - Sports"/>} />
            <Route path='/science' element={<News apiKey="c546165c333a44f3bd2c3460a37de85b" key="science" pageSize={9} country="us" category="science" what=" - Science"/>} />
            <Route path='/health' element={<News apiKey="c546165c333a44f3bd2c3460a37de85b" key="health" pageSize={9} country="us" category="health" what=" - Health"/>} />
            <Route path='/technology' element={<News apiKey="c546165c333a44f3bd2c3460a37de85b" key="technology" pageSize={9} country="us" category="technology" what=" - Technology"/>} />
          </Routes>
        </BrowserRouter>

        {/* <News pageSize={9} country="us" category="entertainment" /> */}

      </>
    )
}

export default App