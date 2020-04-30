/*
 * @Author: beking
 * @Date: 2020-04-29 16:40:05
 * @Last Modified by: beking
 * @Last Modified time: 2020-04-30 11:02:24
 */

import React from "react";
import "./Style.css";

interface IProps {
  name: string;
  icon?: string;
  isRed?: boolean;
  onHandle?: () => void;
}

const MenuBlock = (props: IProps) => {
  const {
    name = "未命名",
    // icon = null,
    onHandle = () => {},
    // isRed = false,
  } = props;

  return (
    <div className="IconBox">
      <div
        style={{
          borderRadius: "10px",
          backgroundColor: "white",
          height: "55px",
          width: "55px",
          marginBottom: "8px",
        }}
        onClick={onHandle}
      >
        图标
      </div>
      <div style={{ fontSize: "14px", color: "#84817a" }}>{name}</div>
    </div>
  );
};
export default MenuBlock;
