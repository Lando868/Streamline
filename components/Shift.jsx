import { shift } from '@utils/shift';

const Shift = () => {

    const shiftCheck = shift();


    return (
        <div className="shift-block">
            <span className="shift"> {shiftCheck.shift} </span>
            <span className="shift-word">Shift</span>
            <span className="rotation">{shiftCheck.rotation} </span>
        </div>
    )
}

export default Shift