import React from 'react';

const Checkbox = (props) => {
  const onChange = (e) => {
    if (!props.onChange) return;
    if (e.target.checked) {
      props.onChange(true);
    } else {
      props.onChange(false);
    }
  };

  return React.createElement('input', Object.assign(
    { },
    props,
    {
      type: 'checkbox',
      onChange,
    }
  ));
};

Checkbox.propTypes = {
  onChange: React.PropTypes.func,
  checked: React.PropTypes.bool,
};

export default Checkbox;
