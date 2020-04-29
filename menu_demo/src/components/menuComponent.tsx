import React, { useEffect } from "react";
import Core from "@any-touch/core";
import Tap from "@any-touch/tap";

interface IProps {
  cancelButtonStyle?: React.CSSProperties;
  children: React.ReactChild;
}

const MenuComponent = (props: IProps) => {
  const { cancelButtonStyle = null, children = null } = props;

  useEffect(() => {
    Core.use(Tap, { pointLength: 2 });
    const handler = document.getElementById("handler");
    const at = new Core(handler);
    const drawer = document.getElementById("drawer");
    at.on("tap", (ev) => {
      drawer.style.transform = "translateY(-40vh)";
      drawer.style.transition = "all 500ms";
    });
  });

  const hideMenu = () => {
    Core.use(Tap, { pointLength: 1 });
    const cancel = document.getElementById("cancel");
    const att = new Core(cancel);
    const drawer = document.getElementById("drawer");
    att.on("tap", (ev) => {
      drawer.style.transform = "translateY(40vh)";
      drawer.style.transition = "all 500ms";
    });
  };

  return (
    <div style={{ height: "120vh" }}>
      <div style={{ height: "100vh" }} id="handler"></div>
      <div
        style={{
          height: "40vh",
          width: "100%",
          backgroundColor: "#F5F5F5",
          display: "flex",
          flexDirection: "column",
        }}
        id="drawer"
      >
        <div style={{ flex: 1 }}>{children}</div>
        <div
          style={{
            height: "20%",
            borderTopStyle: "solid",
            borderTopColor: "#ced6e0",
            borderTopWidth: "1px",
          }}
          id="cancel"
          onClick={hideMenu}
        >
          取消
        </div>
      </div>
    </div>
  );
};
export default MenuComponent;
