import React, {useState} from "react";
import './ToDoList.css'

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
        if (option == '') setList(reverse);
    }

    const deleteItem = (e: number) => {
        setList( list.filter(x => x.id !== e));
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
                    return (<li key={x.id}>{x.name}; &nbsp; priority: {x.priority}
                        <button className=" deleteButton d-none m-2 p-2" onClick={() => deleteItem(x.id)}>X</button>
                    </li>)
                })}
            </ul>
            <button className="m-2 p-2" onClick={() => setList(reverse.filter(prior => prior.priority == 'low'))}>low
            </button>
            <button className="m-2 p-2"
                    onClick={() => setList(reverse.filter(prior => prior.priority == 'middle'))}>middle
            </button>
            <button className="m-2 p-2"
                    onClick={() => setList(reverse.filter(prior => prior.priority == 'high'))}>high
            </button>
            <button className="m-2 p-2" onClick={() => setList(reverse)}>reset</button>
            <button className="m-2 p-2" onClick={() => {
                const but = document.getElementsByClassName('deleteButton');
                for (let i = 0; i < but.length; i++) {
                    but[i].classList.toggle('d-none')
                }
            }}>delete
            </button>
            <br/>
            Filter <br/>
            <input onChange={filterList}/>
        </div>
    )


}

export default ToDoList;