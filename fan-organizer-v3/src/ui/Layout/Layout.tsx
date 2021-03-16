import React from "react";
import {headerHeight} from '../../constansts';
import {Header} from './Header';
import {Navigation} from './Nav';
import {Main} from './Main';
import {footerHeight} from '../../constansts';
import {Footer} from './Footer';
//import s from './Layout.module.css';
import './Layout.module.css';

interface Props {
  props:any, 
  context: any, 
  darkMode:string, 
  darkModeDefault:boolean;
  setDarkMode: any;
}

export const Layout: React.FunctionComponent<Props> 
  = 
  ({darkMode, setDarkMode}) => {
  return (
    <>
      <header className="page__header header">
        <Header headerHeight={headerHeight} darkMode={darkMode} setDarkMode={setDarkMode}/>
      </header>
      <nav className="page__nav nav">
        <Navigation darkMode={darkMode}/>
      </nav>
      <main
        className="page__content main">
          <Main darkMode={darkMode}/>
      </main>
      <footer className="page__footer footer">
        <Footer footerHeight={footerHeight} darkMode={darkMode}/>
      </footer>
    </>
  )
}