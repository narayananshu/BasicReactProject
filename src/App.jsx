import React, { useState,useEffect } from 'react'
import Home from './Component/Navbar/Home'
import { IoMdSearch } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import {collection,getDocs} from 'firebase/firestore'
import {db} from './Config/Credential'
const App = () => {
  var [cont,setCont] = useState([])

  useEffect(()=>{
    const   getContactFunc =async()=>{
      try {
        const contcollections= collection(db,'Contacts')
        const contactSnapShot = await getDocs(contcollections)
        console.log(contactSnapShot)
        console.log("ehllo")
      } catch (error) {
        console.log(error)
      }
     
    }
    getContactFunc();
  },[])
  return (
    <div className="mx-auto mx-w-[380px] text-2xl bold">
   
  <Home/>
  <div className="flex flex-grow gap-2 m-4">
  <div className=' relative flex item-center flex-grow'>
<IoMdSearch className="absolute m-2 text-white text-3xl  item-center"/> 
 <input type="text" className=" h-10 flex-grow rounded-md border-2 border-white bg-transparent  bg-grey text-white pl-9 "
 placeholder='search' />
  </div>

 <IoIosAddCircleOutline className="text-white text-4xl cursor-pointer "/>
  </div>

    </div>
  )
}

export default App
