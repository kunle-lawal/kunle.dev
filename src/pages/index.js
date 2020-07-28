import React, {Component} from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/button"
import '../css/main.css'
import Anime from 'react-anime';

class IndexPage extends Component {
  state = {
    width: 0, //(window.innerWidth > 0) ? window.innerWidth : screen.width
    doneLoading: false
  }
  // getPageWidth = () => {
  //   let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  //   this.setState({
  //     width: width
  //   })
  // }

  componentDidMount() {
    this.updateWindowDimensions();
    this.setState({doneLoading: true})
    
    // window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }
  
  componentWillUnmount() {
    // window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    // const siteTitle = "Gatsby Starter Personal Website"

    return (
    <>
      <SEO
          title="Home"
          keywords={[`blog`, `kunle.dev`, `dev`, `olakunle lawal`, `lawal`, `olakunle`]}
        />
        {
          ((this.state.width > 700 && this.state.height > 700) || this.state.doneLoading === false) ? 
          <Anime easing="easeOutElastic"
            delay={1000}
            scaleX={[1, .8]}
            scaleY={[1, .8]}
            className={'home-page-anime '}
            // translateX={this.state.width < 600 ? ['0%', '5%'] : [0]}
            // translateY={this.state.width < 600 ? ['0%', '2.5%'] : [0]}
            // width={this.state.width < 600 ? ['100%', '91%'] : [100]}
            // height={this.state.width < 600 ? ['100vh', '95vh'] : [100]}
            >
            <div className="home-page">
              {/* <Anime delay={anime.stagger(100)}
                    scale={[.1, .9]}>
                <div className="blue p"/>
                <div className="green p"/>
                <div className="red p"/>
              </Anime> */}
                <div className="social">
                  <div className="social_icons">
                      <a href="https://www.linkedin.com/in/olakunle-l-54b42ab1/" id="fa" className="fa fa-linkedin icon"></a>
                      <a href="https://twitter.com/olawal196" className="fa fa-twitter icon" id="fa"></a>
                      <a href="https://github.com/kunle-lawal" className="fa fa-github icon" id="fa"></a>
                  </div>

                  <Link to="/blog/">
                    <div className="blogLink-top">
                        <h4>Blog</h4>
                    </div>
                  </Link>
                </div>
                <div className="page" id="page">
                  <section className="intro">
                    <Anime easing="spring" 
                      delay={2000}
                      // scaleX={[1, .5]}
                      translateX={['0', '-50%']}
                      className="divide_left divide" id="divide_left"
                    ></Anime>
                    <Anime easing="spring"
                      delay={3000}
                      duration={2000}
                      scale={[0, 1.8]}
                    >
                      <div className="headerBackground"></div>
                    </Anime>
                    <header className="title" id="title">
                        <Anime easing="spring"
                          delay={3000}
                          translateY={['-100%', '25%']}
                          opacity={[0, 1]}
                        >
                          <h1 id="kunle" className="kunle animateDown">
                            KUNLE

                            <Anime easing="spring"
                              delay={4000}
                              translateY={['-200%', '-95%']}
                              opacity={[0, 1]}
                              className={'dot-container '}
                            >
                              <span className="dot" id="dot"></span>
                            </Anime>
                          </h1>
                        </Anime>

                        <Anime easing="spring"
                          delay={3000}
                          translateY={['100%', '25%']}
                          opacity={[0, 1]}
                        >
                          <h1 id="dev" className="dev animateDown">DEV</h1>
                        </Anime>
                    </header>
                    {/* <div className="blogLink-bottom">
                      <Link to="/blog/">
                        <h4>Blog</h4>
                      </Link>
                    </div> */}
                  </section>
                </div>
            </div>
          </Anime> :
           window.location = '/blog'
        }
      </>
    )
  }
}

export default IndexPage
