'use client';

import { useState, useEffect } from 'react';
import { date } from '@utils/date';
import { logs } from '@utils/logs';



const strDate = date();

const RecentFeed = (props) => {

    const fade = props.fade == "" ? true : false;

    const fadeIn = { opacity: "1", transition: "all cubic-bezier(0.19, 1, 0.22, 1) 3000ms" };
    const fadeOut = { opacity: "0", transition: "all cubic-bezier(0.19, 1, 0.22, 1) 1000ms" };


    const query = props.query;

    const [allComments, setAllComments] = useState([]);

    const fetchComments = async () => {
        {/*        const res = await fetch(`/api/asset-log?${query}`);
        const data = await res.json();

        setAllComments(data);*/}
        setAllComments(logs);
    }

    useEffect(() => {
        fetchComments();
    }, [props.commentSubmit]);

    useEffect(() => {
        fetchComments();
    }, [query]);



    return (
        <div
            className="comment-feed"
            style={fade ? fadeOut : fadeIn}
        >
            {allComments
                /*.filter(comment => query && comment.asset.title == query)*/
                .filter(comment => query && comment.asset == query)
                .slice()
                .reverse()
                .map((comment) => (
                    <div
                        className="comment"
                        key={comment._id}>
                        {/*{console.log(comment)}*/}
                        <p>
                            <span className="comment-date">
                                {new Date(comment.createdOn).toLocaleString("en-US", strDate.optionsMedium)}
                            </span>
                            <span className="asset-title">
                                {/*{comment.asset.title}:*/}
                                {comment.asset}:
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
                        </p>
                    </div>
                ))}
        </div>
    )
}

export default RecentFeed;