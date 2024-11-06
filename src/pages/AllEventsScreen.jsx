import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function AllEventsScreen() {
  const myHeadline = useRef();
  const [data, setData] = useState([]); 
  const [filteredEvents, setFilteredEvents] = useState([]); 
  const navigate = useNavigate(); 

  const handleGetEvent = () => {
    fetch('http://localhost:3000/events ')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setFilteredEvents(data);
      })
      .catch((error) => console.error('Error fetching events:', error));
  };

  const handleUserChange = (value) => {
    const filterData = data?.filter((item) =>
      item?.title.toLowerCase().includes(value.toLowerCase())
    );
    if (value === '') {
      handleGetEvent();
    } else {
      const filtered = data.filter((event) => {
        const name = event.name ? event.name.toLowerCase() : '';
        const title = event.title ? event.title.toLowerCase() : '';
        const id = event.id ? event.id.toLowerCase() : '';
        return (
          name.includes(value.toLowerCase()) ||
          title.includes(value.toLowerCase()) ||
          id.includes(value.toLowerCase())
        );
      });
      setFilteredEvents(filtered);
    }
  };

  useEffect(() => {
    handleGetEvent();
  }, []);
  const handleAddMoreClick = () => {
    navigate('/event'); 
  };

;

  const handleEdit = (id) => {
    navigate(`/edit/${id}`); 
  };

  return (
    <div className="bg-white min-h-screen w-full p-4">
      <h1 ref={myHeadline}></h1>


      <button
        className="bg-gray-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddMoreClick} 
      >
        + Add more
      </button>
      <input
        type="text"
        placeholder="Search by ID, name, or title..."
        onChange={(e) => handleUserChange(e.target.value)}
        className="border border-gray-300 p-2 mb-4 w-full"
      />
      <table className="border-collapse border border-slate-500 w-full">
        <thead>
          <tr>
            <th className="border border-slate-600 bg-gray-300">ID</th>
            <th className="border border-slate-600 bg-gray-300">Name</th>
            <th className="border border-slate-600 bg-gray-300">Title</th>
            <th className="border border-slate-600 bg-gray-300">Description</th>
            <th className="border border-slate-600 bg-gray-300">Edit</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <tr key={event.id}>
                <td className="border border-slate-600">{event.id}</td>
                <td className="border border-slate-600">{event.name}</td>
                <td className="border border-slate-600">{event.title}</td>
                <td className="border border-slate-600">{event.description}</td>
                <td className="border border-slate-600">
                  <button
                    className="bg-gray-400  hover:bg-gray-700 text-black font-bold py-2 px-4 rounded"
                    onClick={() => handleEdit(event.id)} 
                  >
                    EditEvent
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center border border-slate-600">
                No events found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default AllEventsScreen;












