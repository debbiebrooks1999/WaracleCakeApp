import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import { connect } from 'react-redux';
import StarRatingComponent from 'react-star-rating-component';



export class CakeItem extends Component {
    constructor(props) {
        super(props);
        this.state = { modal: false};
        this.toggle = this.toggle.bind(this);
      }
  toggle() {
    this.setState({
        modal: !this.state.modal
    });
    }
  render() {
    const { id, name, imageUrl, comment, yumFactor } = this.props.posts;
    return (

        <li className="list-group-item list-group-item-action">
          <div className="row">
            <div className="col-2"><Thumbnail img={this.props.post.imageUrl} /></div>
            <div className="col-6"><h4>{this.props.post.name}</h4> </div>
            <div className="col-2"><Button color="success" onClick={this.toggle}>View</Button></div>
          </div>
        
          <Modal isOpen={this.state.modal}>
            <ModalBody>
            <div className="row">
              <div className="col-2"><Thumbnail img={this.props.post.imageUrl} /></div>
              <div className="col">Name:  {this.props.post.name} </div>
              </div>
            <div className="row">
              <div className="col-3">Yum Factor: </div>
                <div className="col"><StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={this.props.post.yumFactor}
              />
             </div>
            </div>
            <div className="row">
              <div className="col">Comment:   {this.props.post.comment} </div>
            </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={this.toggle}>Close</Button>
            </ModalFooter>
          </Modal>

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
