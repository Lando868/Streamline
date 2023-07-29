const Analytic = (props) => {



    return (
        <div className={props.className}>
            <h1>{props.title}</h1>
            <p style={props.title === "mtd" ? { fontWeight: "800" } : {}}>{(props.value)?.toLocaleString()}</p>
            <span>{props.unit}</span>
        </div>
    )
}

export default Analytic;