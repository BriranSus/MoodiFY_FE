function Navbar(){
    return (
        <>
            <div className="bg-Black flex flex-row items-center place-content-between border-Dark_red border-b">
                <div>
                    <h1 className="text-[42px] font-bold pl-[16px] text-Semi_bright_red">
                        MoodiFY
                    </h1>
                </div>
                <div className="text-White pr-[16px]">
                    <a href="">Home</a>
                    <a href="">About Us</a>
                    <a href="">History</a>

                </div>
            </div>
        </>
    )
}

export default Navbar