import React from 'react';
import uuid from 'uuid';
import StarRatingComponent from 'react-star-rating-component';


class AddCake extends React.Component {
  state = {
    name: '',
    imageUrl:'',
    comment: '',
    yumFactor:1
  };

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onStarClick(nextValue, prevValue, name) {
    this.setState({yumFactor: nextValue});
  }

   handleSubmit = e => {
    e.preventDefault();
    // this.setState({id: uuid.v4()});

    //quick form validation
     if (this.state.name.trim() && this.state.comment.trim() && this.state.imageUrl.trim()) {
       this.props.onAddCake(this.state);
       this.handleReset();
       this.redirectURL();

    }else{
      alert('add some content');
    }
  };

  redirectURL = () => {
    this.props.history.push('/view')
  }

  handleReset = () => {
    this.setState({
      name: '',
      imageUrl:'',
      comment: '',
      yumFactor:0
    });
  };

  render() {
    return (
      <div>
          <form onSubmit={ this.handleSubmit }>
          <div className="form-group">
              <input
              type="text"
              placeholder="Name"
              className="form-control"
              name="name"
              onChange={ this.handleInputChange }
              value={ this.state.name }
            />
          </div>
         <div className="form-group">
            <textarea
              cols="19"
              rows="8"
              placeholder="Comment"
              className="form-control"
              name="comment"
              onChange={ this.handleInputChange }
              value={ this.state.comment }>
            </textarea>
          </div>
          <div className="form-group">
            <input
              cols="19"
              rows="8"
              placeholder="Image URL"
              className="form-control"
              name="imageUrl"
              onChange={ this.handleInputChange }
              value={ this.state.imageUrl }>
            </input>
          </div>
          <div className="row">
            <div className="col-3">
              <p>Yum Factor:</p>
            </div>
            <div className="col-6">
           <StarRatingComponent 
                name="yumFactor" 
                starCount={5}
                value={ this.state.yumFactor }
                onStarClick={this.onStarClick.bind(this)}
              />
            </div>
           
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Add Cake</button>
            <button type="button" className="btn btn-warning" onClick={ this.handleReset }>
              Reset
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddCake;