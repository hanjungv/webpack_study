import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class TodoLists extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div>
        아 좀 되라
        {console.log('why?',lists)}
        {_.map(lists, (Item, idx) => {
          return (
            <div key={`item_${idx}`}>
              <p>{Item.title}</p>
              <p>{Item.content}</p>
              <p>{Item.isFinished}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

TodoLists.propTypes = {

};

export default TodoLists;