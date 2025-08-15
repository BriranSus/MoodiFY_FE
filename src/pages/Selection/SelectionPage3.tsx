import CheckButton from "../../component/CheckButton"
import Navbar from "../../component/Navbar"
import NextButton from "../../component/NextButton"
import PrevButton from "../../component/PrevButton"

function SelectionPage3() {
    const genres = [
        "Pop",
        "Hip-Hop",
        "EDM",
        "Rock",
        "RNB",
        "Latin",
        "Jazz",
        "Folk",
        "Reggae",
        "Blue",
        "Indie",
        "Lo-Fi",
        "Country",
        "Classical",
        "Metal"
    ]

    return(
        <>
            <Navbar currentPage={"Selection"}/>
            <div className="overflow-x-hidden">
                <div className="flex flex-col justify-center min-h-screen min-w-screen items-center pt-36">
                    <h1 className="text-Semi_bright_red font-bold text-[36px]">Find the Perfect Song Based on Your Mood!</h1>   
                    <div className="flex text-[32px] mt-28">
                        <h2 className="text-White font-[300]">What's your favourite</h2> 
                        <p className="text-Bright_red font-medium pl-2 pr-2">Genre?</p>    
                    </div>
                    <div className="grid grid-cols-5 gap-12 mt-16 mb-32">
                        {genres.map((item) => (
                            <CheckButton title={item}/>
                        ))}    
                    </div>
                    
                </div>
                <div className="flex flex-row place-content-between">
                    <PrevButton navigateTo="/selection_2"/>
                    <NextButton title="Next ->" navigateTo="/selection_4"/>     
                </div>
            </div>
        </>
    )
}

export default SelectionPage3