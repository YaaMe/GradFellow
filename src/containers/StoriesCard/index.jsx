import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import { StoryCard } from 'components';

const mapStateToProps = ({ user, fellow }) => ({ user, fellow });
const mapDispatchToProps = dispatch => ({});

class StoriesCard extends Component {
  cardRegion = cards => {
    if (cards.length > 3) {
      return (
        <div className="cards">
          <Row gutter={16}>
            {cards.map(this.renderCard)}
          </Row>
        </div>
      )
    }
    return (
      <div className="cards">
        <Row gutter={16}>
          {cards.slice(0, 3).map(this.renderCard)}
        </Row>
        <Row gutter={16}>
          {cards.slice(3, 6).map(this.renderCard)}
        </Row>
      </div>
    )
  }
  renderCard = (card, i) => {
    return (
      <Col span={8} key={i}>
        <StoryCard {...card} />
      </Col>
    )
  }
  render() {
    const { user, fellow } = this.props;
    const { homeCountry, job } = user;
    const { reviews } = fellow;
    const cards = reviews;
    return (
      <div className="StoriesCard">
        <div className="title">
          Hear all the stories told by your graduate fellows coming from <label>{homeCountry}</label><br/>
           and successfully employed as a <label>{job}</label>
        </div>
        {this.cardRegion(cards)}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoriesCard);
