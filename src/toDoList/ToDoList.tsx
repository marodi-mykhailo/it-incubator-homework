import React, {useState} from "react";
import './ToDoList.css'
import {CommonInput} from "../common/CommonInput/CommonInput";
import {CommonButton} from "../common/CommonButton/CommonButton";

function ToDoList() {
    let reverse = [{
        id: 0,
        name: 'anime',
        priority: 'low'
    },
        {
            id: 1,
            name: 'university projects',
            priority: 'high'
        },
        {
            id: 2,
            name: 'dota',
            priority: 'low'
        },
        {
            id: 3,
            name: 'react',
            priority: 'high'
        },
        {
            id: 4,
            name: 'graduate work',
            priority: 'middle'
        },
    ]

    const [list, setList] = useState(reverse);

    const filterList = (e: any) => {
        const option = e.currentTarget.value;
        setList(reverse.filter(value => value.priority.indexOf(option) > -1 || value.name.indexOf(option) > -1))
        if (option === '') setList(reverse);
    }

    const deleteItem = (e: number) => {
        setList(list.filter(x => x.id !== e));
    }

    const lowFilter = () => {
        setList(reverse.filter(prior => prior.priority === 'low'))
    }
    const middleFilter = () => {
        setList(reverse.filter(prior => prior.priority === 'middle'))
    }
    const hightFilter = () => {
        setList(reverse.filter(prior => prior.priority === 'high'))
    }

    const resetHandler = () => {
        setList(reverse)
    }


    return (
        <div className="p-4">
            <h1>
                Homework #2
            </h1>
            <h2>
                ToDoList
            </h2>
            <ul>
                {list.map(x => {
                    return (<div className={'d-flex'}>
                        <li key={x.id}><p>{x.name}; &nbsp; priority: {x.priority}</p>
                        </li>
                        <CommonButton type={"delete"} value={'X'}
                                      onClick={() => deleteItem(x.id)}/>
                    </div>)
                })}
            </ul>
            <div className={'d-flex'}>
            <CommonButton value={'low'} onClick={lowFilter}/>
            <CommonButton value={'middle'}
                          onClick={middleFilter}/>
            <CommonButton value={'hight'}
                          onClick={hightFilter}/>
            <CommonButton value={'reset'} onClick={resetHandler}/>
            </div>
            <br/>
            Filter <br/>
            <CommonInput onChange={filterList}/>

        </div>
    )


}

export default ToDoList;
