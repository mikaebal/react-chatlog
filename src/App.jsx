// Wave 1: Import ChatEntry to show one message
// import ChatEntry from './components/ChatEntry';
import './App.css';
import messages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  // Wave 1: Use first message data to render one ChatEntry
  // const chatMessages = messages[0];

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        {/* Wave 1: Rendered one ChatEntry
        <ChatEntry
          sender={chatMessages.sender}
          body={chatMessages.body}
          timeStamp={chatMessages.timeStamp}
        /> */}
        {/* Wave 2: Render all messages using ChatLog */}
        <ChatLog entries={messages} />
      </main>
    </div>
  );
};

export default App;
