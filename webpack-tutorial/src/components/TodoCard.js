import React from 'react';
import Checkbox from 'react-toolbox/lib/checkbox';
import PropTypes from 'prop-types';

const TodoCard = props => {
  const { handleChange, idx } = props;
  const { isFinished, title, content, startDate, endDate } = props.Item;
  const startDate_form = startDate.toJSON().slice(0,10);
  const endDate_form = endDate.toJSON().slice(0,10);
  return (
    <div className="card">
      <Checkbox
        checked={isFinished}
        onChange={(value) => handleChange(value, idx)}
      />
      <p className="title">{title}</p>
      <p className="content">{content}</p>
      <p className={`date ${isFinished ? 'finished': ''}`} >{startDate_form} ~ {endDate_form}</p>
    </div>
  );
};

TodoCard.propTypes = {
};

export default TodoCard;