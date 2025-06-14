import './App.css';
import ChatEntry from './components/ChatEntry';
import messages from './data/messages.json';

const App = () => {
  const chatMessages = messages[0];
  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatEntry
          sender={chatMessages.sender}
          body={chatMessages.body}
          timeStamp={chatMessages.timeStamp}
        />
      </main>
    </div>
  );
};

export default App;
