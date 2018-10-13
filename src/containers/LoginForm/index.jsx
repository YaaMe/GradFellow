import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Form, Button, Input, Icon } from 'antd';
import { login } from 'actions/user';

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = dispatch => ({
  login: values => dispatch(login(values))
});
class LoginForm extends Component {
  handleSubmit = e => {
    this.props.onClose(e);
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.login(values);
      }
    })
  }
  login = e => {
    this.props.onClose(e);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { user } = this.props;
    if (user.isLogin) {
      return (
        <div>
          <Button type="primary" onClick={this.logout}>Log out</Button>
        </div>
      )
    }
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
            <Button type="primary" htmlType="submit">Log in</Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(LoginForm));
