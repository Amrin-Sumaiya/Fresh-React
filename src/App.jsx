import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import AllEventsScreen from './pages/AllEventsScreen.jsx';
import Event from './pages/Event.jsx';
import HomePage from './pages/HomePage.jsx';
import AddMorePage from './pages/AddMore/addmore.jsx'; 
import EditEvent from './pages/AddMore/EditEvent.jsx';
import UserEvent from './pages/AddMore/UserEvent.jsx';
import MoreInfo from './pages/AddMore/MoreInfo.jsx';
import EditUser from './pages/AddMore/EditUser.jsx';
import LoadData from './pages/AddMore/LoadData.jsx';
import UserContextProvider from './components/Context/UserContextProvider.jsx';
import WIthAuth from './components/HOC/WIthAuth.jsx';
import Login from './components/HOC/Login.jsx';

import Home from './components/Home.jsx'
import NextEvent from './components/NextEvent.jsx';

// Define UserContext here if not defined in UserContextProvider.jsx
export const UserContext = React.createContext();

function App() {
    return (
        <div className="App bg-gray-100 min-h-screen">
            <UserContextProvider>
               
                
                <Router>
                    <Nav />
                    <Home />
                  

                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/allevents' element={<AllEventsScreen />} />
                        <Route path='/event' element={<Event />} />
                        <Route path="/add-more" element={<AddMorePage />} />
                        {/* <Route path='/eidt/:id' element={<EditEvent />} /> */}
                        <Route path='/userevent' element={<UserEvent />} />
                        <Route path='/moreinfo' element={<MoreInfo />} />  
                        <Route path='/edit/:id' element={<EditUser />} /> 
                        <Route path='/loaddata' element={<LoadData />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/nextevent' element={<NextEvent/> } />
                    </Routes>
                 
                </Router>
                
          
            </UserContextProvider>
        </div>
    );
}

export default App;
