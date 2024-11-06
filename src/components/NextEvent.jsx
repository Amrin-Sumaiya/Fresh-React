import React, { useContext, useState } from 'react'
import { UserContext } from './Context/UserContextProvider'

const NextEvent = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

   const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
   
    
localStorage.setItem('userName',username)

  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h5 className="text-2xl">React for Context API</h5>
  <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
    <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Login</h2>

    <input
      type="text"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      placeholder="Username"
      className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
    />

    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 border border-slate-800 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
    />

    <button
      onClick={handleSubmit}
      className="w-full px-4 py-2 font-semibold text-white bg-blue-900 rounded-lg hover:bg-black  "
    >
      Submit
    </button>
  
  </div>
</div>

  )
}

export default NextEvent