import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({});

class StoriesCard extends Component {
  render() {
    return (
      <div className="StoriesCard">
        <div className="title">title</div>
        <div className="cards">cards</div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoriesCard);
