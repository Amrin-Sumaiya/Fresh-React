import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function UserEvent() {
    const [data, setData] = useState([]);
    const [ filteredUsers, setFilteredUsers ] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate(); //for more info button add navigate this


useEffect (() => {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => {
        setData(users);
        setFilteredUsers(users);
    })
    .catch(error => {
        console.error('Error fetching users: ', error);
    });

}, []);

 useEffect(() => {
    const filtered = data.filtered = data.filter(users => 
        users.id.toString().includes(searchValue.toLowerCase()) ||
        users.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredUsers(filtered);
 }, [searchValue, data]);

 const handleUserChange = (e) => {
    setSearchValue(e.target.value);
 };

 const handleMoreInfoClick =() =>{
    navigate('/moreinfo'); //navigate more info button change this
 }

 const handleEdit = (id) => {
  navigate(`/edit/${id}`);
 };

 const handleLoadDataClick = () => {
  navigate( '/loaddata');
 }
 
  return (
    <div>
  
        <div className="bg-white min-h-screen w-full p-4">

            <button className="bg-teal-600 hover:bg-blue-950 text-black font-bold py-2 px-4 rounded" onClick={handleMoreInfoClick}> More Info</button>
            
            <input type="text" placeholder="Search By id, name..." value={searchValue} onChange={handleUserChange} className="border border-gray-900 p-2 mb-4 w-full" /> 
            <table className="border-collapse border-slate-500 w-full">
            <thead>
          <tr>
            <th className="border border-slate-600 bg-gray-300">ID</th>
            <th className="border border-slate-600 bg-gray-300">Name</th>
            <th className="border border-slate-600 bg-gray-300">Image</th>
            <th className="border border-slate-600 bg-gray-300">Description </th>
            <th className="border border-slate-600 bg-gray-300">Tittle</th>
            <th className="border border-slate-600 bg-gray-300"> Edit User</th>
    
          </tr>
        </thead>

                <tbody>
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map(user => (
                            <tr key={user.id}>
                                <td className="border border-slate-600">{user.id}</td>
                                <td className="border border-slate-600">{user.name}</td>
                                <td className="border border-slate-600"><img src={user.image} alt={user.name} className="w-16 h-16 object-cover" /></td>
                                <td className="border border-slate-600">{user.description}</td>
                                <td className="border border-slate-600">{user.title}</td>
                                <td className="border border-slate-600">{user.edit}
                                  <button className="hover: bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleEdit(user.id)}> Edit data</button>
                                </td>

                            </tr>
                        ))
                    ) :  (
                        <tr>
                          <td colSpan="4" className="text-center border border-slate-600">
                            No data available
                          </td>
                        </tr>
                      )}

              
                </tbody>
                </table> <br></br>
                <button className="bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleLoadDataClick}>Load Data</button>
        </div>

      
    </div>
  );
}

export default UserEvent
