/*
 * @Author: beking
 * @Date: 2020-04-28 11:10:10
 * @Last Modified by: beking
 * @Last Modified time: 2020-04-30 16:18:11
 */

import React, { useState } from "react";
import MenuComponent from "./components/MenuComponent.tsx";
import MenuTitle from "./components/MenuTitle.tsx";
import MenuBlock from "./components/MenuBlock.tsx";
import MenuTable from "./components/MenuTable.tsx";

function App() {
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    if (visible) setVisible(false);
    else setVisible(true);
  };

  return visible ? (
    <MenuComponent
      contain={<div>内容区</div>}
      children={
        <>
          <div
            style={{
              borderBottomStyle: "solid",
              borderBottomColor: "#ced6e0",
              borderBottomWidth: "1px",
              display: "flex",
              flexDirection: "row",
              padding: "14px",
              alignItems: "center",
              height: "40px",
            }}
          >
            <div onClick={handleClick}>返回</div>
            <div
              style={{ color: "#353b48", fontWeight: "bold", fontSize: "18px" }}
            >
              {"项目名称"}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "6px",
              height: "212px", // 219ios
              overflow: "scroll",
            }}
          >
            <MenuTable title="首页" choosed="true" onHandle={() => {}} />
            <MenuTable title="首页" onHandle={() => {}} />
          </div>
        </>
      }
    ></MenuComponent>
  ) : (
    <MenuComponent
      contain={<div>内容区</div>}
      children={
        <>
          <MenuTitle title="项目名称" type="个人" count="2" />
          <div style={{ display: "flex", padding: "6px" }}>
            <MenuBlock name="开启离线" onHandle={() => console.log("ok")} />
            <MenuBlock name="刷新" onHandle={() => console.log("ok")} />
            <MenuBlock name="显示链接" onHandle={() => console.log("ok")} />
            <MenuBlock name="页面列表" onHandle={handleClick} />
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
            <MenuBlock name="分享" onHandle={() => console.log("ok")} />
            <MenuBlock name="退出预览" onHandle={() => console.log("ok")} />
          </div>
        </>
      }
    ></MenuComponent>
  );
}

export default App;
