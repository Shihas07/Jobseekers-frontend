import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import {persistor,store} from './redux/store.js';
import { PersistGate } from 'redux-persist/integration/react'

const theme = createTheme({
  palette: {
    primary: {
      main: '#309689', // Custom green color
    },
    text: {
      primary: '#000000', // Black text color
      secondary: '#000000', // Black text color for secondary text
    },
  },
  typography: {
    // Ensure all typography uses the primary text color
    allVariants: {
      color: '#000000', // Black text color for all typography variants
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
   <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    </PersistGate>
    </Provider>
  </StrictMode>,
)
