import React from 'react';
import './App.css';
import Message from "./messages/Message";
import ToDoList from "./toDoList/ToDoList";
import Input from "./input/Input"
import {CommonComponent} from "./common/CommonComponent";
import {NavBar} from "./NavBar/NavBar";
import { Route } from 'react-router-dom';
import {PreJunior} from "./PreJunior/PreJunior";
import {Junior} from "./Junior/Junior";
import {JuniorPlus} from "./JuniorPlus/JuniorPlus";

function App() {
    return (
        <div>
            <NavBar/>
            <Route path={"/preJunior"} render = {() => <PreJunior/>}/>
            <Route path={"/Junior"} render = {() => <Junior/>}/>
            <Route path={"/JuniorPlus"} render = {() => <JuniorPlus/>}/>
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
