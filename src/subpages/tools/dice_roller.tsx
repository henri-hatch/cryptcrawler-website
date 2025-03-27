import React, { useState, useEffect } from 'react';
import './dice_roller.css';

interface Die {
  id: string;
  type: number; // 4, 6, 8, 10, 12, 20, or 100
  value: number;
  rolling: boolean;
  hasRolled: boolean; // New property to track if die has been rolled yet
}

const DiceRoller: React.FC = () => {
  const [dice, setDice] = useState<Die[]>([]);
  
  // Change content container class for better layout
  useEffect(() => {
    const contentDiv = document.querySelector('.content');
    if (contentDiv) {
      contentDiv.className = 'content-wide';
    }
    
    return () => {
      if (contentDiv) {
        contentDiv.className = 'content';
      }
    };
  }, []);

  // Function to add a die to the pool
  const addDie = (type: number) => {
    const newDie: Die = {
      id: `die-${Date.now()}-${Math.random()}`,
      type,
      value: 1,
      rolling: false,
      hasRolled: false // Initialize as not rolled yet
    };
    
    setDice(prevDice => {
      const updatedDice = [...prevDice, newDie];
      
      // Roll the new die after adding it
      setTimeout(() => {
        rollSingleDie(newDie.id);
      }, 10);
      
      return updatedDice;
    });
  };

  // Function to remove a die from the pool
  const removeDie = (id: string) => {
    setDice(dice.filter(die => die.id !== id));
  };

  // Updated rollAllDice function
  const rollAllDice = () => {
    setDice(dice.map(die => ({
      ...die,
      rolling: true
    })));
    
    setTimeout(() => {
      setDice(dice.map(die => ({
        ...die,
        value: Math.floor(Math.random() * die.type) + 1,
        rolling: false,
        hasRolled: true // Mark as rolled
      })));
    }, 600); // Reduced from 1000ms to 600ms
  };

  // Updated rollSingleDie function
  const rollSingleDie = (id: string) => {
    setDice(prevDice => prevDice.map(die => 
      die.id === id 
        ? { ...die, rolling: true } 
        : die
    ));
    
    setTimeout(() => {
      setDice(prevDice => prevDice.map(die => 
        die.id === id 
          ? { 
              ...die, 
              value: Math.floor(Math.random() * die.type) + 1, 
              rolling: false,
              hasRolled: true // Mark as rolled
            } 
          : die
      ));
    }, 600);
  };

  // Updated getTotal function to only count dice that have been rolled
  const getTotal = () => {
    return dice
      .filter(die => die.hasRolled) // Only count dice that have been rolled
      .reduce((sum, die) => sum + die.value, 0);
  };

  // Function to determine the color of the die value based on roll
  const getDieValueColor = (value: number, type: number) => {
    if (value === 1) {
      return '#FF3333'; // Bright red for 1s
    } else if (value === type) {
      return '#33FF33'; // Bright green for max rolls
    }
    return 'white'; // Default color for other rolls
  };

  return (
    <div className="dice-roller">
      <h2>Dice Roller</h2>
      
      {/* Dice selection buttons */}
      <div className="dice-buttons">
        {[4, 6, 8, 10, 12, 20, 100].map(type => (
          <button 
            key={`d${type}`} 
            className={`dice-button d${type}`}
            onClick={() => addDie(type)}
          >
            d{type}
          </button>
        ))}
      </div>
      
      {/* Roll all button */}
      {dice.length > 0 && (
        <div className="roll-section">
          <button 
            className="roll-button"
            onClick={rollAllDice}
          >
            Roll All Dice
          </button>
          
          {/* Total display */}
          <div className="total-display">
            Total: {getTotal()}
          </div>
        </div>
      )}
      
      {/* Updated dice display area */}
      <div className="dice-area">
        {dice.map(die => (
          <div 
            key={die.id} 
            className={`die d${die.type} ${die.rolling ? 'rolling' : ''}`}
            onClick={() => removeDie(die.id)}
            title="Click to remove"
          >
            {die.hasRolled ? (
              <span 
                className="die-value"
                style={{ color: getDieValueColor(die.value, die.type) }}
              >
                {die.value}
              </span>
            ) : (
              <span className="die-value-placeholder"></span>
            )}
            <span className="die-type">d{die.type}</span>
          </div>
        ))}
      </div>
      
      {/* Instructions */}
      {dice.length === 0 && (
        <p className="instructions">Click a die button above to add dice to roll.</p>
      )}
    </div>
  );
};

export default DiceRoller;