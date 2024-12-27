import { useState } from "react";
import logo from "../assets/logo.png"
import { navItems } from "../constants";
import {Menu,X} from "lucide-react"

const Navbar = () => {

    const [mobileDrawer,setmobiledrawerOpen]=useState(false);
    const togglenavbar=()=>{
        setmobiledrawerOpen((prev)=>!prev)
    }

  return (
  <nav className="nav sticky px-3 top-0 z-50 py-3 backdrop-blur-lg border-b border-nutral-700/80">
    <div className="container px-y mx-auto relative text-sm">
        <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
                <img className="h-10 w-10 mr-2" src={logo} alt="" />
                <span className="text-xl tracking-tight font-bold">VIRTUALR</span>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12">
                {
                    navItems.map((item,index)=>{
                       
                       return( <li key={index}>
                            <a href={item.href}>{item.label}</a>
                        </li>)

                    })
                }
            </ul>
            <div className="hidden lg:flex justify-center space-x-12 items-center">
                <a href="#" className="py-2 px-3 border rounded-md">Sign In</a>
                <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create An Account</a>
            </div>

            <div className="lg:hidden mx-5 md-flex flex-col justify-end">
                <button onClick={togglenavbar}>
                    {mobileDrawer?<X/>:<Menu/>}
                </button>
            </div>
        </div>
        {
            mobileDrawer&&(
                <div className="fixed backdrop-blur-lg nav right-0 z-20  bg-neutral-900/95 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul className="w-full flex flex-col justify-center items-center">
                        {
                            navItems.map((items,index)=>(
                                <li key={index} className="text-center rounded-md w-full py-3 hover:bg-opacity-25 hover:bg-zinc-700">
                                    <a href="#">{items.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="flex mt-3 space-x-6">
                        <a href="#" className="py-3 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a href="#" className="py-3 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800">create Account</a>
                    </div>
                </div>
            )
        }
    </div>
  </nav>
  )
}

export default Navbar
