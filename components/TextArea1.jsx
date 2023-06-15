import "@styles/global.css";
import { useRef } from "react";


const TextArea1 = (props) => {

    const textareaRef = useRef("null");

    const autoResize = () => {
        const element = textareaRef.current;
        const maxHeight = 220;


        if (element.scrollHeight < maxHeight) {
            element.style.height = element.scrollHeight + 'px';
        } else {
            element.style.height = maxHeight + 'px';
            element.style.overflowY = "auto";
        }
        console.log("Input: ", props.value);
        console.log("scrollHeight: ", element.scrollHeight);
    };

    const handleInput = (e) => {
        props.onChange(e);
        autoResize();
    }


    const fade = props.fade == "" ? true : false;

    return (
        <div
            className={`textArea1-div ${props.className}`}
            style={fade ? { opacity: "0" } : { opacity: "1" }}>
            <textarea
                ref={textareaRef}
                name={props.name}
                className={`textArea1`}
                required
                autoComplete="off"
                value={props.value}
                onChange={handleInput}

            />
            <span
                className="textArea1-span">
                {props.placeholder}
            </span>
        </div>
    )
}

export default TextArea1;

