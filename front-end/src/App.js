import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JoinChat from './components/JoinChat';
import Chat from './components/Chat';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JoinChat />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
