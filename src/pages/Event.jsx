import React, { useEffect, useRef, useState } from 'react';

const Event = () => {
    const titleRef = useRef(null);
    const descriptionRef = useRef(null);
    const startTimeRef = useRef(null);
    const endTimeRef = useRef(null);
    const categoryIdsRef = useRef(null);
    const imageRef = useRef(null);
    const [allCategories, setAllCategories] = useState([]);
    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        startTime: "",
        endTime: "",
        categoryIds: "",
        image: ""
    });

    const BaseUrl = "http://localhost:3000/categories"; 
    const eventUrl = "http://localhost:3000/events/1"; 

    const handleSubmit = async () => {
        const updatedEventData = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            startTime: startTimeRef.current.value,
            endTime: endTimeRef.current.value,
            categoryIds: categoryIdsRef.current.value.split(','),
            image: imageRef.current.value
        };

        await fetch("http://localhost:3000/events", {
            body: JSON.stringify(updatedEventData),
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(updatedEventData);
    };

    const handleGetCategories = () => {
        fetch(BaseUrl)
            .then((res) => res.json())
            .then((data) => {
                setAllCategories(data);
                console.log('Fetched categories: ', data);
            })
            .catch((error) => console.error('Error fetching categories:', error));  
    };

    const handleGetEventData = () => {
        fetch(eventUrl)
        .then((res) => res.json())
        .then((data) => {
            setEventData({
                title: data.title,
                description: data.description,
                startTime: data.startTime,
                endTime: data.endTime,
                categoryIds: data.categoryIds.join(','), 
                image: data.image
            });
            console.log('Fetched event data: ', data);
        })
        .catch((error) => console.error('Error fetching event data: ', error))
    };

    useEffect(() => {
        handleGetCategories();
        handleGetEventData();
    }, []);

    return (
        <div>
            <div className='flex gap-2 py-2'>
                <p>Title: </p>
                <input type="text" ref={titleRef} defaultValue={eventData.title} />
            </div>
            <div className='flex gap-2 py-2'>
                <p>Description: </p>
                <input type="text" ref={descriptionRef} defaultValue={eventData.description} />
            </div>
            <div className='flex gap-2 py-2'>
                <p>Start Time: </p>
                <input type="datetime-local" ref={startTimeRef} defaultValue={eventData.startTime} />
            </div>
            <div className='flex gap-2 py-2'>
                <p>End Time: </p>
                <input type="datetime-local" ref={endTimeRef} defaultValue={eventData.endTime} />
            </div>
            <div className='flex gap-2 py-2'>
                <p>Select Category</p>
                <select
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                    ref={categoryIdsRef}
                    value={eventData.categoryIds}
                >
                    {allCategories.map((item) => (
                        <option key={item.id} value={item.id}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex gap-2 py-2'>
                <p>Image URL: </p>
                <input type="text" ref={imageRef} placeholder="Enter the URL" defaultValue={eventData.image} />
            </div>

            <button className="flex-shrink-0 border-transparent border-4 bg-slate-400 text-black border-solid  border-black hover:text-teal-800 text-sm py-1 px-2 rounded" type='submit' onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Event;






