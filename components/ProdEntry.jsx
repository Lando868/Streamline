const ProdEntry = (props) => {
    return (
        <div className="prod-block">
            <div className="prod-date">
                <h1>{props.date}</h1>
            </div>
            <div className="prod-tons">
                <p>{(props.prod).toLocaleString()}</p>
                {/* <span>{props.prodUnit}</span> */}
                <span>{"ST"}</span>
            </div>
            <div className="prod-rate">
                <p>{(props.rate).toFixed(1)}</p>
                <span>%</span>
            </div>
            <div className="prod-energy">
                <p>{(props.energy).toFixed(1)}</p>
                <span>{props.energyUnit}</span>
                <span>{"MMBTU/ST"}</span>
            </div>

        </div>
    )
}

export default ProdEntry;