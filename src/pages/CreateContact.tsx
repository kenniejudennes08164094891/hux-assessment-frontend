import React, { useState, useEffect } from "react";
import { Images } from "../utils/Images";
import { useNavigate } from "react-router-dom";
import { createUser } from "../utils/endpoints/contactsEndpoints";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function CreateContact() {

    const [btnBgColor, setBtnBgColor] = useState<string>("bg-[#CDD5DF]");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");
    const [isLoading, setLoading] = useState<any>(null);
    const navigate:any = useNavigate();

    function handleChange(e: any) {
        e?.target?.value?.length === 0 ? setBtnBgColor("bg-[#CDD5DF]") : e?.target?.value?.length > 0 ? setBtnBgColor("bg-[#101323]") : setBtnBgColor("bg-[#CDD5DF]")
    }

    const handelSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        let payload = {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber
        }

        createUser(payload).then((res:any) => {
            console.log("response>>", res);
            toast.success("data has been updated succesfully!", {
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
           setTimeout(() =>  navigate("/table"), 2000);
        }).catch((err:any) => {
            console.error("err>>", err?.response?.data?.message);
            setLoading(false);
            toast.error(err?.response?.data?.message !== undefined ? err?.response?.data?.message : "Oops an error occured!", {
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

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            handelSubmit(event);
        }
    };


    return (
        <React.Fragment>
            <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${Images?.loginImg})` }}
            >
                <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
                    <h2 className="text-2xl font-semibold mb-6 text-center">Create New Contact</h2>
                    <form autoComplete="off" className="space-y-4">
                        <div>
                            <label htmlFor="firstName" className="block mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your First Name"
                                value={firstName} onChange={handleChange} onKeyDown={handleKeyPress} onChangeCapture={(e: any) => setFirstName(e?.target?.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="lastName" className="block mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your Last Name"
                                value={lastName} onChange={handleChange} onKeyDown={handleKeyPress} onChangeCapture={(e: any) => setLastName(e?.target?.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-1">
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your Phone Number"
                                value={phoneNumber} onChange={handleChange} onKeyDown={handleKeyPress} onChangeCapture={(e: any) => setPhoneNumber(e?.target?.value)}
                                required
                            />
                        </div>
                        <br />
                        <button
                            onClick={handelSubmit}
                            type="submit"
                            className={`w-full ${btnBgColor} text-white py-2 px-4 rounded-lg hover:${btnBgColor} transition-colors duration-300`}
                        >
                         {isLoading === null ? 'Submit' : 'Loading...'}
                        </button>
                             {isLoading === true ?
                                    (
                                        <div className="absolute inset-0 flex items-center justify-center" style={{ marginLeft: '140px' }}>
                                            <svg
                                                aria-hidden="true"
                                                className="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600"
                                                viewBox="0 0 100 101"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="currentColor"
                                                />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentFill"
                                                />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    )
                                    :
                                    <></>

                                }
                               
                        <ToastContainer/>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default CreateContact;