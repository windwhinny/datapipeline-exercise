import React, { Component } from 'react';
import Job from './Job';
import Checkbox from './Checkbox';

export default class Department extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedList: [],
      collapse: false,
    };

    ['checkAll', 'renderJob', 'toggle'].forEach(fn => {
      this[fn] = this[fn].bind(this);
    });
  }

  getTotalHeadCounts(jobs) {
    return jobs.reduce((total, job) => total + job.headCounts, 0);
  }

  allChecked() {
    const { jobs } = this.props;
    const { checkedList } = this.state;

    return !!(checkedList.length && checkedList.length === jobs.length);
  }

  checkJob(job, checked) {
    const { checkedList } = this.state;
    const index = checkedList.indexOf(job.id);

    if (typeof checked === 'undefined') return index >= 0;

    if (checked && index === -1) {
      checkedList.push(job.id);
    } else if (!checked && index >= 0) {
      checkedList.splice(index, 1);
    } else {
      return false;
    }

    return this.setState({ checkedList });
  }

  checkAll(checked) {
    if (checked) {
      this.setState({
        checkedList: this.props.jobs.map(j => j.id),
      });
    } else {
      this.setState({
        checkedList: [],
      });
    }
  }

  toggle() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  renderJob(job) {
    const onChange = this.checkJob.bind(this, job);
    const props = {
      title: job.title,
      headCounts: job.headCounts,
      onChecked: onChange,
      checked: this.checkJob(job),
    };
    return (<li key={job.id}>
      <Job {...props} />
    </li>);
  }

  renderJobs(jobs) {
    const { collapse } = this.state;

    return (<ul className={collapse ? 'collapse' : ''}>
      {jobs.map(this.renderJob)}
    </ul>);
  }

  render() {
    const { name, jobs } = this.props;
    const { collapse } = this.state;

    return (
      <section className="department">
        <header>
          <label>
            <Checkbox onChange={this.checkAll} checked={this.allChecked()} />
            <h3>{name}</h3>
          </label>
          <span className={`caret ${collapse ? 'collapse' : ''}`} onClick={this.toggle} />
          <span className="total-head-counts">{this.getTotalHeadCounts(jobs)}</span>
        </header>
        {this.renderJobs(jobs)}
      </section>
    );
  }
}

Department.propTypes = {
  jobs: React.PropTypes.arrayOf(React.PropTypes.object),
  name: React.PropTypes.string,
};
