interface propsType {
    title: string
}

function CheckButton ({title, ...props} : propsType) {
    return (
        <>
            <div {...props} className="flex flex-row items-center gap-3 ">
                <div className="min-w-[52px] min-h-[52px] bg-Angry rounded-[10px]">
                </div>
                <p className="text-White font-[300] text-[24px]">{title}</p>    
            </div>
        </>
    )
}

export default CheckButton;