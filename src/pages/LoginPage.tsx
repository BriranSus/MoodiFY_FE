import { useEffect, useState } from "react";
import TextBox from "../component/InputBox";
import Navbar from "../component/Navbar";
import API_PATH from "../authentication/API_PATH";
import axios from "axios";
import { useNavigate } from "react-router";

function LoginPage() {
    const textStyle = "text-[20px] text-White font-medium pt-6";
    const token = localStorage.getItem("token");
    const [noLogin, setNoLogin] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (!token){
            setNoLogin(false);
        }else{
            setNoLogin(true);
        }
    })

    const handleLogin = async() => {
        setError("")
        if (!email || !password){
            setError("Please enter both email and password!");
            return;
        }

        try{
            const response = await axios.post(`${API_PATH}/(insert direction api)`, {
                email: email,
                password: password,
            });

            const token = response.data.payload.access_token;
            
            localStorage.setItem("token", token);

            alert("Login Successful!")
            navigate("/selection")

        }catch (err){
            setError("Login failed. Please check your email and password.");
        }
    }

    return (
        <>
            <Navbar currentPage={"Login"}/>
            {noLogin && (
                <div className="flex justify-center items-center min-h-screen">
                    <div className="bg-Light_black min-h-[517px] min-w-[454px] rounded-[12px] flex flex-col items-center">
                        <p className="mt-8 font-bold text-Bright_red text-[28px]">Login</p>
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
                        </div>
                    </div>
                </div>    
            )}
            
        </>
    )
};

export default LoginPage