import React, { Component } from 'react';
import Post from './Post';
import "./PostsSection.sass";

class PostsSection extends Component {
    render() {
        return (
            <div  className="posts-section">
                <Post />
            </div>
        );
    }
}

export default PostsSection;