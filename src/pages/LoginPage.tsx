import InputEmail from "../component/inputEmail";
import InputPassword from "../component/InputPassword";
import Navbar from "../component/Navbar";

function LoginPage() {
    const textStyle = "text-[20px] text-White font-medium pt-6";

    return (
        <>
            <Navbar currentPage={"Login"}/>
            <div className="flex justify-center items-center min-h-screen">
                <div className="bg-Light_black min-h-[517px] min-w-[454px] rounded-[12px] flex flex-col items-center">
                     <p className="mt-8 font-bold text-Bright_red text-[28px]">Login</p>
                     <div className="mt-6 flex flex-col justify-left min-w-[454px] pl-10">
                        <p className={textStyle}>Email</p>
                        <InputEmail/>
                        <p className={textStyle}>Password</p>
                        <InputPassword/>
                     </div>
                </div>
            </div>
        </>
    )
};

export default LoginPage