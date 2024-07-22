import React, { useState, useEffect } from "react";
import { Images } from "../utils/Images";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { signInUser } from "../utils/endpoints/authEndpoints";
import { useNavigate } from "react-router-dom";
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function LoginPage() {

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [password, setPassword] = useState<string>("");
    const [btnBgColor, setBtnBgColor] = useState<string>("bg-[#CDD5DF]");
    const [state, setState] = useState({ email: '' });
    const [isLoading, setLoading] = useState<any>(null);
    const navigate: any = useNavigate();


    const { email } = state;
    function handleChange(e: any) {
        setState({ ...state, email: e.target.value })
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handelSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            let payload = { email: email, password: password };
            const response = await signInUser(payload);
            // console.log('Logged in successfully>>>', response);
            localStorage.setItem('userDetails', response?.access_token);
            toast.success("You're logged in successfully!", {
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
            setTimeout(() => navigate("/table"), 1800);
            return response;
        } catch (error) {
            console.error('Error logging in:', error);
            setLoading(false);
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
            throw error;
        }
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
                    <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
                    <form autoComplete="off" className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email"
                                value={email} onChange={handleChange} onKeyDown={handleKeyPress}
                                required
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="password" className="block mb-1">
                                Password
                            </label>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                autoComplete="nope"
                                autoSave="off"
                                id="password"
                                name="password"
                                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e?.target?.value);
                                    e?.target?.value?.length === 0 ? setBtnBgColor("bg-[#CDD5DF]") : e?.target?.value?.length > 0 ? setBtnBgColor("bg-[#101323]") : setBtnBgColor("bg-[#CDD5DF]")
                                }
                                }
                                onKeyDown={handleKeyPress}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? (
                                    <div>
                                        <FaRegEye style={{ fontSize: '2em', marginTop: '22px' }} />
                                    </div>
                                ) : (
                                    <div>
                                        <FaRegEyeSlash style={{ fontSize: '2em', marginTop: '22px' }} />
                                    </div>
                                )}
                            </button>
                        </div>
                        <br />

                        <div className="flex items-center justify-center">
                            <button
                                onClick={handelSubmit}
                                type="submit"
                                className={`relative flex items-center justify-center w-full ${btnBgColor} text-white py-2 px-4 rounded-lg hover:${btnBgColor} transition-colors duration-300`}
                                disabled={isLoading} // Disable button when loading
                            >
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
                                {isLoading === null ? 'Login' : 'Logging in...'}
                            </button>
                            <ToastContainer />
                        </div>

                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LoginPage;