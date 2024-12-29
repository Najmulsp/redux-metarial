
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './app/store.jsx'
import CounterView from './feature/counter/CounterView.jsx'
import MyBooks from '../src/components/MyBooks.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/my-books" element={<MyBooks />} />
      <Route path="/counter-view" element={<CounterView />} />
    </Routes>
  </BrowserRouter>
  </Provider>,
)
