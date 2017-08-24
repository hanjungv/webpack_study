import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import StackGrid from "react-stack-grid";
import TodoCard from './TodoCard';
import _ from 'lodash';
import AddForm from './AddForm';

class TodoLists extends Component {
  handleChange = (value, idx) => {
    this.props.toggleIsFinished(value, idx);
  };
  render() {
    const { todoLists, finishedJob } = this.props;
    return (
      <div>
        <AddForm />
        <StackGrid className="card-section" columnWidth={250}>
          {_.map(todoLists, (Item, idx) => {
            return (
              <TodoCard Item={Item} key={`itemCard_${idx}`} handleChange={this.handleChange} idx={idx} />
            );
          })}
          {_.map(finishedJob, (Item, idx) => {
            return (
              <TodoCard Item={Item} key={`itemCard_${idx}`} handleChange={this.handleChange} idx={idx} />
            );
          })}
        </StackGrid>
      </div>
    );
  }
}

TodoLists.defaultProps= {
};
TodoLists.propTypes = {
};

export default connect(
  (state) => ({
    todoLists: state.todoLists,
    finishedJob: state.finishedJob,
  }),
  (dispatch) => ({
    toggleIsFinished: (value, idx) => dispatch(actions.toggleIsFinished(value, idx))
  })
)(TodoLists);
