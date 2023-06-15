'use client';

import { useState, useEffect } from 'react';

const UpdateFeed = (props) => {


    const query = props.query;

    const shortDate = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }

    const [allComments, setAllComments] = useState([]);

    const fetchComments = async () => {
        const res = await fetch(`/api/asset-log?${query}`);
        const data = await res.json();

        setAllComments(data);
    }

    useEffect(() => {
        fetchComments();
    }, [props.commentSubmit]);

    useEffect(() => {
        fetchComments();
    }, [props.query]);



    return (
        <div className="comment-feed">
            {allComments
                .filter(comment => !props.query || comment.asset.title == props.query)
                .slice()
                .reverse()
                .map((comment) => (
                    <div
                        className="comment"
                        key={comment._id}>
                        {/*{console.log(comment)}*/}
                        <p>
                            <span className="comment-date">
                                {new Date(comment.createdOn).toLocaleString("en-US", shortDate)}
                            </span>
                            <span className="asset-title">
                                {comment.asset.title}:
                            </span>
                            {comment.content}
                            <span
                                onClick={() => props.handleTagClick && props.handleTagClick(comment.tag)}
                                className="comment-tags">
                                {comment.tag}
                            </span>
                        </p>
                    </div>
                ))}
        </div>
    )
}

export default UpdateFeed;