import { useNavigate } from "react-router";
import Navbar from "../component/Navbar"
import { useState } from "react";
import TextBox from "../component/TextBox";

function RegisterPage() {

    const textStyle = "text-[20px] text-White font-medium pt-6";;
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const navLogin = async () => {
        navigate("/login");
    }

    return (
        <>
            <Navbar currentPage={"Register"}/>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="bg-Light_black min-h-[600px] min-w-[454px] rounded-[12px] flex flex-col items-center">
                        <p className="mt-8 font-bold text-Bright_red text-[28px]">Register</p>
                        <div className="mt-6 flex flex-col justify-left min-w-[454px] pl-10">
                            <p className={textStyle}>Email</p>
                            <TextBox
                                placeholder="Enter your Email"
                                type="email"
                                id="email"
                                value ={email}
                                onChange = {(e) => setEmail(e.target.value)}
                            />
                            <p className={textStyle}>Password</p>
                            <TextBox
                                placeholder="Enter your Password"
                                type="password"
                                id="password"
                                value ={password}
                                onChange = {(e) => setPassword(e.target.value)}
                            />
                            <p className={textStyle}> Confirm Password</p>
                            <TextBox
                                placeholder="Confirm your Password"
                                type="password"
                                id="confirmPassword"
                                value ={confirmPassword}
                                onChange = {(e) => setConfirmPassword(e.target.value)}
                            />

                            <button className="cursor-pointer bg-Black text-White max-w-[370px] text-[24px] mt-12 min-h-[57px] rounded-[8px] hover:bg-Red font-semi_bold">
                                Create Account
                            </button>
                            <div className="flex justify-center mt-2 max-w-[370px]">
                                <p className="text-White font-[300]">Already have an account?
                                    <a className="cursor-pointer text-Bright_red font-[300] ml-1 hover:underline" onClick={navLogin}>Login</a>    
                                </p>
                            </div>    
                        </div>
                    </div>
                </div>    
        </>
    )
}

export default RegisterPage