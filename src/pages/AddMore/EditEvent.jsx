import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';

const EditEvent = () => {
  const { id } = useParams(); 
  const [event, setEvent] = useState(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {

     fetch(`http://localhost:3000/events/${id}`) 
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      })
      .catch((error) => console.error('Error fetching event:', error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
        name: nameRef.current.value,
        title: titleRef.current.value,
        description: descriptionRef.current.value,
      };


    console.log('UpdatedData====>>>>', updatedData);
    

    fetch(`http://localhost:3000/events/${id}`,{
        method: 'PUT' ,
        headers: {
            'Content-Type' : 'application/json' ,

        },
        body: JSON.stringify(updatedData),
    })

    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.error(error))
  };

  if (!event) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="bg-white min-h-screen w-full p-4">
      <b>Details about Member</b>
      <form onSubmit={handleSubmit}>
        <div className='flex gap-2 py-2'>
          <label className='flex gap-2 py-2'>Name:</label>
          <input type="text" defaultValue={event.name} ref={nameRef} />
        </div >
        <div className='flex gap-2 py-2'>
          <label>Title: </label>
          <input type="text" defaultValue={event.title} ref={titleRef} />
        </div>
        <div className='flex gap-2 py-2'>
          <label>Description: </label>
          <input type="text" defaultValue={event.description} ref={descriptionRef} />
        </div>
        
        
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>

      </form>
    </div>
  );
};

export default EditEvent;

