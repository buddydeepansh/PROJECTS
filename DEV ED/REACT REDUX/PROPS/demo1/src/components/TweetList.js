import React from 'react'
import Tweet from './tweet'
const tweetsList = ({ name, tweets }) => {
    return (
        <div className="tweets-list">
            <Tweet name={name} tweets={tweets} />
            <Tweet name={name} tweets={tweets} />
            <Tweet name={name} tweets={tweets} />
        </div>
    )
}

export default tweetsList;