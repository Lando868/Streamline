'use client';


import { ToastContainer, toast } from 'react-toastify';
import printJS from 'print-js';
import 'react-toastify/dist/ReactToastify.css';


import { useState } from "react";
import { FontAwesomeIcon } from "fontAwesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";


const DetailDocs = ({ details, title, value, className }) => {

    const [selectedDocs, setSelectedDocs] = useState([]);


    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        checked ? setSelectedDocs((prev) => [...prev, value]) : setSelectedDocs((prev) => prev.filter((doc) => doc !== value));
    }

    const printSelected = async () => {
        console.log("Print: ", selectedDocs);
        selectedDocs.forEach(async (doc) => {
            const printWindow = window?.open(doc, "_blank");
            printWindow.onload = () => {
                printWindow.print();
                // console.log("Original tab", window)
                printWindow.close();



                console.log(doc, " was printed!");
                setSelectedDocs([]);

                const checkboxes = document.querySelectorAll('.doc-check');
                checkboxes.forEach((checkbox) => {
                    checkbox.checked = false;
                });
            }
        })
    }

    return (
        <div className={className}>
            <div className="docs-title-block">
                <p className="detail-title">{`${title} (${details?.[value]?.length})`}</p>
                <button
                    className="btn-print"
                    onClick={printSelected}
                >
                    <FontAwesomeIcon
                        icon={faPrint}
                        className="print-icon"
                    />
                </button>
                {/* <span className='print-text'>Print</span> */}
            </div>
            {details?.[value] !== []
                ?
                details[value]?.map((doc, index) => {
                    const fileName = doc.split('/').pop().replace(/\.[^/.]+$/, '');
                    return (
                        <div className="doc-entry detail-value"
                            key={index}>
                            <input
                                type="checkbox"
                                className="doc-check"
                                value={doc}
                                onChange={handleCheckboxChange}
                            />
                            <a href={doc} target="_blank">
                                <p> {fileName} </p>
                            </a>

                        </div>

                    )
                }
                ) : (
                    "-"
                )}
        </div>
    )
}

export default DetailDocs;

