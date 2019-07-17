import React from "react";
import { Modal, Button, Form, Input, DatePicker, Select } from "antd";
import moment from "moment";

const { Option } = Select;

class TodoForm extends React.Component {
  state = {
    editId: null
  };

  onOk = e => {
    this.props.form.validateFields((err, fieldsValue) => {
      if (!err) {
        const values = {
          ...fieldsValue,
          createdTime: fieldsValue["createdTime"].format("YYYY-MM-DD")
        };
        
        if (this.props.type === "ADD") {
          this.props.addTodoItem(values);
        } else if (this.props.type === "EDIT") {
          this.props.editTodoItem(values);
        }
      }
    });
  };

  componentDidMount() {
    if (this.props.type === "EDIT") {
      this.props.form.setFieldsValue({
        id: this.props.editInfo["id"],
        createdTime: moment(this.props.editInfo["createdTime"]),
        name: this.props.editInfo["name"],
        desc: this.props.editInfo["desc"],
        category: this.props.editInfo["category"],
        status: this.props.editInfo["status"]
      });
    }
  }

  render() {
    const { getFieldDecorator, setFieldsValue } = this.props.form;
    const config = {
      rules: [{ type: "object", required: true, message: "选择创建日期!" }]
    };
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 4 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 }
      }
    };

    return (
      <Modal
        title={this.props.title}
        okText="确定"
        cancelText="取消"
        visible={this.props.visible}
        onOk={this.onOk}
        onCancel={() => this.props.visibleHandle()}
      >
        <Form {...formItemLayout}>
          {this.props.editInfo.id ? (
            <Form.Item label="id">
              {getFieldDecorator("id", {
                rules: [{ required: true, message: "请输入项目名称" }]
              })(<Input />)}
            </Form.Item>
          ) : null}
          <Form.Item label="创建日期">
            {getFieldDecorator("createdTime", config)(<DatePicker />)}
          </Form.Item>
          <Form.Item label="项目名称">
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "请输入项目名称" }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="项目描述">
            {getFieldDecorator("desc", {
              rules: [{ required: true, message: "请输入项目名称" }]
            })(<Input />)}
          </Form.Item>
          <Form.Item label="分类">
            {getFieldDecorator("category", {
              rules: [
                {
                  required: true,
                  message: "请选择 Todo 分类",
                  types: "array"
                }
              ]
            })(
              <Select placeholder="请选择 Todo 分类">
                <Option value="react">React</Option>
                <Option value="vue">Vue</Option>
                <Option value="webpack">Webpack</Option>
              </Select>
            )}
          </Form.Item>
          <Form.Item label="状态">
            {getFieldDecorator("status", {
              rules: [
                {
                  required: true,
                  message: "请选择 Todo 分类",
                  types: "array"
                }
              ]
            })(
              <Select placeholder="请选择 Todo 状态">
                <Option value="start">开始</Option>
                <Option value="doing">进行中</Option>
                <Option value="delete">删除</Option>
                <Option value="completed">完成</Option>
              </Select>
            )}
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

const WrappedTimeRelatedForm = Form.create()(TodoForm);

export default WrappedTimeRelatedForm;
