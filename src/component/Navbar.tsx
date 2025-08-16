import { useNavigate } from "react-router";
import type { NavbarType } from "../types/NavbarType";
import profilePlaceholder from "../assets/profile_placeholder.svg"
import profilePlaceholder2 from "../assets/profile_placeholder2.svg"
import { useState } from "react";

const Navbar = (props: NavbarType) => {
    const navigate = useNavigate();

    const [isDropdownOpen, setDropdownOpen] = useState(true);
    const hideAll = ["Landing", "Login", "Register", "Selection"];
    const shouldHideAll = hideAll.includes(props.currentPage);

    const links = [
        {
            text: "Home",
            isActive: props.currentPage == "Home",
            link: "/home",
        },
        {
            text: "About Us",
            isActive: props.currentPage == "About Us",
            link: "/aboutUs",
        },
        {
            text: "History",
            isActive: props.currentPage == "History",
            link: "/history",
        },
    ];

    const toggleDropdown = () => {
        setDropdownOpen((prev) => (!prev));
    };

    const userProfile = () => {
        navigate("/userProfile");
    }

    return (
    <>
        <div className="bg-Black flex flex-row items-center place-content-between border-Dark_red border-b fixed min-w-screen z-100">
            <div>
                <h1 className="text-[42px] font-bold pl-[16px] text-Semi_bright_red">
                    MoodiFY
                </h1>
            </div>

            <nav>
                {!shouldHideAll && (
                    <ul className="flex flex-row text-White items-center">
                        {links.map((item, index) => {
                            return (
                                <li key={index}>
                                    <a className = {`cursor-pointer mx-6 ${item.isActive ? "text-[24px] text-Bright_red" : "text-[24px] text-White hover:text-Bright_red transition-all duration-400"}`} 
                                        onClick = {() => navigate(item.link)}
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            );
                        })}
                        <div className="flex flex-col">
                            <button className="flex flex-row items-center pl-2 cursor-pointer" onClick={toggleDropdown}>
                                <img src={isDropdownOpen ? profilePlaceholder : profilePlaceholder2} className="size-10" alt="" />
                                <p className={`pl-2 pr-4 ${isDropdownOpen ? "text-White hover:text-Bright_red" : "text-Bright_red"}`}>Username</p>    
                            </button>
                            
                            
                        </div>
                    </ul>   
                )}         
            </nav>
        </div>
        <div className="pt-14 text-White z-2 fixed flex justify-end min-w-screen">
            {!isDropdownOpen && (
                <div className="bg-Lighter_black_2 text-center flex flex-col mt-2 justify-center">
                    <button className="py-1 border-Lighter_black_2 border-b-1 border-3 bg-Black hover:bg-Bright_red cursor-pointer px-6" onClick={userProfile}>User Profile</button>
                    <button className="py-1 border-Lighter_black_2 border-3 bg-Black hover:bg-Bright_red cursor-pointer">Logout</button>
                </div>
            )}    
        </div>
        
    </>
    )
}

export default Navbar