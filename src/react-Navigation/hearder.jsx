import React from 'react'
import UserProfile from '../components/userProfile'

const hearder = () => {
  return (
    <div>
       <div className=" container mx-10 w-full">
     <nav className="flex items-center justify-between my-4 ">
      <header>
       
         <p className="text-3xl font-bold">LOGO</p>
       </header>

      <div>
        
        <ul className="flex space-x-4 font-semibold">
          <li> Home</li>
         <li> About </li>
         <li> Portfolio</li>
          <li> Contact</li>
        </ul>
      </div>
       </nav>
       </div>
    </div>
  )
}

export default hearder; 