import React, { useState } from "react";

const Top = (props) => {
  const [showModal, setShowModal] = useState();

  return (
    <div className="index-btns">
      <button onClick={() => setShowModal(true)}>新規作成</button>
      <a href="#">過去のメモ</a>
    </div>
  );
}

export default Top;
