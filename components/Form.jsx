
const Form = () => {

    const submitComment = (e) => {
        e.preventDefault();
        console.log("Comment submitted!");
    }


    return (
        <div>
            <form className="comment-entry-form" onSubmit={submitComment}>
                <input type="text" />
                <input type="text" />
                <button type="submit" className='btn comment-btn'>Submit comment</button>
            </form>
        </div>
    )
}

export default Form