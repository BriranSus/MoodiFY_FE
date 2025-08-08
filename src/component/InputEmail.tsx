import { useState } from "react"

const InputEmail = () => {
    const [email, setEmail] = useState("")

    return (
        <>
            <div className="pt-1">
                <form>
                    <input 
                        type="email" 
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="min-w-[370px] min-h-[52px] bg-White inset-shadow-[1px_1px_4px_rgba(0,0,0,0.25)] shadow-[1px_1px_4px_rgba(0,0,0,0.25)] rounded-[8px] pl-4"
                    />
                </form>
            </div>
        </>
    )
}

export default InputEmail