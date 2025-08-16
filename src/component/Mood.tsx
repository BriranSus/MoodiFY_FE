function Mood(props: { selectedMood: any; }){
    return(
        <>
            {props.selectedMood == "Angry" && (
                <p className="text-White bg-Angry min-h-[531px]">
                    Anger
                </p>
            )}
            {props.selectedMood== "Happy" && (
                <p className="text-White bg-Happy  min-h-[531px]">
                    Happy
                </p>
            )}
            {props.selectedMood == "Sad" && (
                <p className="text-White bg-Sad min-h-[531px]">
                    Sad
                </p>
            )}
        </>
    )
}

export default Mood;