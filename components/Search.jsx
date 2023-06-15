'use client';

import { useState } from 'react';

const Search = (props) => {
    return (
        <div>
            <form>
                <input
                    type="text"
                    placeholder="Search for an asset, jargon accepted"
                    className="searchbar"
                />
            </form>

        </div>
    )
}

export default Search;