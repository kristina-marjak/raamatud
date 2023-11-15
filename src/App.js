import { useState } from 'react';
import { RAAMATUD } from './data';
import { Raamat } from './Raamat';

import './App.css';

function App() {
  const [valitudRaamatuId, setValitudRaamatuId] = useState(null);

  const muudaValitudRaamatuId = (id) => {
    setValitudRaamatuId(id);
    //console.log(id);
  }

  return (
    <div className="App">
      <div className="row App-header">
        <div className="column-left" style={{ display: 'flex', flexDirection: 'column', gap: 60, align: 'left' }}>
          {RAAMATUD.map((raamat) => (
            <a key={raamat.pealkiri} onClick={() => muudaValitudRaamatuId(raamat.id)}>
              {raamat.pealkiri}
            </a>
          ))}
        </div>
        <div className="column-right" >
          {valitudRaamatuId !== null &&
            <>
              <div>{RAAMATUD[valitudRaamatuId].pealkiri}</div>
              <div className="description">{RAAMATUD[valitudRaamatuId].autor}, {RAAMATUD[valitudRaamatuId].aasta}</div>
              <div><img style={{ width: 250 }} alt="" src={RAAMATUD[valitudRaamatuId].pilt}></img></div>
              <div className="description">{RAAMATUD[valitudRaamatuId].kirjeldus}</div>
            </>
          }
        </div>
      </div>
    </div >
  );
}
export default App;
