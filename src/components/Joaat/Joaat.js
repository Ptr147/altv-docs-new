import React, { useState } from 'react';
import './Joaat.css';

function JOAATCalculator() {
  const [input, setInput] = useState('');
  const [uint32Result, setUint32Result] = useState(0);
  const [int32Result, setInt32Result] = useState(0);
  const [hexResult, setHexResult] = useState('');
  const [showKarby, setShowKarby] = useState(false);

  const calculateJOAAT = (str) => {
    let hash = 0;

    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash += char;
      hash += (hash << 10);
      hash ^= (hash >>> 6);
    }

    hash += (hash << 3);
    hash ^= (hash >>> 11);
    hash += (hash << 15);

    setUint32Result(hash >>> 0);
    setInt32Result(hash | 0);
    setHexResult((hash >>> 0).toString(16).toUpperCase());

    if (str.toLowerCase() === 'karby') {
      setShowKarby(true);
    } else {
      setShowKarby(false);
    }
  };

  const handleInputChange = (e) => {
    const str = e.target.value.trim();
    setInput(str);
    calculateJOAAT(str);
  };

  return (
    <div class="joaat">
      <div class="calculator">
        <input id="input" type="text" value={input} onChange={handleInputChange} placeholder='Name' />
        <div class="results">
          <div class="item">
            <span>uint32</span>
            {input ? uint32Result : "-"}
          </div>
          <div class="item">
            <span>int32</span>
            {input ? int32Result : "-"}
          </div>
          <div class="item">
            <span>hex</span>
            {input ? "0x" + hexResult : "-"}
          </div>
        </div>
      </div>
      {showKarby && (
        <div class="karby">
          <p>Karby. Karby. Karby. Karby. Karby. Karby. Karby. Karby. Karby.</p>
          <img src={require('@site/static/img/karby.png').default}></img>
          <p>Join our <a href="https://discord.altv.mp" target='blank'>Discord Server</a> for daily Karbys!</p>
        </div>
      )}
    </div>
  );
}

export default JOAATCalculator;
