import checkMark from "../assets/checkmark.svg"

interface propsType {
    title: string,
    onClick: any,
    selected: boolean
}

function CheckButton ({title, selected, ...props}: propsType) {
    return (
        <>
            <div {...props} className="flex flex-row items-center gap-3 ">
                <div className="min-w-[52px] min-h-[52px] bg-Angry rounded-[10px]">
                    {selected && (
                        <img src={checkMark} className="size-[48px]" alt="" />
                    )}
                </div>
                <p className="text-White font-[300] text-[24px]">{title}</p>    
            </div>
        </>
    )
}

export default CheckButton;