import { LanguageButton } from "../../component/LanguageButton";
import Navbar from "../../component/Navbar";
import NextButton from "../../component/NextButton";
import UK from "../../assets/UK.svg";
import Japan from "../../assets/Japan.svg";
import Indonesia from "../../assets/Indonesia.svg";
import Korean from "../../assets/Korean.svg";
import Spanish from "../../assets/Spanish.svg";
import checkMark from "../../assets/checkmark.svg"
import PrevButton from "../../component/PrevButton";

function SelectionPage2() {

    const languages = [
        {
            img:UK,
            title:"English",
            checkMark:checkMark
        },
        {
            img:Japan,
            title:"Japanese",
            checkMark:checkMark
        },
        {
            img:Indonesia,
            title:"Indonesian",
            checkMark:checkMark
        },
    ]

    const secondRowLanguages = [
        {
            img:Korean,
            title:"Korean",
            checkMark:checkMark
        },
        {
            img:Spanish,
            title:"Spanish",
            checkMark:checkMark
        }
    ]

    return (
        <>
            <Navbar currentPage={"Selection"}/>
            <div className="overflow-x-hidden">
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
                    <div className="grid grid-cols-2 gap-16 mb-32">
                        {secondRowLanguages.map((item) => (
                            <LanguageButton {...item} />
                        ))}
                    </div>
                         
                    
                </div>
                <div className="flex flex-row place-content-between">
                    <PrevButton navigateTo="/selection_1"/>
                    <NextButton title="Next ->" navigateTo="/selection_3"/>     
                </div>
                
            </div>
        </>
    )
}

export default SelectionPage2