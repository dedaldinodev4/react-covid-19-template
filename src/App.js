import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './components/infra/light';
import GlobalStyle from './components/styles/global';
import Routes from './routes';

  const App = () => {
 
    return (
      <ThemeProvider theme = {light} >
        <React.Fragment>
          <GlobalStyle />
          <Routes />
        </React.Fragment>
      </ThemeProvider>
     );
  
  }

export default App;
