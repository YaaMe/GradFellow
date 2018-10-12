import React, { Component } from 'react';
import { Row, Col, Pagination } from 'antd';
import { connect } from 'react-redux';
import { StoryCard } from 'components';

const mapStateToProps = ({ user, fellow }) => ({ user, fellow });
const mapDispatchToProps = dispatch => ({});

class StoriesCard extends Component {
  state = {
    page: 1,
    pageSize: 6
  }
  cardRegion = cards => {
    const cols = this.state.pageSize / 2;
    if (cards.length > cols) {
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
          {cards.slice(0, cols).map(this.renderCard)}
        </Row>
        <Row gutter={16}>
          {cards.slice(cols, cols * 2).map(this.renderCard)}
        </Row>
      </div>
    )
  }
  onClick = ({ id }) => {
    this.props.history.push(`/Stories/${id}`)
  }
  renderCard = (card, i) => {
    return (
      <Col span={48 / this.state.pageSize} key={i}>
        <StoryCard {...card} onClick={e => this.onClick(card)}/>
      </Col>
    )
  }
  onChange = (page, pageSize) => {
    this.setState({ page, pageSize });
  }
  render() {
    const { page, pageSize } = this.state;
    const { user, fellow } = this.props;
    const { homeCountry, job } = user;
    const { reviews } = fellow;
    const cards = reviews.slice((page - 1) * pageSize, page * pageSize)
    return (
      <div className="StoriesCard">
        <div className="title">
          Hear all the stories told by your graduate fellows coming from <label>{homeCountry}</label><br/>
          and successfully employed as a <label>{job}</label>
        </div>
        {this.cardRegion(cards)}
        <Pagination
          onChange={this.onChange}
          hideOnSinglePage
          current={page}
          pageSize={pageSize}
          total={reviews.length}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StoriesCard);
