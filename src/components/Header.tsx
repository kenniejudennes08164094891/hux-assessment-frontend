import React from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { logoutUser } from "../utils/endpoints/authEndpoints";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Header({details}:any) {

    const navigate:any = useNavigate();

   function logoutUserData(){
    logoutUser().then((res:any) => {
        console.log("response>>", res);
        localStorage.clear();
        toast.success("you've been logged out successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
        setTimeout(() =>  navigate('/'), 2000)
    }).catch((err:any) => {
        console.error("err>>", err);
        toast.error("Oops an error occored!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    })
    }

    return (
        <>
            <header className="bg-gray-800 text-white p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl font-bold">{details}</h1>
                    </div>
                    <nav>
                    <span onClick={logoutUserData}>
                    <BiLogOutCircle style={{ fontSize: '2em', cursor:'pointer'}}/>
                    </span>
                    <ToastContainer/>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header;