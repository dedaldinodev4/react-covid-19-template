import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './components/infra/light';
import GlobalStyle from './components/styles/global';
import Home from './pages/Home'

  const App = () => {
 
    return (
      <ThemeProvider theme = {light} >
        <div>
          <GlobalStyle />
          <Home />
          {/* <h1>Hello Covid-19</h1> */}
        </div>
      </ThemeProvider>
     );
  
  }

export default App;
