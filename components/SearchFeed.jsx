'use client';

import { useState, useEffect } from 'react';
import escapeRegExp from 'escape-string-regexp';

import { date } from '@utils/date';



const strDate = date();


const SearchFeed = (props) => {


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


    const filterComments = (query) => {
        const escQuery = escapeRegExp(props.query);
        const regex = new RegExp(escQuery, "i");
        return allComments.filter(
            (comment) => query && (
                regex.test(comment.content) ||
                regex.test(comment.asset.title) ||
                regex.test(comment.createdBy?.username) ||
                regex.test(comment.asset.desc) ||
                regex.test(comment.asset.jargon) ||
                regex.test(comment.asset.site) ||
                regex.test(comment.tag) ||
                regex.test(comment.createdOn) ||
                regex.test(comment.jobType)
            ))
    }


    const queriedComments = filterComments(query);


    return (
        <div className={props.className}>
            {queriedComments
                .slice()
                .reverse()
                .map((comment) => (
                    <div
                        className="comment"
                        key={comment._id}>
                        {/*{console.log(comment)}*/}
                        <span className="comment-date">
                            {new Date(comment.createdOn).toLocaleString("en-US", strDate.optionsMedium)}
                        </span>
                        <span className="asset-title">
                            {comment.asset.title}:
                        </span>
                        {comment.content}
                        <div className="tag-block">
                            {comment.tag.map((tag, index) => (
                                <span
                                    key={index}
                                    onClick={() => props.handleTagClick && props.handleTagClick(tag)}
                                    className="comment-tags">
                                    {tag}

                                </span>
                            ))}
                        </div>
                    </div>
                ))}
        </div>
    )
}

export default SearchFeed;