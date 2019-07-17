import React, { Fragment } from "react";
import { Layout, Menu, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import { observer, inject, Provider } from "mobx-react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import TodoList from "../pages/TodoList";
import TodoListMobx from '../pages/TodoListMobx'

@inject("store")
@observer
export default class App extends React.Component {
  render() {
    let { store } = this.props;
    return (
      <Fragment>
        <Router>
          <Layout className="Wrapper">
            <Header className="header">
              <Link to="/">
                <div className="logo" />
              </Link>
            </Header>
            <Layout>
              <Sider width={200} style={{ background: "#fff" }}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{ height: "100%", borderRight: 0 }}
                >
                  <SubMenu
                    key="sub1"
                    title={
                      <span>
                        <Icon type="user" />
                        小功能
                      </span>
                    }
                  >
                    <Menu.Item key="1">
                      <Link to="/todolist">TodoList</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                      <Link to="/todolist-mobx">TodoList Mobx</Link>
                    </Menu.Item>
                    <Menu.Item key="3">option3</Menu.Item>
                    <Menu.Item key="4">option4</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub2"
                    title={
                      <span>
                        <Icon type="laptop" />
                        subnav 2
                      </span>
                    }
                  >
                    <Menu.Item key="5">option5</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                  </SubMenu>
                  <SubMenu
                    key="sub3"
                    title={
                      <span>
                        <Icon type="notification" />
                        subnav 3
                      </span>
                    }
                  >
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout style={{ padding: "0 24px 24px" }}>
                <Content
                  style={{
                    background: "#fff",
                    padding: 24,
                    margin: 0,
                    minHeight: 280,
                    marginTop: 20
                  }}
                >
                  {/* {store.number} */}
                  <Route path="/" exact component={Home} />
                  <Route path="/todolist" component={TodoList} />
                  <Route path="/todolist-mobx" component={TodoListMobx} />
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Router>
      </Fragment>
    );
  }
}
