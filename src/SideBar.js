import React, { Component } from 'react';
import Department from './Department';

export default class SideBar extends Component {

  renderDepartment(info, index) {
    return <Department key={index} name={info.department} jobs={info.jobs} />;
  }

  render() {
    return (<sidebar>
      <header>
        <h1>招聘职位</h1>
        <button className="clear" onClick={() => this.clear()}>清空</button>
      </header>
      <div>
        {this.props.hireInfo.map(this.renderDepartment)}
      </div>
    </sidebar>);
  }
}

SideBar.propTypes = {
  hireInfo: React.PropTypes.arrayOf(React.PropTypes.object),
};
