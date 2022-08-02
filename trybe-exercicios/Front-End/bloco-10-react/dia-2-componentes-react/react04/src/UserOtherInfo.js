import React from 'react';

class UseOtherInfo extends React.Component {
  render () {
    const { email, id } = this.props
    return (
      <span> {email} / {id}</span>
    )
  }
}

export default UseOtherInfo;