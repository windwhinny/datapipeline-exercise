import React from 'react';
import Checkbox from './Checkbox';

const Job = ({ title, headCounts, onChecked, checked }) => (
  <div className="job">
    <label>
      <Checkbox onChange={onChecked} checked={checked} />
      <span className="title">{title}</span>
    </label>
    <span className="head-counts">{headCounts}</span>
  </div>
);
Job.propTypes = {
  title: React.PropTypes.string,
  headCounts: React.PropTypes.number,
  onChecked: React.PropTypes.func,
  checked: React.PropTypes.bool,
};

export default Job;
