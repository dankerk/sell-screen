import './App.scss';
import HeaderComponent from './components/Header/Header.component';
import { Route, Routes } from 'react-router-dom';
import Summary from './routes/summary';
import Products from './routes/products';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderComponent></HeaderComponent>
        <div className="container">
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="summary" element={<Summary />} />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default App;
