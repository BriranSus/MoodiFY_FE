import Navbar from "../../component/Navbar";
import NextButton from "../../component/NextButton";
import PrevButton from "../../component/PrevButton";

function SelectionPage4() {
    return (
        <>
            <Navbar currentPage={"Selection"}/>
            <div className="overflow-x-hidden">
                <div className="flex flex-col justify-center min-h-screen min-w-screen items-center pt-36">
                    <h1 className="text-Semi_bright_red font-bold text-[36px]">Find the Perfect Song Based on Your Mood!</h1>   
                    <div className="flex text-[32px] mt-28">
                        <h2 className="text-White font-[300]">Express your</h2> 
                        <p className="text-Bright_red font-medium pl-2 pr-2">Feelings</p>
                        <h2 className="text-White font-[300]">in words!</h2>     
                    </div>
                    <textarea 
                        className="bg-Grey_white min-w-[800px] min-h-[400px] p-3 border-grey rounded-md text-justify mb-32 mt-4 resize-none"
                        >
                    </textarea> 
                    
                </div>
                <div className="flex flex-row place-content-between">
                    <PrevButton navigateTo="/selection_3"/>
                    <NextButton title="Submit ->" navigateTo="/home"/>     
                </div>
            </div>
        </>
    )
}

export default SelectionPage4