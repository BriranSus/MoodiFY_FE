export const LanguageButton = (props: { img: string | undefined; title: string }) => {
    return (
        <>
            <button className="bg-Grey_white flex flex-row min-w-[310px] min-h-[97px] items-center rounded-[16px]">
                <img className="size-[64px] ml-4" src={props.img} alt="" />
                <div className="flex flex-row justify-center min-w-[230px]">
                    <p className="text-Black font-bold text-[24px]">{props.title}</p>    
                </div>
                
            </button>
        </>
    )
}

