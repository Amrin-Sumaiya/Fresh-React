import { useState } from "react";

import React from 'react';
import Job from '../assets/job.jpg';
import Team from '../assets/team.jpg';
import Event from '../assets/event.jpg';
import users from '../assets/user.jpg';
import Facebook from '../assets/fb.png';
import Linkdin from '../assets/linkedin.png';

// For React Reusable Componants

const HomePage = () => {
    const [expand, setExpand] =useState(false);
    const toggleExpand = () => setExpand(prevExpand => !prevExpand);
    console.log(expand);





    return (
        <div className="bg-white min-h-screen">
        <div className="bg-slate-400 text-black p-8 flex justify-between items-center">
            <div className="flex flex-col md:flex-row justify-between items-start w-full space-y-6 md:space-y-0 md:space-x-8">
                {/* Left Side - Text After clicked a button a paragraph will be showed, doing this by using Reusable Components */}
                <div className="md:w-1/2">
                    <h1 className="text-4xl font-bold">Team Member and Guest Data Page</h1>
                    <p className="mt-2">
                        Using "POST" & "PUT" method for making this project. By using "POST" method, we can send the data to the server from the API. The "PUT" method is used for updating or editing the data.
                        Additionally, "useParams" and "useRef" are used in this project to handle various functionalities.
                    </p>
                    
                    <button className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-lg hover:bg-black transition duration-500" onClick={toggleExpand}>
                            Learn More
                        </button>
                        { expand && <div>Learning about default value, POST method, PUT method</div>} 
                </div>

               {/* Right side */}
                <div className="md:w-1/2">
                    <img src={Job} alt="job" className="w-full rounded-lg border-2 border-gray-700 object-cover" />
                </div>

            </div>
        </div>
                        {/*  Middle section with 3 peice*/}
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
                    <div className="text-center">
                        <img src={Team} alt=" team " className="w-full h-60 border-2 border-gray-700 object-cover rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg" />
                        <button className="mt-4 border-solid border-2 border-black px-40 py-2 bg-white text-black rounded-lg hover:bg-slate-600 transiton duration-300" onClick={toggleExpand}> All Event</button>
                       { expand && <div> There are some Employeers data, U can edit  the info of these data also</div>}

                    </div>
                    <div className="text-center">
                    <img src={Event} alt=" event " className="w-full h-60  border-2 border-gray-700 object-cover rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg" />
                    <button className="mt-4 border-solid border-2 border-black px-40 py-2 bg-white text-black rounded-lg hover:bg-slate-600 transiton duration-300" onClick={toggleExpand}> Event</button>
                    { expand && <div> There are Title, Start Time, Ending Time, Select Category </div>}
                </div>
                <div className="text-center">
                    <img src={users} alt=" user "  className=" w-full h-60 border-2 border-gray-700 object-cover rounded-lg transition-transform hover:scale-105 hover:shadow-lg "/>
                    <button className="mt-4 border-solid border-2 border-black px-40 py-2 bg-white text-black rounded-lg hover:bg-slate-600 transition duration-300"> User Event </button>

                </div>
 
                </div>

                {/* footer section */}
                <footer className="bg-gray-800 text-white p-6 mt-8">
                    <div className="flex- flex-col item-center md:flex-row justify-between">
                         {/* footer left side text section */}
                         <div className="mb-4 md:mb-0 text-center md:text-left">
                            <h2 className="text-2xl font-semibold">React Project</h2>
                            <p className="mt-2 text-sm">@ All rights reserved.</p>
                         </div>

                         {/*footer right side Icon section */}
                         <div className="flex space-x-4 justify-center">


             
<a
                            href="https://www.facebook.com"
                            className="transition duration-300 transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={Facebook}
                                alt="Facebook"
                                className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-500"
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com"
                            className="transition duration-300 transform hover:scale-110"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={Linkdin}
                                alt="Linkdin"
                                className="w-8 h-8 rounded-full border-2 border-gray-300 hover:border-blue-400"
                            />
                        </a>

                         </div>



                    </div>

                </footer>
    </div>

    );
};

export default HomePage;

