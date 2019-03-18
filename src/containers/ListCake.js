import React from 'react';
import { connect } from 'react-redux';
import CakeItem from '../components/CakeItem';

function ListCake({ posts }) {
  if(!posts.length) {
    return (
      <div>
        No cakes yet...?
      </div>
    )
  }

  return (
    <ul className="list-group">
      {posts.map(post => {
        return (
          <CakeItem post={ post } key={ post.id } />
        );
      })}
    </ul>
  );
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};


export default connect(
  mapStateToProps
)(ListCake);