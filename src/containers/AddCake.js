import { connect } from 'react-redux';
import { createCake } from '../actions';
import AddCake from '../components/AddCake';

const mapDispatchToProps = dispatch => {
  return {
    onAddCake: post => {
      dispatch(createCake(post));
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddCake);