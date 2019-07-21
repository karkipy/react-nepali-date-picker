import React, { useState } from 'react';
import Calendar from 'react-nepali-date-picker';

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div style={{ margin: '100px', width: '600px' }}>
      <Calendar value={date} onSelect={setDate} />
    </div>
  );
}

export default App;
