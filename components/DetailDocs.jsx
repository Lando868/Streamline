
const DetailDocs = ({ details, title, value, className }) => {

    return (
        <div className={className}>
            <p className="detail-title">{title}</p>
            {details?.[value] !== []
                ?
                details[value]?.map((doc, index) => (
                    <p
                        key={index}
                        className="detail-value"
                    >
                        {doc}
                    </p>
                ))
                :
                "-"}


        </div>
    )
}

export default DetailDocs;