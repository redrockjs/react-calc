import React, {useState} from 'react';
import './App.css';
import {NumDisplay} from "./components/numdisplay/numdisplay";
import {Key} from "./components/key/key";

let App = () => {

    let [current,setCurrent]=useState("0");
    let [prev,setPrev] = useState("0");
    let [action,setAction] = useState(null);
    let [isPointer,setPointer] = useState(false);


    return (
        <div className="App">
            <div><h1 className="h1">Simple React calculator</h1></div>
            <div><NumDisplay current={current}/></div>
            <div className="container">
                <div className="row">
                    <Key keyValue="AC" setCurrent={setCurrent} isPoiner={isPointer} setPointer={setPointer} prev={prev} setPrev={setPrev} action={action} setAction={setAction}/>
                    <Key keyValue="C" setCurrent={setCurrent} isPoiner={isPointer} setPointer={setPointer} prev={prev} setPrev={setPrev} action={action} setAction={setAction}/>
                    {/*<Key keyValue="<" current={current} setCurrent={setCurrent} isPoiner={isPointer} setPointer={setPointer}/>*/}
                    <Key keyValue="%" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev} action={action} setAction={setAction}/>
                    <Key keyValue="/" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev} action={action} setAction={setAction}/>
                </div>
                <div className="row">
                    <Key keyValue="7" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev}/>
                    <Key keyValue="8" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev}/>
                    <Key keyValue="9" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev}/>
                    <Key keyValue="*" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev} action={action} setAction={setAction}/>
                </div>
                <div className="row">
                    <Key keyValue="4" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev}/>
                    <Key keyValue="5" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev}/>
                    <Key keyValue="6" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev}/>
                    <Key keyValue="-" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev} action={action} setAction={setAction}/>
                </div>
                <div className="row">
                    <Key keyValue="1" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev}/>
                    <Key keyValue="2" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev}/>
                    <Key keyValue="3" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev}/>
                    <Key keyValue="+" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev} action={action} setAction={setAction}/>
                </div>
                <div className="row">
                    <Key keyValue="-1" current={current} setCurrent={setCurrent}/>
                    <Key keyValue="0" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev}/>
                    <Key keyValue="." current={current} setCurrent={setCurrent} isPoiner={isPointer} setPointer={setPointer}/>
                    <Key keyValue="=" current={current} setCurrent={setCurrent} prev={prev} setPrev={setPrev} action={action} setAction={setAction}/>
                </div>
            </div>
        </div>
    );
}

export default App;
