import React, { useState } from "react";
import { observer } from "mobx-react-lite";

const Home = ({ store }) => {
  const [litem, setlitem] = useState("");
  function changeDets() {
    store.addRadio(litem);
  }
  return (
    <>
      <div>
        <p>Mobx</p>
        <p>{store.userInfo.name}</p>
        <input
          type="radio"
          value="RR1"
          onChange={(e) => {
            setlitem(e.target.value);
          }}
          name="demo1"
          id="r1"
          defaultChecked
        />
        <label htmlFor="r1">R1</label>
        <input
          type="radio"
          value="RR2"
          onChange={(e) => {
            setlitem(e.target.value);
          }}
          name="demo1"
          id="r2"
        />
        <label htmlFor="r2">R2</label>
        <input
          type="radio"
          value="RR3"
          onChange={(e) => {
            setlitem(e.target.value);
          }}
          name="demo1"
          id="r3"
        />
        <label htmlFor="r3">R3</label>
        <br />
        <button onClick={changeDets}>Add LI</button>
      </div>
    </>
  );
};

export default observer(Home);
