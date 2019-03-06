import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import postlogo from '../post-logo.png'
import {connect} from 'react-redux';

class Home extends Component{

    render(){
        const { posts } = this.props;
        const PostList = posts.length ? (
            posts.map( post =>{
                return(
                    <div className="post card" key = {post.id}>
                    <img src={postlogo}/>
                        <div className="card-content">
                            <Link to = { "/post/" + post.id }>
                                <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center"> <h4>No Post yet</h4></div>
        )
        
        return(
            <div className ="container home">
                <h4 className = "center"> Home </h4>    
                {PostList}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps)(Home);