import React, { useContext } from 'react'
import { UserContext } from './Context/UserContextProvider'

const Home = () => {
  const {user} = useContext(UserContext)

  if( !user ) return <h1 className="text-2xl text-center">Not Logged in</h1>
  return (
    <div>
      <h1 className="text-2xl text-center">Flex Portal : {user.username}</h1>
      
    </div>
  )
}

export default Home;

