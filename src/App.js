import React, { useState } from 'react';
import './App.css';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setColorListVisibility] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleButtonClick = () => {
    setColorListVisibility(!isColorListVisible);
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setColorListVisibility(false);
  };

  return (
    <div className="color-picker">
      <button
        onClick={handleButtonClick}
        style={{ backgroundColor: selectedColor || 'initial' }}
      >
        Pick a color
      </button>
      {isColorListVisible && (
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && <p>Selected Color: {selectedColor}</p>}
    </div>
  );
};

function App() {
  const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange'];

  return (
    <div className="App">
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;
