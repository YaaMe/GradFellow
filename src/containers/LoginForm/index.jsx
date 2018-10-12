import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Form, Button, Input, Icon } from 'antd';

const mapStateToProps = undefined;
const mapDispatchToProps = dispatch => ({});
class LoginForm extends Component {
  handleSubmit = e => {
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Item>
            {getFieldDecorator('userName', {})(
               <Input
                 prefix={<Icon type="user" style={{ color: 'rgba(0,0,0, .25)'}}/>}
                 placeholder="Username"
               />
             )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {})(
               <Input
                 prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0, .25)'}}/>}
                 type="password"
                 placeholder="Password"
               />
             )}
          </Form.Item>
          <Form.Item>
            <Button type="primary">Log in</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginForm));
