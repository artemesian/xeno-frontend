import { useState } from "react";
import "./app.css";
import BlurEffect from "./assets/blur effect.png";
import IntroPage from "./pages/intro";
import ChatPage from "./pages/chat";

const App = () => {
  const [appState, setAppState] = useState({
    route: "intro",
  });

  const onRouteChange = (route) => {
    setAppState({ route: route });
  };

  return (
    <div className="app">
      <div className="effects">
        <img
          src={BlurEffect}
          alt="blur effects"
          style={{
            top: 0,
            left: 0,
            rotate: "180deg",
          }}
        />
        <img src={BlurEffect} alt="blur effects" />
      </div>
      {appState.route === "chat" ? (
        <ChatPage />
      ) : (
        <IntroPage onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;
