import { useState } from "react"

const InputPassword = () => {
    const [password, setPassword] = useState("")

    return (
        <>
            <div className="pt-1">
                <form>
                    <input 
                        type="password" 
                        id="password"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="min-w-[370px] min-h-[52px] bg-White inset-shadow-[1px_1px_4px_rgba(0,0,0,0.25)] shadow-[1px_1px_4px_rgba(0,0,0,0.25)] rounded-[8px] pl-4"
                    />
                </form>
            </div>
        </>
    )
}

export default InputPassword