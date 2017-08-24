import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Card } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import DatePicker from 'react-toolbox/lib/date_picker';
import { Button } from 'react-toolbox/lib/button';

class AddForm extends Component {
  handleInputChange = (value, name) => {
    this.props.changeNewTodoLists(value, name);
  }
  handleAddForm = () => {
    this.props.addCard();
  }
  render() {
    return (
      <section className="addform-section">
        <h2 className="title">할 일 추가하기</h2>
        <Input type='text' label='제목' name='title' value={this.props.newTodo.title} onChange={(value) => this.handleInputChange(value, 'title')}/>
        <Input type='text' label='설명' name='content' value={this.props.newTodo.content} onChange={(value) => this.handleInputChange(value, 'content')}/>
        <DatePicker label='시작날짜' value={this.props.newTodo.startDate} onChange={(value) => this.handleInputChange(value, 'startDate')}/>
        <DatePicker label='종료날짜' value={this.props.newTodo.endDate} onChange={(value) => this.handleInputChange(value, 'endDate')}/>
        <Button raised primary onClick={this.handleAddForm}>만들기</Button>
      </section>
    );
  }
}

AddForm.defaultProps= {
};
AddForm.propTypes = {
};

export default connect(
  (state) => ({
    lists: state.todoLists,
    newTodo: state.newTodo,
  }),
  (dispatch) => ({
    changeNewTodoLists: (value, name) => dispatch(actions.changeValueNewTodo(value, name)
  ),
    addCard: () => dispatch(actions.addCard())    
  }),
)(AddForm);
