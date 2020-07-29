import React from 'react'
import TimePosted from './TimePosted'
import { Link } from "gatsby"
import Img from 'gatsby-image'
import NoImageFound from '../../assets/images/NoImageFound.jpg'

const PostList = (props) => {
    const post = props.post
    const image = post.frontmatter.image.childImageSharp.fluid;
    const desc = post.frontmatter.description;
    const date = post.frontmatter.date;
    return (
        <Link to={`/blog${post.fields.slug}`}>
            <div className="my_post">
                <Img className='img' fluid={image}/>

                <div className="post_info">
                    <div className="post_blurb">
                        <div className="blurb">
                            <h3>{desc}</h3>
                            <br />
                            <div className="post_meta">
                                <h4 className='post-date'>{date}</h4>
                                {/* <div className="metas">
                                    <div className="actions meta">
                                        <div className="totalComments icon_container action">
                                            <i className="far fa-comment icon"><span>{100}</span></i>
                                        </div>
                                        <div className="views icon_container noselect action">
                                            <i id="views" className="far fa-eye icon"><span id="views">{1000}</span></i>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export const ThreeUp = (props) => {
    return (
        <div className="post_container">
            <div className="three_up">
                <PostList
                    post={props.posts[0].node}
                />
                <PostList
                    post={props.posts[1].node}
                />
                <PostList
                    post={props.posts[2].node}
                />
            </div>
        </div>
    )
}

export const TwoUp = (props) => {
    return (
        <div className="post_container">
            <div className="two_up">
                <PostList
                    post={props.posts[0]}
                />
                <PostList
                    post={props.posts[1]}
                />
            </div>
        </div>
    )
}