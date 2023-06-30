import Analytic from "@components/Analytic";

const ProdCard = (props) => {


    const unit = "ST";
    const nh3_import = props.importValue;
    const prod = (nh3_import / 0.58) * 1.1023;;
    const rate = props.card !== "prod-24-card" ? (prod / (2272 / 2)) * 100 : (prod / 2272) * 100;
    const rateStyle = { fontWeight: 300 };

    return (
        <div className={`prod-card ${props.card}`}>

            <div className="card-title-block">
                <p className="prod-card-title">{props.title}</p>
            </div>

            <div className="prod-main-block">
                <h1 style={props.card !== "prod-24-card" ? rateStyle : {}}
                    className="prod-value">
                    {prod.toFixed(0).toLocaleString()}
                </h1>
                <span className="prod-card-unit-lg">{unit}</span>
            </div>
            <div className="prod-card-aside">
                <Analytic
                    className="analytic-aside rates"
                    title="rate"
                    value={rate.toFixed(1)}
                    unit="%"
                />
                <Analytic
                    className="analytic-aside import"
                    title="NH₃ import"
                    value={nh3_import.toFixed(0)}
                    unit="MT"
                />
                <Analytic
                    className="analytic-aside energy"
                    title="energy"
                    value={props.energy}
                // unit="MMBTU/ST"
                />
            </div>
        </div>
    )
}

export default ProdCard;