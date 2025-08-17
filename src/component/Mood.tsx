import RecommendedDisplay from "./RecommendedDisplay";

function Mood(props: { selectedMood: any; }){
    const moodRecommendation = [
        {
            img: "",
            title: "",
        },
        {
            img: "",
            title: "",
        },
        {
            img: "",
            title: "",
        },
        {
            img: "",
            title: "",
        },
    ]

    return(
        <>
            {props.selectedMood == "Angry" && (
                <p className="text-White bg-gradient-to-b from-Angry_up to-Black min-h-[531px]">
                    <div className="grid grid-cols-3">
                        <div className="pt-8 pl-8">
                            <h1 className="text-[36px] font-bold">You are feeling</h1> 
                            <p className="text-[64px] font-bold">Angry</p>    
                        </div>    
                        <div className="pt-8">
                            <p>Music you might like</p>
                            {moodRecommendation.map((item) => 
                                <RecommendedDisplay {...item} />
                            )}
                            <img className="size-[220px] bg-White text-Black"src="" alt="image_music" />
                        </div>
                        <div className="pt-8 justify-items-end pr-8">
                            <p>Show all</p>
                        </div>
                    </div>
                    
                </p>
            )}
            {props.selectedMood== "Happy" && (
                <p className="text-White bg-gradient-to-b from-Happy_up to-Black min-h-[531px]">
                    <div className="pt-8 pl-8">
                        <h1 className="text-[36px] font-bold">You are feeling</h1> 
                        <p className="text-[64px] font-bold">Happy</p>    
                    </div>
                </p>
            )}
            {props.selectedMood == "Sad" && (
                <p className="text-White bg-gradient-to-b from-Sad_up to-Black min-h-[531px]">
                    <div className="pt-8 pl-8">
                        <h1 className="text-[36px] font-bold">You are feeling</h1> 
                        <p className="text-[64px] font-bold">Sad</p>    
                    </div>
                </p>
            )}
        </>
    )
}

export default Mood;