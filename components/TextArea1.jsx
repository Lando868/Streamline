import "@styles/global.css";
import { useRef } from "react";


const TextArea1 = (props) => {

    const textareaRef = useRef("null");

    const autoResize = () => {
        const element = textareaRef.current;
        element.style.height = 'auto';
        element.style.height = element.scrollHeight + 'px'
    };

    const handleInput = (e) => {
        autoResize();
        props.onChange(e);
    }

    return (
        <div className="textArea1-div">
            <textarea
                ref={textareaRef}
                name={props.name}
                className={props.className}
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

