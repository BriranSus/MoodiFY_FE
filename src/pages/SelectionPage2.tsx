import { LanguageButton } from "../component/LanguageButton";
import Navbar from "../component/Navbar";
import NextButton from "../component/NextButton";
import UK from "../assets/UK.svg";
import Japan from "../assets/Japan.svg";
import Indonesia from "../assets/Indonesia.svg";
import Korean from "../assets/Korean.svg";
import Spanish from "../assets/Spanish.svg";

function SelectionPage2() {
    const languages = [
        {
            img:UK,
            title:"English"
        },
        {
            img:Japan,
            title:"Japanese"
        },
        {
            img:Indonesia,
            title:"Indonesian"
        },
        {
            img:Korean,
            title:"Korean"
        },
        {
            img:Spanish,
            title:"Spanish"
        },
    ]

    return (
        <>
            <Navbar currentPage={"Selection"}/>
            <div className="overflow-x-hidden">
                <Navbar currentPage={"Selection"}/>
                <div className="flex flex-col justify-center min-h-screen min-w-screen items-center pt-36">
                    <h1 className="text-Semi_bright_red font-bold text-[36px]">Find the Perfect Song Based on Your Mood!</h1>   
                    <div className="flex text-[32px] mt-28">
                        <h2 className="text-White font-[300]">Which</h2> 
                        <p className="text-Bright_red font-medium pl-2 pr-2">Languages</p>    
                        <h2 className="text-White font-[300]">do you prefer for your songs?</h2> 
                    </div>
                    <div className="mt-16 grid grid-cols-3 gap-16 mb-16">
                        {languages.map((item) => (
                            <LanguageButton {...item} />
                        ))}  
                    </div>
                    
                </div>
                <div>
                    <NextButton navigateTo="/selection_2"/>     
                </div>
                
            </div>
        </>
    )
}

export default SelectionPage2