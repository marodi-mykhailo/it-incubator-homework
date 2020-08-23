import React from 'react';
import './App.css';
import Message from "./messages/Message";
import ToDoList from "./toDoList/ToDoList";
import Input from "./input/Input"

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
        </div>
    );
}

export default App;
