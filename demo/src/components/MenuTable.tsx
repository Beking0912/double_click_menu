/*
 * @Author: beking
 * @Date: 2020-04-30 15:50:59
 * @Last Modified by: beking
 * @Last Modified time: 2020-04-30 16:12:12
 */

import React from "react";

interface IProps {
  title: string;
  onHandle?: () => void;
  choosed?: boolean;
}

const MenuTitle = (props: IProps) => {
  const { title = "页面", choosed = false, onHandle = () => {} } = props;

  return (
    <div
      style={{
        padding: "14px",
        paddingLeft: "20px",
        fontSize: "20px",
        color: "#353b48",
        borderBottomStyle: "solid",
        borderBottomColor: "#ecf0f1",
        borderBottomWidth: "1px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
      onClick={onHandle}
    >
      <div>{title}</div>
      {choosed ? <div style={{ color: "red" }}>✓</div> : null}
    </div>
  );
};
export default MenuTitle;
