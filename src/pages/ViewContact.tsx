import React, { useState } from 'react';

const ViewContact = ({ isOpen, onClose, profile }:any) => {
    const [formData, setFormData] = useState({
        // Initialize your form fields here
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e:any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData); // Example: Log form data to console
        onClose(); // Close the modal after form submission
    };

    if (!isOpen) return null;

    return (
      <>
        <div className={`fixed inset-0 z-40 bg-black opacity-50 transition-opacity ${isOpen ? 'visible' : 'invisible'}`}></div>
          <div className={`fixed inset-0 flex items-center justify-center z-50 overflow-x-auto overflow-y-auto outline-none focus:outline-none transition-opacity ${isOpen ? 'visible' : 'invisible'}`}>
                <div className="relative w-full max-w-md p-6 mx-auto bg-white rounded-md shadow-lg opacity-100 transform scale-100 transition-opacity">
                    <div className="text-xl font-semibold mb-4">View Contact</div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                          <span>{profile?.firstName} {profile?.lastName}</span>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Phone Number</label>
                          <span>{profile?.phoneNumber}</span>
                        </div>
                        <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Status</label>
                        <div className="flex items-center">
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{' '}
                                    Active
                                </div>
                        </div>
                        <div className="mt-6">
                            <button
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
                </div>
            </div>
      </>
    );
};

export default ViewContact;
