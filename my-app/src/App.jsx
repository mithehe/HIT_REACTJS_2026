import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemberCard from './Components/MemberCard/MemberCard'


function App() {

  const members = [
    {name: 'Nguyen Le Hoai Nam', id: '01', role: 'Chu nhiem'},
    {name: 'Pham Minh Khuong', id: '02', role: 'PCN hoc tap'},
    {name: 'Nguyen Quang Minh', id: '03', role: 'PCN hoc tap'}
  ];
  
  return (
    <>
        <ul>
          {members.map((member) => (
            <MemberCard
              key={member.id}
              name={member.name}
              role={member.role}
            />
          ))}
        </ul>
    </>
  )
}

export default App
