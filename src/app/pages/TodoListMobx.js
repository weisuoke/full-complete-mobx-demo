import React from "react";
import { Button, Table, Divider, Modal } from "antd";
import TodoForm from "./TodoForm";

export default class TodoList extends React.Component {
  state = {
    dataSource: [],
    modalVisible: false,
    modalTitle: "新增Todo",
    modalType: "ADD",
    editInfo: {}
  };

  showModal = () => {
    this.setState({ modalVisible: true });
  };

  hideModal = () => {
    this.setState({ modalVisible: false });
  };

  addTodoItem = todoItem => {
    // 获取新增数据
    todoItem.id =
      this.state.dataSource[this.state.dataSource.length - 1].id + 1;

    this.setState(
      {
        dataSource: [...this.state.dataSource, todoItem],
        modalVisible: false
      },
      () => {
        localStorage.setItem(
          "mobx-todos",
          JSON.stringify(this.state.dataSource)
        );
      }
    );
  };

  editTodoItem = todoItem => {
    let list = this.state.dataSource || [];
    list = list.map(item => {
      return item.id === todoItem.id ? todoItem : item;
    });
    this.setState(
      {
        dataSource: list,
        modalVisible: false
      },
      () => {
        localStorage.setItem("mobx-todos", JSON.stringify(list));
      }
    );
  };

  handleEdit = (id, info) => {
    this.setState({
      modalTitle: "编辑Todos",
      modalVisible: true,
      modalType: "EDIT",
      editInfo: JSON.parse(info)
    });
  };

  handleDelete = id => {
    let _this = this;
    Modal.confirm({
      title: "你要删除这条记录吗？",
      onOk: function() {
        _this.setState(
          { dataSource: _this.state.dataSource.filter(item => item.id !== id) },
          () => {
            localStorage.setItem(
              "mobx-todos",
              JSON.stringify(_this.state.dataSource)
            );
          }
        );
      }
    });
  };

  // componentWillMount() {
  //   localStorage.setItem('mobx-todos', JSON.stringify(dataSource))
  // }

  componentDidMount() {
    let value = localStorage.getItem("mobx-todos");
    this.setState({ dataSource: JSON.parse(value) });
  }

  render() {
    let columns = [
      { title: "创建时间", dataIndex: "createdTime", key: "createdTime" },
      { title: "项目名称", dataIndex: "name", key: "name" },
      { title: "描述", dataIndex: "desc", key: "desc" },
      { title: "状态", dataIndex: "status", key: "status" },
      { title: "分类", dataIndex: "category", key: "category" },
      {
        title: "操作",
        key: "action",
        render: (text, record) => (
          <span>
            <a
              href="javascript:;"
              onClick={() => this.handleEdit(record.id, JSON.stringify(record))}
            >
              编辑
            </a>
            <Divider type="vertical" />
            <a href="javascript:;" onClick={() => this.handleDelete(record.id)}>
              删除
            </a>
          </span>
        )
      }
    ];
    return (
      <div className="TodoList__Wrapper">
        <Button type="primary" onClick={this.showModal}>
          新增Todo
        </Button>
        <div style={{ marginTop: 20 }}>
          <Table columns={columns} dataSource={this.state.dataSource} />
        </div>
        {this.state.modalVisible ? (
          <TodoForm
            visible={this.state.modalVisible}
            title={this.state.modalTitle}
            visibleHandle={this.hideModal}
            addTodoItem={this.addTodoItem}
            editTodoItem={this.editTodoItem}
            type={this.state.modalType}
            editInfo={this.state.editInfo}
          />
        ) : null}
      </div>
    );
  }
}
