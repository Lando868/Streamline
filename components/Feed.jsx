'use client';

import { useState, useEffect } from 'react';
import { date } from '@utils/date';

const Feed = (props) => {

    // type == "all" / "recent" / "search" 
    const type = props.type;
    const dateFormat = props.dateFormat;
    const streamDate = date();

    const query = props.query;

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
    }, [query]);



    return (
        <div className="comment-feed">
            {allComments
                .filter(comment => !query || comment.asset.title == query)
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
                                key={index}
                                onClick={() => props.handleTagClick && props.handleTagClick(comment.tag)}
                                className="comment-tags">
                                {tag}

                            </span>
                        </p>
                    </div>
                ))}
        </div>
    )
}

export default Feed