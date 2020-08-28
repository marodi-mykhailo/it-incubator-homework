import React from 'react';
import './App.css';
import Message from "./messages/Message";
import ToDoList from "./toDoList/ToDoList";
import Input from "./input/Input"
import {CommonComponent} from "./common/CommonComponent";

function App() {
    return (
        <div>
            <Message name="Andrej" text="lorem asdadasd
            fbsjbfjhbskhbskhbhjsb
            jhlvbsjhbjhsbjvbs
            jhbsjhbjasbjvbshjvba
            sjbvjhasbhjvbasjhbvj" />
            <ToDoList/>
            <Input/>
            <CommonComponent/>
        </div>
    );
}

export default App;
