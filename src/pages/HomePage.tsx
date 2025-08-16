import Mood from "../component/Mood";
import Navbar from "../component/Navbar"

function HomePage () {
    function tempRandomer(max: number) {
        return Math.floor(Math.random() * (max + 1));
    }

    const tempMood = [
        "Angry", 
        "Happy", 
        "Sad",
    ];

    const selectedMood = tempMood[tempRandomer(2)]

    return (
        <>
            <div>
                <Navbar currentPage={"Home"}/>    
            </div>
            <div className="pt-16 z-3">
                <Mood selectedMood={selectedMood} ></Mood>
            </div>
        </>
    )
}

export default HomePage