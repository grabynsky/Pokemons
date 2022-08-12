import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {createStore, compose, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/rootReducer';
import reduxThunk from 'redux-thunk';
import {BrowserRouter} from 'react-router-dom';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
      })
    : compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk)));
const app =   <BrowserRouter>
                <Provider store={store}>
                  <React.StrictMode>
                    <App />
                  </React.StrictMode>
                </Provider>
              </BrowserRouter>  


 const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);

