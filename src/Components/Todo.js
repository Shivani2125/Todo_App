import React, { useState } from 'react'
import './Todo.css';

function Todo() {
    function inputvalue(e) {
        setadditems(e.target.value);
    }

    const submit = () => {
        let itemJson = {
            itemName : items,
            isChecked : false
        };
        setListdata([...listdata,itemJson]);
        setadditems("");
    }

    function Removeitems() {
        let filteredArr = listdata.filter((elem) => {return elem.isChecked===false});
        setListdata(filteredArr);
    }
    function RemoveAll() {
        setListdata([]);
    }

    function checkeditems(evt, id) { 
        let arr = [...listdata];
        arr[id].isChecked = evt.target.checked;
        setListdata(arr);
    }
    const [items, setadditems] = useState("");
    const [listdata, setListdata] = useState([]);
    return (
        <>
            <div className="main">
                <span className="header">My Tasks</span>
                <div className="add-data">
                    <input type='text' placeholder='Enter items...' value={items} onChange={(e) => inputvalue(e)} ></input>
                    <input type='button' value='Add' className='button' onClick={() => submit()}></input>
                </div>
                {listdata !== [] && listdata.map((data, i) => {
                    return (
                        <p key={i}>
                            <div className="added-items">
                                <div>{data.itemName}</div>
                                <input type='checkbox' onClick={(event) => checkeditems(event, i)} checked={data.isChecked}></input>
                            </div>
                        </p>
                    )

                })}
                <div className='buttons'>
                <input type="button" value='Remove' onClick={()=>Removeitems()}/>  
                {listdata.length > 0 && <input type="button" className='button' value='Remove All' onClick={() => RemoveAll()} />}
                </div>
            </div>

        </>
    )
}

export default Todo
