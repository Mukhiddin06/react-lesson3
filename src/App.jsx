import { useState } from 'react'
import './App.css'

function App() {
  const [users, setUsers] = useState([])
  const handleSubmit =(event) =>{
    event.preventDefault();
    let user = {
      firstname: event.target[0].value,
      lastname: event.target[1].value,
      age: event.target[2].value,
      mail: event.target[3].value,
    }
    users.push(user)
    setUsers([...users])
    event.target[0].value = ""
    event.target[1].value = ""
    event.target[2].value = ""
    event.target[3].value = ""
  }
  return (
    <>
    <div className="container">
      <div className="table-wrapper">
        <table className="table-user">
          <thead>
            <tr>
              <td>T/R</td>
              <td>FirstName</td>
              <td>LastName</td>
              <td>Age</td>
              <td>Mail</td>
            </tr>
          </thead>
          <tbody>
           {
            users.map((item, index)=>(
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.firstname}</td>
                <td>{item.lastname}</td>
                <td>{item.age}</td>
                <td>{item.mail}</td>
              </tr>
            ))
           }
          </tbody>
        </table>
      </div>
      <div className="card-wrapper">
        <div className="card">
          <div className="card-header">
            <h3 className='card-title'>Add User</h3>
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit} id='to'>
              <input type="text"  placeholder='FirstName' className='card-input' required/>
              <input type="text"  placeholder='LastName' className='card-input' required/>
              <input type="number"  placeholder='Age' className='card-input' required/>
              <input type="email"  placeholder='Email' className='card-input' required/>
            </form>
          </div>
          <div className="card-footer">
            <button type='submit' className='btn' form='to'>add user</button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
