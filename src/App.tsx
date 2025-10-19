import Slide from './components/Slide';
import AudioPlayer from './components/AudioPlayer';
import ScrollIndicator from './components/ScrollIndicator';
import { slidesData } from './slidesData';
import './App.css';

function App() {
  return (
    <div className="app">
      <AudioPlayer />
      <ScrollIndicator />
      <div className="version-tag">v2</div>

      <div className="sections-container">
        {slidesData.map((slide) => (
          <Slide
            key={slide.id}
            slide={slide}
            isActive={true}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
