import React, { Component } from "react";
import { Form, Input, Button, Rate } from "antd";
import "./review-form.css";

class ReviewForm extends Component {
  state = {
    name: "",
    text: "",
    rating: 0
  };
  render() {
    const { name, text, rating } = this.state;
    return (
      <Form className="review-form">
        <Form.Item
          label="Name"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input value={name} onChange={this.handleNameChange} />
        </Form.Item>
        <Form.Item
          label="Text"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Input.TextArea value={text} onChange={this.handleTextChange} />
        </Form.Item>
        <Form.Item
          label="Rating"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
        >
          <Rate
            defaultValue={rating}
            allowHalf
            onChange={this.handleRatingChange}
          />
        </Form.Item>
        <Form.Item className="review-form-submit-section">
          <Button type="primary" htmlType="submit" onClick={this.submit}>
            Send review
          </Button>
        </Form.Item>
      </Form>
    );
  }

  handleNameChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleTextChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleRatingChange = e => {
    this.setState({
      rating: e
    });
  };

  submit = e => {
    e.preventDefault();
    console.log(this.state);
  };
}

export default ReviewForm;
