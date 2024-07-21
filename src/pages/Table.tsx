import React, { useState, useEffect } from "react";
import { Images } from "../utils/Images";
import Header from "../components/Header";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import EditContact from "./EditContact";
import ViewContact from "./ViewContact";
import { deleteContact, getAllContacts } from "../utils/endpoints/contactsEndpoints";
import { useNavigate } from "react-router-dom";
import { emmitContactDetails } from "../utils/emmitters/rxjsServices";

export const Table = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen_, setIsModalOpen_] = useState(false);
    const [contacts, setContacts] = useState<any>([]);
    const [profile, setProfile] = useState<any>({});
    const [contactData, setContactData] = useState<any>({});
    const navigate: any = useNavigate();

    // const toggleDropdown = () => {
    //     setIsDropdownOpen(!isDropdownOpen);
    // };

    const editUser = (profile: any) => {
        setTimeout(() => setIsModalOpen(true), 300);
        setContactData(profile);
        emmitContactDetails(profile);
    };

    const viewProfile = (profile: any) => {
        console.log("profile>>", profile);
        setTimeout(() => setIsModalOpen_(true), 300);
        setProfile(profile);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const closeModal_ = () => {
        setIsModalOpen_(false);
    };

    const deleteContactDetail = (item: any) => {
        // console.log("data>>", item);
        deleteContact(Number(item?.id)).then((res: any) => {
            // console.log("response>>", res);
            window?.location?.reload();
        }).catch((err: any) => {
            console.error("err>>", err);
        })
    }

    useEffect(() => {
        getAllContacts(10, 1).then((response: any) => {
            //  console.log("response>>", response);
            setContacts(response?.contacts);
        }).catch((err: any) => {
            console.error("err>>", err);
        })
    }, [])


    return (
        <>
            <Header details={"View All Contacts"} />
            <br />
            <div className="relative overflow-x-auto shadow-md rounded-lg">
                <div className="flex items-center ml-2 justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                    <button
                        onClick={() => navigate("/new-contact")}
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-white bg-[#101323] rounded-md hover:bg-[#101323] focus:outline-none focus:bg-[#101323]"
                    >
                        Create New Contact
                    </button>

                    <form className="max-w-sm mr-2">
                        <label htmlFor="email-address-icon" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input type="text" id="email-address-icon" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" />
                        </div>
                    </form>
                </div>

                {
                    contacts?.length === 0 ?
                        <>
                            <div className="flex items-center justify-center">
                                <div className="mx-auto">
                                    <img src={Images?.noData} alt="No Data" className="block" />
                                </div>
                            </div>

                        </>
                        :
                        contacts?.length > 0 ?

                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr>
                                        <th scope="col" className="p-4">
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Phone Number
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Status
                                        </th>
                                        <th scope="col" className="px-6 py-3">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        contacts?.map((item: any, index: number) => (
                                            <>
                                                <tr key={index + 1} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                    <td className="w-4 p-4">
                                                        <div className="flex items-center">
                                                            <input
                                                                id="checkbox-table-search-1"
                                                                type="checkbox"
                                                                className="w-4 h-4 text-[#101323] bg-gray-100 border-gray-300 rounded focus:ring-[#101323] dark:focus:ring-[#101323] dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                            />
                                                            <label
                                                                htmlFor="checkbox-table-search-1"
                                                                className="sr-only bg-[#101323]"
                                                            >
                                                                checkbox
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <th
                                                        scope="row"
                                                        className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                                                    >
                                                        <img
                                                            className="w-10 h-10 rounded-full"
                                                            src={Images?.avatar}
                                                            alt="Jese image"
                                                        />
                                                        <div className="ps-3">
                                                            <div className="text-base font-semibold">
                                                                {item?.firstName} {item?.lastName}
                                                            </div>
                                                            <div className="font-normal text-gray-500">
                                                                {item?.firstName}.{item?.lastName}@hux.com
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="px-6 py-4">{item?.phoneNumber}</td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center">
                                                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>{' '}
                                                            Active
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4">
                                                        <div className="flex items-center space-x-8 cursor-pointer">
                                                            <span onClick={() => viewProfile(item)}>
                                                                <FaChalkboardUser style={{ fontSize: '2em' }} />
                                                            </span>
                                                            <span onClick={() => editUser(item)}>
                                                                <FaUserEdit style={{ fontSize: '2em' }} />
                                                            </span>
                                                            <span onClick={() => deleteContactDetail(item)}>
                                                                <RiDeleteBin6Line style={{ fontSize: '2em' }} />
                                                            </span>
                                                        </div>
                                                    </td>

                                                </tr>
                                            </>
                                        ))
                                    }

                                    {/* Additional rows */}
                                </tbody>
                            </table>

                            :
                            <></>
                }




                <EditContact isOpen={isModalOpen} onClose={closeModal} />
                <ViewContact isOpen={isModalOpen_} onClose={closeModal_} profile={profile} />
            </div>

        </>
    )
}

export default Table;