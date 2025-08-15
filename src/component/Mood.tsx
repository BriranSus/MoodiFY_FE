function Mood(props: { selectedMood: any; }){
    return(
        <>
            {props.selectedMood == "Angry" && (
                <p className="text-White">
                    Anger
                </p>
            )}
            {props.selectedMood== "Happy" && (
                <p className="text-White">
                    Happy
                </p>
            )}
            {props.selectedMood == "Sad" && (
                <p className="text-White">
                    Sad
                </p>
            )}
        </>
    )
}

export default Mood;