/*
 * @Author: beking
 * @Date: 2020-04-28 11:10:10
 * @Last Modified by: beking
 * @Last Modified time: 2020-04-30 11:21:13
 */

import React from "react";
import MenuComponent from "./components/MenuComponent.tsx";
import MenuTitle from "./components/MenuTitle.tsx";
import MenuBlock from "./components/MenuBlock.tsx";

function App() {
  return (
    <MenuComponent
      contain={<div style={{ backgroundColor: "red" }}>内容区</div>}
      children={
        <>
          <MenuTitle title="项目名称" type="个人" count="2" />
          <div style={{ display: "flex", padding: "6px" }}>
            <MenuBlock
              name="开启离线"
              isRed="true"
              onHandle={() => console.log("ok")}
            />
            <MenuBlock name="刷新" onHandle={() => console.log("ok")} />
            <MenuBlock name="显示链接" onHandle={() => console.log("ok")} />
            <MenuBlock name="页面列表" onHandle={() => console.log("ok")} />
          </div>
          <div
            style={{
              display: "flex",
              padding: "6px",
              borderTopStyle: "solid",
              borderTopColor: "#ced6e0",
              borderTopWidth: "1px",
            }}
          >
            <MenuBlock
              name="分享"
              isRed="true"
              onHandle={() => console.log("ok")}
            />
            <MenuBlock name="退出预览" onHandle={() => console.log("ok")} />
          </div>
        </>
      }
    ></MenuComponent>
  );
}

export default App;
