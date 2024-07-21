import React, { useState, useEffect } from 'react';
import { getContactDetails } from '../utils/emmitters/rxjsServices';
import { debounceTime } from 'rxjs';
import { updateSinglelContacts } from '../utils/endpoints/contactsEndpoints';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditContact = ({ isOpen, onClose}:any) => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: ''
    });

    const [oldPhoneNum, setOldPhonNum] = useState<any>("");


    useEffect(() => {
        let getEmmittedProfile = getContactDetails.pipe(debounceTime(200)).subscribe({
            next: (data: any) => {
                setFormData({
                    firstName: data?.firstName,
                    lastName: data?.lastName,
                    phoneNumber: data?.phoneNumber
                });
                setOldPhonNum(data?.phoneNumber);
            }
        })
    },[]);

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log("formData>>", formData); 
        updateSinglelContacts(formData, oldPhoneNum).then((res:any) => {
            console.log("res>>", res);
            toast.success("data has been updated succesfully!", {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setTimeout(() => onClose(), 2000);
        }).catch((err:any) => {
            console.error("err>>", err);
        })
       // Close the modal after form submission
    };

    if (!isOpen) return null;

    return (
      <>

        <div className={`fixed inset-0 z-40 bg-black opacity-50 transition-opacity ${isOpen ? 'visible' : 'invisible'}`}></div>
          <div className={`fixed inset-0 flex items-center justify-center z-50 overflow-x-auto overflow-y-auto outline-none focus:outline-none transition-opacity ${isOpen ? 'visible' : 'invisible'}`}>
                <div className="relative w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-lg opacity-100 transform scale-100 transition-opacity">
                    <div className="text-xl font-semibold mb-4">Modal Form</div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your First Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your Last Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                placeholder="Enter your Phone Number"
                                required
                            />
                        </div>
                        <div className="mt-6">
                            <button
                            onClick={handleSubmit}
                                type="submit"
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-[#101323] rounded-md hover:bg-[#101323] focus:outline-none focus:bg-[#101323]"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    <button
                        className="absolute top-0 right-0 mt-1 mr-1 text-gray-500 hover:text-gray-600 focus:outline-none"
                        onClick={onClose}
                    >
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3.293 4.293a1 1 0 0 1 1.414 0L10 8.586l5.293-5.293a1 1 0 1 1 1.414 1.414L11.414 10l5.293 5.293a1 1 0 1 1-1.414 1.414L10 11.414l-5.293 5.293a1 1 0 1 1-1.414-1.414L8.586 10 3.293 4.707a1 1 0 0 1 0-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <ToastContainer />
                </div>
            </div>
      </>
    );
};

export default EditContact;
