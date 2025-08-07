import Navbar from "../component/Navbar";
import landingPageBackground from "../assets/landingPageBackground.svg";
import MoodiFYLogo from "../assets/MoodiFY_Logo.svg"
import { useNavigate } from "react-router";

function LandingPage() {
    const navigate = useNavigate();

    const startedNavigation = () => {
        navigate("/login")
    }

    return(
        <>
            <Navbar currentPage={"Landing"}/>
            <div>
                <div className="flex justify-center relative min-h-screen animate-fadeUp overflow-y-hidden">
                    <div className="flex flex-col items-center justify-center align-center">
                        <img src={MoodiFYLogo} className="size-[104px] z-10 mb-8" alt="" />
                        <p className="text-[84px] text-Semi_bright_red z-10 font-bold">Welcome to MoodiFY</p>    
                        <p className="text-[36px] text-Very_bright_red z-10 font-bold">Music That Matches your Mood</p>
                        <button onClick={startedNavigation} className="cursor-pointer text-[36px] text-Bright_red font-bold z-20 bg-Dark_red px-18 py-6 mt-12 border border-Red border-3 rounded-[24px] hover:shadow-[0px_0px_34.7px_rgba(242,97,63,1)] hover:transition-all ease-in-out duration-200">
                            Get Started
                        </button>
                    </div>
                    
                    <img src={landingPageBackground} className="fixed z-0 opacity-50" alt="" />
                </div>
            </div>
        </>
    )
}

export default LandingPage;