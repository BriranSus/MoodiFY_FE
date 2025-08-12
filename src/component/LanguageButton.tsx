import { useState } from "react";

export const LanguageButton = (props: { img: string | undefined; title: string; checkMark: string | undefined}) => {

    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        setSelected(!selected)
    }
    
    return (
        <>
            <button onClick={handleClick} className={`${selected ? "bg-Red" : "bg-Grey_white"} cursor-pointer flex flex-row min-w-[310px] min-h-[97px] items-center rounded-[16px]`}>
                <img className="size-[64px] ml-4" src={props.img} alt="" />
                <div className="flex flex-row justify-center min-w-[180px]">
                    <p className="text-Black font-bold text-[24px]">{props.title}</p>    
                </div>
                {selected && (<img className="size-[36px]" src={props.checkMark} alt="" />)}
            </button>
        </>
    )
}

