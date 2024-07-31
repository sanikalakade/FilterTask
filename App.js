import React, { useState } from 'react' 
import './App.css';
import {data} from './data'
import Navbar from './components/Navbar';

function App() {
const [search,setSearch] = useState('');
console.log(search);
 return (
  <>
  <Navbar/>
    <div className="App">
      <h1 className='text-center mt-4'>Employee Information</h1>
      <form>
        <input className='my-3'placeholder='Search Employee First Name'
        onChange={(e)=> setSearch(e.target.value)}>
         </input>
      </form>
     <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Birth Date</th>
      <th scope="col">Blood Group</th>
      <th scope="col">Height</th>
      <th scope="col">Weight</th>
    </tr>
  </thead>
  <tbody>
    {data
    .filter((item) => {
      return search.toLowerCase() === ''
        ?item
          :item.firstName.toString().includes(search);
    })
    .map((item) => (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.age}</td>
      <td>{item.gender}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.birthDate}</td>
       <td>{item.bloodGroup}</td>
       <td>{item.height}</td> 
       <td>{item.weight}</td> 
    </tr>
   ))}
  
  </tbody>
</table>

    </div>
    </>
  );
}

export default App;
