/*
 * @Author: beking
 * @Date: 2020-04-29 16:40:21
 * @Last Modified by: beking
 * @Last Modified time: 2020-04-30 16:22:01
 */

import React, { useEffect } from "react";
import Core from "@any-touch/core";
import Tap from "@any-touch/tap";

interface IProps {
  // cancelButtonStyle?: React.CSSProperties;
  children: React.ReactChild;
  contain: React.ReactChild;
}

const MenuComponent = (props: IProps) => {
  const { children = null, contain = null } = props;

  useEffect(() => {
    Core.use(Tap, { pointLength: 2, name: "tapTwice" });
    const handler: any = document.getElementById("handler");
    const at = new Core(handler);
    const drawer: any = document.getElementById("drawer");
    at.on("tapTwice", (ev) => {
      drawer.style.transform = "translateY(-350px)";
      drawer.style.transition = "all 500ms";
    });

    Core.use(Tap, { pointLength: 1, name: "tapOnce" });
    const cancel: any = document.getElementById("cancel");
    const att = new Core(cancel);
    att.on("tapOnce", (ev) => {
      drawer.style.transform = "translateY(350px)";
      drawer.style.transition = "all 500ms";
    });
  });

  return (
    <div>
      <div style={{ height: "100vh" }} id="handler">
        {contain}
      </div>
      <div
        style={{
          height: "300px",
          width: "100%",
          backgroundColor: "#F5F5F5",
          display: "flex",
          flexDirection: "column",
          position:'fixed'
        }}
        id="drawer"
      >
        <div style={{ flex: 1 }}>{children}</div>
        <div
          style={{
            height:"50px",
            lineHeight:"50px",
            borderTopStyle: "solid",
            borderTopColor: "#ced6e0",
            borderTopWidth: "1px",
            backgroundColor: "white",
            textAlign: "center",
            fontSize: "20px",
          }}
          id="cancel"
        >
          取消
        </div>
      </div>
    </div>
  );
};
export default MenuComponent;
