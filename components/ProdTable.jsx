import faker from "faker";
import ProdEntry from "./ProdEntry";



const ProdTable = (props) => {


    const days = Array.from({ length: 31 }, (_, index) => index + 1);

    return (
        <div className="prod-tracker">
            <div className="tracker-title-block">
                <span className="sub-text">Production</span>
                <h1 className="table-title">June 2023</h1>
            </div>

            <div className="prod-values">
                {days.map((day) => (
                    <ProdEntry
                        key={day}
                        date={day}
                        prod={faker.datatype.number({ min: 1680, max: 2395 })}
                        rate={faker.datatype.number({ min: 60.8, max: 102.5 })}
                        energy={faker.datatype.number({ min: 5.5, max: 8.2 })}
                    />
                ))}




            </div>
        </div>
    )
}

export default ProdTable;