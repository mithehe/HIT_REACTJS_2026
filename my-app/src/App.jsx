import { useEffect, useState } from 'react';
import './App.css'
import './App.scss'

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {setUsers(users); setLoading(false)});
  }, [])

  if(loading){
    return <p>Đang tải dữ liệu, vui lòng chờ...</p>
  }

  return(
    <div className='card'>
      {users.map(user =>
        <div className='userCard'key = {user.id}>
          <img
            src={`https://ui-avatars.com/api/?name=${user.name}&background=random`}
            alt={user.name}
          />
          <h3>{user.name}</h3>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  
  )
}

export default App;
