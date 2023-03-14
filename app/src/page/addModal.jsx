import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import AddNewPageC from '../component/addNewPage';
import AddNewDataC from '../component/addNewData';
import AddNewQuestionC from '../component/addNewQuestion';
import AddNewShortageC from '../component/addNewShortage';

class addModal extends Component {
  addNewBlock(area) {
    const root = createRoot(document.getElementsByClassName(area)[0]);
    // const item = '<div className="item__wrap overview"><div className="item__ttl"><input type="text" /></div><div className="item__item"><textarea name="" id="" cols="10" rows="5"></textarea></div></div>';
    root.render(<AddNewPageC />);
  }

  addNewDataBlock(area) {
    const root = createRoot(document.getElementsByClassName(area)[0]);
    root.render(<AddNewDataC />);
  }

  addNewQuestionBlock(area) {
    const root = createRoot(document.getElementsByClassName(area)[0]);
    root.render(<AddNewQuestionC />);
  }

  addNewShortageBlock(area) {
    const root = createRoot(document.getElementsByClassName(area)[0]);
    root.render(<AddNewShortageC />);
  }

  saveData() {
    alert('保存する処理')
  }

  render(show) {
    return (
      <div className="modal">
        <div className="modal__inner">
          <p className="ttl">メモ</p>
          <p className="time">{new Date().toLocaleString()}</p>

          <div className="item__wrap overview">
            <div className="item__ttl">案件名</div>
            <div className="item__item">
              <input type="text" />
            </div>
          </div>

          <div className="item__wrap overview">
            <div className="item__ttl">クライアント</div>
            <div className="item__item">
              <input type="text" />
            </div>
          </div>

          <div className="item__wrap overview">
            <div className="item__ttl">案件概要</div>
            <div className="item__item">
              <textarea name="" id="" cols="10" rows="5"></textarea>
            </div>
          </div>

          <div className="item__wrap overview">
            <div className="item__ttl">backlog</div>
            <div className="item__item">
              <input type="text" />
            </div>
          </div>

          <hr />

          <p className="cat__ttl">各ページについて</p>

          <div className="item__wrap overview">
            <div className="item__ttl">
              <input type="text" />
            </div>
            <div className="item__item">
              <textarea name="" id="" cols="10" rows="5"></textarea>
            </div>
          </div>
          
          <div className='item__add-page'></div>

          <button type="button" onClick={() => this.addNewBlock('item__add-page')}>項目を増やす</button>

          <p className="cat__ttl">ページアニメーションについて</p>

          <div className="item__wrap overview">
            <div className="item__ttl">
              <input type="text" />
            </div>
            <div className="item__item">
              <textarea name="" id="" cols="10" rows="5"></textarea>
            </div>
          </div>

          <div className='item__add-animation'></div>

          <button type="button" onClick={() => this.addNewBlock('item__add-animation')}>項目を増やす</button>

          <hr />

          <p className="cat__ttl">テストアップ日</p>

          <div className="item__wrap data">
            <div className="item__ttl">
              <input type="text" />
            </div>
            <div className="item__item">
              <input type="date" />
            </div>
          </div>

          <div className='item__add-data'></div>

          <button type="button" onClick={() => this.addNewDataBlock('item__add-data')}>項目を増やす</button>

          <hr />

          <p className="cat__ttl">質問事項</p>

          <div className="item__wrap question">
            <div className="item__ttl">
              <textarea name="" id="" cols="10" rows="5"></textarea>
            </div>
            <div className="item__item">
              <textarea name="" id="" cols="10" rows="5"></textarea>
            </div>
          </div>

          <div className='item__add-question'></div>

          <button type="button" onClick={() => this.addNewQuestionBlock('item__add-question')}>項目を増やす</button>

          <hr />

          <p className="cat__ttl">不足情報</p>

          <div className="item__wrap question">
            <div className="item__ttl">
              <textarea name="" id="" cols="10" rows="5"></textarea>
            </div>
            <div className="item__item">
              <input type="date" />
            </div>
          </div>

          <div className='item__add-shortage'></div>

          <button type="button" onClick={() => this.addNewShortageBlock('item__add-shortage')}>項目を増やす</button>

          <hr />

          <button type="button" onClick={() => this.saveData()}>保存する</button>
        </div>
      </div>
    );
  }
}

function aaa(show) {
  console.log(show)
}

export default addModal;
