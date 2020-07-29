import React from 'react'
import Img from 'gatsby-image'

const FeaturedPost = (props) => {
    const posts = props.posts
    // const image = post.frontmatter.image.childImageSharp.fluid;
    // const desc = post.frontmatter.description;
    // const date = post.frontmatter.date;
    console.log(posts);
    return (
        <>
            <div className="featured_post">
                <div className="featured_post_image">
                    {/* {
                        posts.map((item, index) => {
                            console.log(item);
                            const image = item.node.frontmatter.image.childImageSharp.fluid;
                            return (
                                <Img className='img' fluid={image} key={index}/>
                            )
                        })
                    } */}
                </div>
                <div className="featured_post_info">
                    <header>
                        <h1 className="featured_post_info_title">Blog can be everything nowadays</h1>
                        <div className="featured_post_info_description">
                            <p>Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Dolores possimus culpa
                                officiis sed autem saepe aspernatur id ad,
                                doloremque quod recusandae dolor doloribus
                            nobis. Illum labore fugiat harum eos ab?</p>
                        </div>
                    </header>
                </div>
            </div>

            <div className="featured_post_arrow">
                <i className="fas fa-arrow-left"></i>
                <i className="fas fa-arrow-right"></i>
            </div>
        </>
    )
} 

export default FeaturedPost