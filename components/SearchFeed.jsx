'use client';

import { useState, useEffect } from 'react';

const SearchFeed = (props) => {


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


    const filterComments = (query) => {
        const regex = new RegExp(query, "i");
        return allComments.filter(
            (comment) =>
                regex.test(comment.content) ||
                regex.test(comment.asset.title) ||
                regex.test(comment.createdBy.username) ||
                regex.test(comment.asset.desc) ||
                regex.test(comment.asset.jargon) ||
                regex.test(comment.asset.site) ||
                regex.test(comment.tag) ||
                regex.test(comment.createdOn) ||
                regex.test(comment.jobType)
        )
    }


    const queriedComments = filterComments(query);


    return (
        <div className="comment-feed">
            {queriedComments
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

export default SearchFeed;