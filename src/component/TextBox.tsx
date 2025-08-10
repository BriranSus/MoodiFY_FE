import { type ChangeEventHandler, type HTMLInputTypeAttribute } from "react"

function TextBox(props: {
    value: string | number | readonly string[] | undefined;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
    type: HTMLInputTypeAttribute | undefined;
    id: string | undefined; placeholder: string | undefined 
}) {

    return (
        <>
            <div className="pt-1">
                <form>
                    <input 
                        type={props.type} 
                        id={props.id}
                        placeholder={props.placeholder}
                        value={props.value}
                        onChange={props.onChange}
                        className="min-w-[370px] min-h-[52px] bg-White inset-shadow-[1px_1px_4px_rgba(0,0,0,0.25)] shadow-[1px_1px_4px_rgba(0,0,0,0.25)] rounded-[8px] pl-4"
                    />
                </form>
            </div>
        </>
    )
}

export default TextBox