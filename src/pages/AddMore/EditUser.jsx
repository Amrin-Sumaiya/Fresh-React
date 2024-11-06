import React, { useState, useEffect, useRef} from 'react'
import { useParams } from 'react-router-dom'; //didn't use it in post method

const EditUser = () => {
    const { id } = useParams();
    const nameRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef();
    const imageRef = useRef();
    const [ userData , setUserData ] = useState({
        name: '',
        description: '',
        title: '',
        image: '',
       

    });

    useEffect(() => {
        const fetchUserData = async () => {
            try{
                const response = await fetch(`http://localhost:3000/users/${id}` )
                if (response.ok){
                    const data = await response.json();
                    setUserData(data); 
 //{ (POST method creating )
                     //   name: data.name || '',
                       // description: data.description || '',
                       // title: data.title || '',
                 //   }
                 nameRef.current.value = data.name;
                 titleRef.current.value = data.title;
                 descriptionRef.current.value = data.description;                      
                 imageRef.current.value = data.image;
                } else{
                    console.error('Failed to fetch user data');
                }
            } catch (error) {
                console.error('Error fetching user data: ', error);
            }
        };
        fetchUserData();
    }, [id]);
   //  const hanldeInputChange = (e) => {
       // const { id, value } = e.target;
       // setUserData({
        //    ...userData,
         //   [id]: value,

     //   }); //(POST method part)
  //   };
     const handleSubmit = async (e) => {
        e.preventDefault();

         const updatedUserData = {
            name: nameRef.current.value,
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            image: imageRef.current.value,
         }
        try{
            const response = await fetch(`http://localhost:3000/users/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedUserData),
            });
            

            if(response.ok) {
                const result = await response.json();
                console.log('User created successfully: ', result);
            } else {
                console.error('Failed to create user');
            } 
            
        } catch (error) {
            console.error('Error: ', error);
        }
     };
  return (
    <div>
        <b>Edit User Information and Data</b> 
        <form onSubmit={handleSubmit}>
        <div className='flex gap-2 py-2'>
          <label className='flex gap-2 py-2'>Name:</label>
          <input type="text" ref={nameRef} defaultValue={userData.name}  />
        </div >
        <div className='flex gap-2 py-2'>
          <label>Title: </label>
          <input type="text"  ref={titleRef} defaultValue={userData.title}  />
        </div>
        <div className='flex gap-2 py-2'>
          <label>Description: </label>
          <input type="text"  ref={descriptionRef} defaultValue={userData.description}  />
        </div>
        <div className='flex gap-2 py-2'>
            <label>Image Link: </label>
            <input type="text" ref={imageRef} defaultValue={userData.image} />

        </div>
        
        
        <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Submit
        </button>

        </form>
      
    </div>
  )
}

export default EditUser
