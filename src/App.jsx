import Player from "./components/Player.jsx";
import TimerChallenger from "./components/TimerChallenger.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenger title="Easy" targetTime={1} />
        <TimerChallenger title="Not Easy" targetTime={5} />
        <TimerChallenger title="Getting Tough" targetTime={10} />
        <TimerChallenger title="Pros Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
