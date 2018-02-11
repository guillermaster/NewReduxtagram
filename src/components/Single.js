import React, { Component } from 'react';
import Photo from './Photo';
import Comments from './Comments';

class Single extends Component {
    render() {
        // index of the post
        const { postId } = this.props.match.params;
        const i = this.props.posts.findIndex((post) => post.code === postId);
        // get us the psot
        const post = this.props.posts[i];
        const postComments = this.props.comments[postId] || [];
        
        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>
        );
    }
}

export default Single;