//Hero space will include latest post/featured posts. As well as top 3 posts. 

import React, {Component} from 'react'
import FeaturedPost from './FeaturedPost'
import {ThreeUp} from '../ThreeUp'


class HeroSpace extends Component {
    render() {
        let filteredPosts = this.props.posts.splice(0, 3);
        return (
            <div className="hero">
                <FeaturedPost
                    posts={filteredPosts}
                />
                <div className="recent_post">
                    <ThreeUp 
                        posts={filteredPosts}
                    />
                </div>
            </div>
        )
    }
}

export default HeroSpace