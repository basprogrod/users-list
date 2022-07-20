import './App.scss';
import { Routes, Route } from 'react-router-dom';

import { Userspage } from './page/Userspage/Userspage';
import { Adduserpage } from './page/Adduserpage/Adduserpage'
import { Notfoundpage } from './page/Notfoundpage/Notfoundpage';
import { Person } from './page/Person/Person';

import { Layout } from './Components/Layout/Layout'
import { useState } from 'react';
import { Editperson } from './page/Editperson/Editperson';


// const users = [
//   {   
//       id: 1,
//       name: "Roma",
//       lastname: "Dyukoff",
//   },
//   {
//       id: 2,
//       name: "Vasya",
//       lastname: "Pupkin",
//   },
//   {
//       id: 3,
//       name: "Jhon",
//       lastname: "Doe",
//   },
// ]

export const App = () => {

  const [ users, setUsers ] = useState([]);

  const addUser = ({ name, lastname }) => {
    if ({ name, lastname }) {
      const newUser = {
        id: Math.random(),
        name: name,
        lastname: lastname
      }
      setUsers([...users, newUser])
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Userspage users={users} />} />
          <Route path="/:id" element={<Person person={users} />} />
          <Route path="/:id/edit" element={<Editperson />} />
          <Route path="adduser" element={<Adduserpage addUser={addUser} />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>    
      </Routes>
    </> 
  );
}
