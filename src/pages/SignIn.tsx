import React, { useState, useEffect } from "react";
import { Images } from "../utils/Images";
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';


export function SignIn() {

    const navigate:any = useNavigate();
    return (
        <React.Fragment>
            {/* <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${Images?.loginImg})` }}
        >
            <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96 mx-auto text-center">
                <h1 className="text-3xl font-semibold mb-4">Hux Assessment Application</h1>
                <p className="text-gray-600 mb-6">
                    The Hux Assessment Application is designed to streamline your record-keeping process. It allows you to efficiently manage and store contacts, including their names and phone numbers.
                </p>
                <p className="text-gray-600 mb-6">
                    This application provides a user-friendly interface to add, update, and delete contacts as needed. It prioritizes simplicity and effectiveness in managing your contact information.
                </p>
                <p className="text-gray-600 mb-6">
                    Whether you're an individual managing personal contacts or a business maintaining a client database, the Hux Assessment Application ensures secure and organized record-keeping.
                </p>
                <p className="text-gray-600 mb-6">
                    Get started today and experience the ease of managing your contacts with our intuitive application.
                </p>

                    <button className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                        Login to Hux Assessment
                    </button>
            </div>
        </div> */}
            <div className="min-h-screen bg-gray-100 flex items-center justify-center"   style={{ backgroundImage: `url(${Images?.loginImg})` }}>
                <div className="max-w-4xl mx-auto p-8 bg-white shadow-md rounded-lg">
                    <h1 className="text-3xl font-bold mb-4">Welcome to Hux-assessment</h1>
                    <p className="text-gray-600 mb-8">Manage your contacts with ease!</p>
                    <p className="text-gray-600 mb-6">
                    The Hux Assessment Application is designed to streamline your record-keeping process. It allows you to efficiently manage and store contacts, including their names and phone numbers.
                </p>
                <p className="text-gray-600 mb-6">
                    This application provides a user-friendly interface to add, update, and delete contacts as needed. It prioritizes simplicity and effectiveness in managing your contact information.
                </p>
                <p className="text-gray-600 mb-6">
                    Whether you're an individual managing personal contacts or a business maintaining a client database, the Hux Assessment Application ensures secure and organized record-keeping.
                </p>
                <p className="text-gray-600 mb-6">
                    Get started today and experience the ease of managing your contacts with our intuitive application.
                </p>
                    <button onClick={() => navigate('/login')} className="bg-[#101323] hover:bg-[#101323] text-white font-bold py-2 px-4 rounded">
                        Login
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SignIn;