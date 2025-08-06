import { useNavigate } from "react-router";
import type { NavbarType } from "../types/NavbarType";

const Navbar = (props: NavbarType) => {
    const navigate = useNavigate();

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

    return (
    <>
        <div className="bg-Black flex flex-row items-center place-content-between border-Dark_red border-b">
            <div>
                <h1 className="text-[42px] font-bold pl-[16px] text-Semi_bright_red">
                    MoodiFY
                </h1>
            </div>

            <nav>
                {!shouldHideAll && (
                    <ul className="flex flex-row text-White">
                        {links.map((item, index) => {
                            return (
                                <li key={index} className="">
                                    <a onClick = {() =>  
                                        navigate(item.link)}
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>   
                )}    
            </nav>
            
        </div>
    </>
    )
}

export default Navbar