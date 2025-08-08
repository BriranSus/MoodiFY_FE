import Navbar from "../component/Navbar";

function LoginPage () {
    return (
        <>
            <Navbar currentPage={"Login"}/>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-Light_black min-h-[517px] min-w-[454px] rounded-[12px] flex flex-col items-center">
                     <p className="mt-8 font-bold text-Bright_red text-[28px]">Login</p>
                     <div className="mt-12 flex flex-col justify-left min-w-[454px] pl-10">
                        <p className="text-[20px] text-White font-medium">Email</p>
                        
                     </div>
                </div>
            </div>
        </>
    )
};

export default LoginPage