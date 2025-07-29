import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinChat = () => {
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');
  const navigate = useNavigate();

  const joinRoom = () => {
    if (username !== '' && room !== '') {
      navigate(`/chat?username=${username}&room=${room}`);
    }
  };

  return (
    <div className="join-chat-container">
      <h3>Join A Chat</h3>
      <input
        type="text"
        placeholder="John..."
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room ID..."
        onChange={(e) => setRoom(e.target.value)}
      />
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
};

export default JoinChat;