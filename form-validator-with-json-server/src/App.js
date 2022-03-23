import {useEffect, useState} from 'react'
import './App.css';
import ValidatedLoginForm from "./components/ValidatedLoginForm";

function App() {

    const [users,setUsers] = useState([]);

    const getUsers = async () => {
        const usersFromServer = await fetchUsers();
        setUsers(usersFromServer);
        return usersFromServer;
    };

    const fetchUsers = async () => {
        const res = await fetch ("http://localhost:5000/users")
        const data = await res.json();
        return data
    }

    const loginVerification = async (data) => {
        const user = {
            email:data.values.email,
            password: data.values.password
        };
        const result = await findUser(user);
        if (result !== undefined)
            alert(`Witaj ${result.email}!`);
        else
            alert("Nieprawidlowe dane logowania.");

    };

    const findUser = async (user) =>
    {
        const users = await getUsers();
        return users.find(
            u => u.email === user.email && u.password === user.password
        );

    }

  return (
    <div className="App">
        <h1>Form validator with json server</h1>
     <ValidatedLoginForm onAdd={loginVerification}/>
    </div>
  );
}

export default App;
