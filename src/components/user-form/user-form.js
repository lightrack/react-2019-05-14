import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import "./user-form.css";
import { sendOrder } from "../../ac";
import { connect } from "react-redux";
import i18n from "../../decorators/i18n";

class UserForm extends Component {
  state = {
    name: "",
    phone: "",
    address: ""
  };
  render() {
    const { name, phone, address } = this.state;
    const { t } = this.props;
    return (
      <Form className="user-form">
        <Form.Item
          label={t("name")}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input value={name} onChange={this.handleNameChange} />
        </Form.Item>
        <Form.Item
          label={t("phone number")}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input value={phone} onChange={this.handlePhoneChange} />
        </Form.Item>
        <Form.Item
          label={t("address")}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input.TextArea value={address} onChange={this.handleAddressChange} />
        </Form.Item>
        <Form.Item className="user-form-submit-section">
          <Button type="primary" htmlType="submit" onClick={this.submit}>
            {t("send order")}
          </Button>
        </Form.Item>
      </Form>
    );
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
    this.props.setUser &&
      this.props.setUser({
        name: e.target.value
      });
  };

  handlePhoneChange = e => {
    this.setState({
      phone: e.target.value
    });
  };

  handleAddressChange = e => {
    this.setState({
      address: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    this.props.sendOrder(this.state);
  };
}

export default connect(
  null,
  { sendOrder }
)(i18n(UserForm));
