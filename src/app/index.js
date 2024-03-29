import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { observable, action } from "mobx";
import { observer, inject, Provider } from "mobx-react";
import App from "./containers/App";

import { Layout, Menu, Breadcrumb, Icon } from "antd";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
import "antd/dist/antd.css";
import "./style.css";

class Store {
  @observable number = 0;

  @action addNumber = () => (this.number += 1);
}

// @inject("store")
// @observer
// class App extends React.Component {
//   render() {
//     const { store } = this.props;
//     return (
//       <Fragment>
//         <Layout className="Wrapper">
//           <Header className="header">
//             <div className="logo" />
//           </Header>
//           <Layout>
//             <Sider width={200} style={{ background: "#fff" }}>
//               <Menu
//                 mode="inline"
//                 defaultSelectedKeys={["1"]}
//                 defaultOpenKeys={["sub1"]}
//                 style={{ height: "100%", borderRight: 0 }}
//               >
//                 <SubMenu
//                   key="sub1"
//                   title={
//                     <span>
//                       <Icon type="user" />
//                       小功能
//                     </span>
//                   }
//                 >
//                   <Menu.Item key="1">TodoList</Menu.Item>
//                   <Menu.Item key="2">option2</Menu.Item>
//                   <Menu.Item key="3">option3</Menu.Item>
//                   <Menu.Item key="4">option4</Menu.Item>
//                 </SubMenu>
//                 <SubMenu
//                   key="sub2"
//                   title={
//                     <span>
//                       <Icon type="laptop" />
//                       subnav 2
//                     </span>
//                   }
//                 >
//                   <Menu.Item key="5">option5</Menu.Item>
//                   <Menu.Item key="6">option6</Menu.Item>
//                   <Menu.Item key="7">option7</Menu.Item>
//                   <Menu.Item key="8">option8</Menu.Item>
//                 </SubMenu>
//                 <SubMenu
//                   key="sub3"
//                   title={
//                     <span>
//                       <Icon type="notification" />
//                       subnav 3
//                     </span>
//                   }
//                 >
//                   <Menu.Item key="9">option9</Menu.Item>
//                   <Menu.Item key="10">option10</Menu.Item>
//                   <Menu.Item key="11">option11</Menu.Item>
//                   <Menu.Item key="12">option12</Menu.Item>
//                 </SubMenu>
//               </Menu>
//             </Sider>
//             <Layout style={{ padding: "0 24px 24px" }}>
//               <Breadcrumb style={{ margin: "16px 0" }}>
//                 <Breadcrumb.Item>Home</Breadcrumb.Item>
//                 <Breadcrumb.Item>List</Breadcrumb.Item>
//                 <Breadcrumb.Item>App</Breadcrumb.Item>
//               </Breadcrumb>
//               <Content
//                 style={{
//                   background: "#fff",
//                   padding: 24,
//                   margin: 0,
//                   minHeight: 280
//                 }}
//               >
//                 Content
//               </Content>
//             </Layout>
//           </Layout>
//         </Layout>
//       </Fragment>
//     );
//   }
// }

ReactDOM.render(
  <Provider store={new Store()}>
    <App />
  </Provider>,
  document.getElementById("root")
);
