/*
 * @Author: beking
 * @Date: 2020-04-28 11:10:10
 * @Last Modified by: beking
 * @Last Modified time: 2020-04-29 14:52:53
 */

import React from "react";
import MenuComponent from "./components/menuComponent.tsx";

function App() {
  return (
    <MenuComponent
      contain={<div>内容区</div>}
      children={
        <>
          <div
            style={{
              height: "20%",
              borderBottomStyle: "solid",
              borderBottomColor: "#ced6e0",
              borderBottomWidth: "1px",
            }}
          >
            标题
          </div>
          <div>功能区</div>
        </>
      }
    ></MenuComponent>
  );
}

export default App;
