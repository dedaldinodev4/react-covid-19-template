import React from 'react';
import { ThemeProvider } from 'styled-components';
import light from './components/infra/light';
import GlobalStyle from './components/styles/global';
import Routes from './routes';
import JsonData from './data/data.json';
import { DataContext } from './context/dataContext';



const App = () => {
  
    return (
      <ThemeProvider theme = {light}>
        <React.Fragment>
          <GlobalStyle />
          <DataContext.Provider value={JsonData}>
            <Routes />
          </DataContext.Provider>
        </React.Fragment>
      </ThemeProvider>
     );
  
  }

export default App;
