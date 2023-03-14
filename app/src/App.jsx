import React, { useState } from "react";
import Top from './page/top';
import AddModalodal from './page/addModal';

function App() {
  const [show, setShow] = useState(false)

  return (
    <>
      <div className="index-btns">
        <button onClick={() => setShow(true)}>新規作成</button>
        <button className="modal-close" onClick={() => setShow(false)}>×</button>
        <a href="#">過去のメモ</a>
      </div>
      <Modal show={show}/>
    </>
  );
}

function Modal(show) {
  console.log(show.show)
  if(show.show) {
    return (
      <AddModalodal />
    )
  } else {
    return null;
  }
}

export default App;
