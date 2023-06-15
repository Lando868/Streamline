import "@styles/global.css";
const Input1 = (props) => {

    const fade = props.fade == "" ? true : false;
    return (
        <div
            className={`input1-div ${props.className}`}
            style={fade ? { opacity: "0" } : { opacity: "1" }}>

            <input type={props.type} name={props.name} className="input1" required autoComplete="off" value={props.value} onChange={props.onChange} />
            <span className="input1-span">{props.placeholder}</span>
        </div>
    )
}

export default Input1;

