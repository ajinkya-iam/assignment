import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { MdMusicNote } from "react-icons/md";

const CompanyProfile = () => {

    const members = [
        { role: "CEO #1", name: "Captain Hook", image: require("../images/profile.png") },
        { role: "CEO #3", name: "Captain Hook", image: require("../images/profile.png") },
        { role: "CTO #2", name: "Captain Hook", image: require("../images/profile.png") },
        { role: "CMO #4", name: "Captain Hook", image: require("../images/profile.png") },
        { role: "CEO ", name: "Captain Hook", image: require("../images/profile.png") },
        { role: "CEO ", name: "Captain Hook", image: require("../images/profile.png") },
        { role: "HR", name: "Captain Hook", image: require("../images/profile.png") },
        { role: "Support", name: "Captain Hook", image: require("../images/profile.png") },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold">Company Profile</h1>
            <div className="flex gap-6">
                <div className="flex w-52 text-sm h-9 justify-between text-black font-semibold rounded-xl mt-4 gap-6 bg-white p-3 items-center">
                    <p>#1232</p>
                    <p>Zestminds</p>
                </div>
                <div className="flex w-24 h-9 text-sm justify-center text-black font-semibold rounded-xl mt-4 gap-6 bg-white p-3 items-center">
                    EDIT
                </div>
                <div className="flex w-24 h-9 text-sm justify-center text-black font-semibold rounded-xl mt-4 gap-6 bg-white p-3 items-center">
                    DELETE
                </div>
            </div>

            <div className="flex flex-col mt-6 bg-white rounded-md p-3">
                <h1 className="text-xl font-medium">Company Informations</h1>
                <div className="flex gap-4">
                    <div className="flex flex-col gap-4 w-[60%] mt-4 ">
                        <div className="content-center bg-gray-100 rounded-2xl p-3">
                            <div className="grid grid-cols-3 gap-4 items-center">
                                {/* First Row */}
                                <div>
                                    <p className="font-semibold text-sm text-black">Company Name</p>
                                    <p className="text-sm">Peter Pan</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-black">Founded</p>
                                    <p className="text-sm">2017</p>
                                </div>
                                {/* Second Row */}
                                <div>
                                    <p className="font-semibold text-sm text-black">Company Size</p>
                                    <p className="text-sm">2 - 10 employees</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="font-semibold text-sm text-black">Company Description</p>
                                    <p className="text-sm">Peter plan is leading indian multinational provider of outsourcing,offshore software development , web & mobile app developement
                                        SEO and internet marketing services </p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-black">Company Revenue</p>
                                    <p className="text-sm">$100k - $2M</p>
                                </div>

                                {/* third Row */}
                                <div>
                                    <p className="font-semibold text-sm text-black">eMail #1</p>
                                    <p className="text-sm">info@peterpan.com</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-black">eMail #2</p>
                                    <p className="text-sm">contact@peterpan.com</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-black">eMail #3</p>
                                    <p className="text-sm">request@peterpan.com</p>
                                </div>

                                {/* fourth Row */}
                                <div>
                                    <p className="font-semibold text-sm text-black">Phone #1</p>
                                    <p className="text-sm">123123123123</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-black">Phone #2</p>
                                    <p className="text-sm">123123123123123123</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-black">Phone #3</p>
                                    <p className="text-sm">231231231231231231</p>
                                </div>

                                {/* fifth Row */}
                                <div className="col-span-2">
                                    <p className="font-semibold text-sm text-black">Address</p>
                                    <p className="text-sm">E-45 Cabin 17 Phase 8 Industrial Area,Mohali,Punjab 160071,India</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-sm text-black">Website</p>
                                    <p className="text-sm">peterpan.com</p>
                                </div>

                            </div>
                        </div>

                        <div className="bg-gray-100 rounded-2xl p-3">
                            <div className="flex justify-evenly">
                                <FaFacebook size={28} />
                                <FaXTwitter size={28} />
                                <FaInstagram size={28} />
                                <FaLinkedin size={28} />
                                <FaGoogle size={28} />
                                <FaYoutube size={28} />
                                <MdMusicNote size={28} />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-[40%] gap-4 mt-4">
                        <div className="bg-gray-100 rounded-2xl p-3">
                            <div className="grid grid-cols-2 gap-4">
                                {members.map(member => (
                                    <div className="flex">
                                        <img className="w-12 h-12 rounded-full" src={member.image} />
                                        <div className="flex flex-col">
                                            <p className="font-semibold text-sm text-black">{member.role}</p>
                                            <p className="text-sm">{member.name}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className=" bg-gray-100  rounded-2xl p-3">
                            <p className="font-semibold text-sm text-black">Similar Companies</p>
                            <p className="text-sm"><span className="font-semibold text-sm text-black">WESPEAKCODE</span>| Software Developement Agency</p>
                            <p className="text-sm"><span className="font-semibold text-sm text-black">LUCENT INNOVATION</span>| Software Developement </p>
                            <p className="text-sm"><span className="font-semibold text-sm text-black">Microsoft</span>| Software Company</p>
                            <p className="text-sm"><span className="font-semibold text-sm text-black">Google</span>| Software Company </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CompanyProfile;
