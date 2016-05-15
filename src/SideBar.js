import React, { Component } from 'react';
import Department from './Department';

export default class SideBar extends Component {
  /**
   * 清空
   */
  clear() {
    Object.keys(this.refs).forEach(ref => {
      const elem = this.refs[ref];

      elem.checkAll(false);
    });
  }

  /**
   * 渲染部门列表
   * @param  {Object} info
   * @param  {Number} index
   * @return {React.Element}
   */
  renderDepartment(info, index) {
    let ref = `department${index}`;
    // 为每个部门列表设置一个 ref ，方便清空时调用
    return <Department key={index} name={info.department} jobs={info.jobs} ref={ref} />;
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
