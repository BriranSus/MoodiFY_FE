import { useNavigate } from "react-router"

function PrevButton (props: { navigateTo: any }) {
    const navigate = useNavigate()

    const handleSelect = () => {
        navigate(props.navigateTo)
    }
    
    return (
        <>
            <div className="flex justify-start">
                <button onClick={handleSelect} className="cursor-pointer text-White text-[24px] min-w-[152px] min-h-[54px] bg-Red rounded-[12px] ml-16 mb-16 hover:bg-Angry transition-all duration-300">← Prev</button>
            </div>
        </>
    )
}

export default PrevButton