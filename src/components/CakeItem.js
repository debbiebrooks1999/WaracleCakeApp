import React, { Component } from 'react'
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';



export class CakeItem extends Component {
    constructor(props) {
        super(props);
      }

  render() {
    const { id, name, imageUrl, comment, yumFactor } = this.props.posts;
    return (

        <li className="list-group-item list-group-item-action">
          <div className="row">
            <div className="col-2"><Thumbnail img={this.props.post.imageUrl} /></div>
            <div className="col"><h2>{this.props.post.name}</h2> </div>
          </div>
        </li>
    )
  }
}

function Thumbnail({ img }) {
  return (
    <div
      style={{
        width: 50,
        height: 50,
        backgroundImage: "url(" + img + ")",
        backgroundSize:'cover',
        marginRight:5,
        float:"left"
      }}
    />
  );
}


const mapStateToProps = state => {
    return {
      posts: state.posts
    };
  };
  

export default connect(
    mapStateToProps
   )(CakeItem);
