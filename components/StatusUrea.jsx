import Analytic from "./Analytic";


const StatusUrea = (props) => {
    const expanded = props.expand ? "expanded" : "collapsed";
    console.log(`Detailed status ${expanded}`);

    const phd = (query) => {
        const tag = props.data.find((phd) => phd.TagName === query);
        const name = tag?.TagName;
        const value = tag?.DoubleValue;
        return { name, value }
    }

    const ureaCalc = (FI_104) => {
        const importFlow = Number(FI_104);
        const ST_to_MT = 1.1023;
        const nh3Conv = 0.58;
        const production_24_ST = 2272;
        const production_12_ST = 1136;
        const production_24_MT = 2061.14487888959;
        const production_12_MT = 1030.57243944480;

        const usage_24 = production_24_MT * nh3Conv;
        const usage_12 = usage_24 / 2;

        const rateByHour = usage_24 / 24;
        const rateByMinute = usage_24 / (24 * 60);
        const rateBySecond = usage_24 / (24 * 60 * 60);

        const currentRate = (importFlow / rateByHour) * 100;
        const prod = (importFlow / 0.58) * 1.1023;
        const rate_12 = (importFlow / ((2272 / 1.1023) / 24)) * 100;
        const rate_24 = (prod / 2272) * 100;

        return { currentRate, prod, rate_12, rate_24 };
    }

    const currentRate = ureaCalc(phd("01_FI_104.DACA.PV").value).currentRate;
    const ureaEnergy = phd("UREA_ENERGY.DIVA_2.OUT").value?.toFixed(1);

    return (
        <div className={`site-urea ${props.statusClass}`}>
            <h1 className="detailed-title">{props.site} <span>STATUS</span></h1>

            <div className="kpi-block kpi-rate">
                <div className="detailed-kpi detailed-rate">
                    <p className="kpi">{currentRate.toFixed(2)}</p>
                    <span className="unit">%</span>
                    <span className="detailed-kpi-text">Plant Rate</span>
                </div>
                <p className="kpi-title">Rate</p>

                <div className="rate-analytics">
                    <div className="ammonia-flow-block">
                        <Analytic
                            className="status-analytic"
                            title="Ammonia Import"
                            value={phd("01_FI_104.DACA.PV").value?.toFixed(1)}
                            // value={phd("01_FI_104.DACA.PV").value?.toFixed(1)}
                            unit="T/h"
                        />
                        <Analytic
                            className="status-analytic"
                            title="Charge to Reactor"
                            value={phd("01_FIC_38.PIDA.PV").value?.toFixed(1)}
                            unit="T/h"
                        />
                        <Analytic
                            className="status-analytic"
                            title="01-TK-01 Speed"
                            value={phd("01_SI_401.DACA.PV").value?.toFixed(0)}
                            unit="RPM"
                        />
                    </div>
                    <div className="loop-pressures-block">
                        <Analytic
                            className="status-analytic"
                            title="HP Loop"
                            value={phd("01_PI_5A.DACA.PV").value?.toFixed(1)}
                            unit="kg/cm²"
                        />
                        <Analytic
                            className="status-analytic"
                            title="MP Loop"
                            value={phd("01_PI_101.DACA.PV").value?.toFixed(1)}
                            unit="kg/cm²"
                        />
                        <Analytic
                            className="status-analytic"
                            title="LP Loop"
                            value={phd("01_PI_132.DACA.PV").value?.toFixed(1)}
                            unit="kg/cm²"
                        />
                    </div>

                </div>
                <div className="tank-block">
                    <Analytic
                        className="status-analytic"
                        title="01-V-101 Level"
                        value={phd("01_LIC_106.PIDA.PV").value?.toFixed(1)}
                        unit="%"
                    />
                </div>
            </div>
            <div className="kpi-block kpi-energy">
                <div className="detailed-kpi detailed-energy">
                    <p
                        className="kpi"
                        style={ureaEnergy < 2 || ureaEnergy > 30 ? { fontSize: "12rem", position: "absolute", margin: "2rem 0" } : {}}
                    >
                        {ureaEnergy < 2 || ureaEnergy > 30 ? "∞" : ureaEnergy}</p>
                    <span className="unit"></span>
                    <span className="detailed-kpi-text">MMBTU / ST</span>
                </div>
                <p className="kpi-title">Efficiency</p>

                <div className="energy-analytics">
                    <div className="steam-block">
                        <Analytic
                            className="status-analytic"
                            title="'A' Boiler"
                            value={phd("04_FI_8A.DACA.PV").value?.toFixed(1)}
                            unit="T/h"
                        />
                        <Analytic
                            className="status-analytic"
                            title="'B' Boiler"
                            value={phd("04_FI_8B.DACA.PV").value?.toFixed(1)}
                            unit="T/h"
                        />
                        <Analytic
                            className="status-analytic"
                            title="Steam Import"
                            value={phd("04_FIC_2.DACA_1.PV").value?.toFixed(1)}
                            unit="T/h"
                        />
                    </div>
                    <div className="vent-block">
                        <Analytic
                            className="status-analytic"
                            title="HS  Vent OP"
                            value={phd("01_PIC_215.PIDA.OP").value?.toFixed(1)}
                            unit="%"
                        />
                        <Analytic
                            className="status-analytic"
                            title="MS Vent OP"
                            value={phd("01_PIC_14A.PIDA.OP").value?.toFixed(1)}
                            unit="%"
                        />
                        <Analytic
                            className="status-analytic"
                            title="LS Vent OP"
                            value={phd("04_PIC_4.PIDA.OP").value?.toFixed(1)}
                            unit="%"
                        />
                    </div>
                </div>
                <div className="tank-block">
                    <Analytic
                        className="status-analytic"
                        title="01-V-3 Level"
                        value={phd("01_LI_133.DACA.PV").value?.toFixed(1)}
                        unit="%"
                    />
                </div>
            </div>
            <div className="kpi-block kpi-granulation">

                <div className="detailed-kpi detailed-nozzles">
                    <p className="kpi">7 <span className="nozzles-x">x</span> 6</p>
                    <span className="unit"></span>
                    <span className="detailed-kpi-text">Nozzles</span>
                </div>
                <p className="kpi-title">Granulation</p>

                <div className="granulation-analytics">
                    <div className="train-block">
                        <Analytic
                            className="status-analytic"
                            title="'A' Train"
                            value={phd("02_FI_2A.DACA.PV").value?.toFixed(1)}
                            unit="T/h"
                        />
                        <Analytic
                            className="status-analytic"
                            title="'B' Train"
                            value={phd("02_FI_2B.DACA.PV").value?.toFixed(1)}
                            unit="T/h"
                        />
                    </div>
                    <div className="sample-block">
                        <Analytic
                            className="status-analytic"
                            title="Moisture"
                            value="0.34"
                            unit="wt%"
                        />
                        <Analytic
                            className="status-analytic"
                            title="Biuret"
                            value="0.77"
                            unit="wt%"
                        />
                        <Analytic
                            className="status-analytic"
                            title="Formaldehyde"
                            value="0.59"
                            unit="wt%"
                        />
                    </div>


                </div>
                <div className="tank-block">
                    <Analytic
                        className="status-analytic"
                        title="01-V-501 Level"
                        value={phd("01_LI_141.DACA.PV").value?.toFixed(1)}
                        unit="%"
                    />
                </div>
            </div>




        </div>
    )
}

export default StatusUrea;