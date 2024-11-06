import React, { useState, useEffect } from 'react';

const MoreInfo = () => {
 
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: '',
    categoryIds: '',
    imageUrl: '',
  });
  const [allCategories, setAllCategories] = useState([]);

  
  useEffect(() => {
 
    fetch ( "http://localhost:3000/categories") 
    .then(response => response.json())
    .then(users => {
      setEventData(users);
      setAllCategories(users);

    })
    .catch(error => {
      console.error('Error fetching user error: ');

    });

    // setAllCategories(categories);
  }, []);

 
  const handleChange = (e) => {
    setEventData({ ...eventData, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Event Data:', eventData);
 
  };

  return (
    <div>
      <div>
        <div className='flex gap-2 py-2'>
          <p>Title: </p>
          <input
            type='text'
            name='title'
            value={eventData.title}
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-2 py-2'>
          <p>Description: </p>
          <input
            type='text'
            name='description'
            value={eventData.description}
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-2 py-2'>
          <p>Start Time: </p>
          <input
            type='datetime-local'
            name='startTime'
            value={eventData.startTime}
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-2 py-2'>
          <p>End Time: </p>
          <input
            type='datetime-local'
            name='endTime'
            value={eventData.endTime}
            onChange={handleChange}
          />
        </div>
        <div className='flex gap-2 py-2'>
          <p>Select Category:</p>
          <select
            className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
            name='categoryIds'
            value={eventData.categoryIds}
            onChange={handleChange}
          >
            <option value=''>Select Category</option>
            {allCategories?.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='flex gap-2 py-2'>
          <p>Image URL: </p>
          <input
            type='text'
            name='imageUrl'
            placeholder='Enter the URL'
            value={eventData.imageUrl}
            onChange={handleChange}
          />
        </div>

        <button
          className='flex-shrink-0 border-transparent border-4 bg-slate-700 text-white [] text-sm py-1 px-2 rounded'
          type='submit'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MoreInfo;

