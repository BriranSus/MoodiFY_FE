import { useNavigate, type To } from "react-router"

function NextButton (props: { navigateTo: To }) {
    const navigate = useNavigate()

    const handleSelect = () => {
        navigate(props.navigateTo)
    }

    return (
        <>
            <div className="flex justify-end">
                <button onClick={handleSelect} className=" cursor-pointer text-White text-[24px] min-w-[152px] min-h-[54px] bg-Red rounded-[12px] mr-16 mb-16 hover:bg-Angry transition-all duration-300">Next →</button>    
            </div>
            
        </>
    )
};

export default NextButton