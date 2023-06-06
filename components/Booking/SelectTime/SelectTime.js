const SelectTime = ({ onSelect }) => {
    const times = [30, 60, 90, 120]; // Example array of available times
  
    const handleTimeSelect = (time) => {
      onSelect(time);
    };
  
    return (
      <div>
        <h2>Select a Time</h2>
        <ul>
          {times.map((time, index) => (
            <li key={index}>
              <p>{time} minutes</p>
              <button onClick={() => handleTimeSelect(time)}>Select</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default SelectTime;
  