import Navbar from "../component/Navbar"
import NextButton from "../component/NextButton"
import PrevButton from "../component/PrevButton"

function SelectionPage() {
    return (
        <>  
            <div className="overflow-x-hidden">
                <Navbar currentPage={"Selection"}/>
                <div className="flex flex-col justify-center min-h-screen min-w-screen items-center pt-36">
                    <h1 className="text-Semi_bright_red font-bold text-[36px]">Find the Perfect Song Based on Your Mood!</h1>   
                    <div className="flex text-[32px] mt-28">
                        <h2 className="text-White font-[300]">Describe your</h2> 
                        <p className="text-Bright_red font-medium pl-2">Mood!</p>    
                    </div>
                    <input 
                        type="range"
                        min="0"
                        max="100"    
                        className="size-120"
                    />
                </div>
                <div className="flex flex-row place-content-between">
                    <PrevButton navigateTo="/selection_2"/>
                    <NextButton navigateTo="/selection_2"/>     
                </div>
                   
            </div>
            
                       
        </>
    )
}

export default SelectionPage