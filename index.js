import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import { Button, notification as antdNotification } from "antd";
import {
  CloseCircleFilled,
  InfoCircleFilled,
  CheckCircleFilled
} from "@ant-design/icons";
import Item from "antd/es/space/Item";

antdNotification.config({
  placement: "topRight",
  duration: 0,
  top: 0
});

const notification = {
  error: ({ message, description }) => {
    antdNotification.error({
      message,
      description,
      className: "notification",
      style: {
        width: 600,
        minWidth: 320,
        maxWidth: 568,
        backgroundColor: "#fff1f0",
        border: "1px solid #ffa39e",
        margin: 0,
        boxShadow: "unset"
      },
      icon: <CloseCircleFilled style={{ color: "#f5222e" }} />
    });
  },
  warning: ({ message, description }) => {
    antdNotification.warning({
      message,
      description,
      className: "notification",
      style: {
        width: 600,
        minWidth: 320,
        maxWidth: 568,
        backgroundColor: "#fffbe6",
        border: "1px solid #ffe58f",
        margin: 0,
        boxShadow: "unset"
      },
      icon: <InfoCircleFilled style={{ color: "#f9bf02" }} />
    });
  },
  success: ({ message, description }) => {
    antdNotification.success({
      message,
      description,
      className: "notification",
      style: {
        width: 600,
        height: 300,
        minWidth: 320,
        maxWidth: 568,
        backgroundColor: "#F6FFED",
        border: "1px solid #B7EB8F",
        margin: 0,
        boxShadow: "unset"
      },
      icon: <CheckCircleFilled style={{ color: "#52C51A" }} />
    });
  }
};

const errorsList = [
  {
    name: "Name",
    errors: ["Name is required","Invalid name"]
  },
  {
    name: "Type",
    errors: ["Type is required"]
  }
];

const numOfErrors = errorsList.map((x) => x.errors.length).reduce((a,b) => a + b);

const tables = 
<table style={{width: "280px", border: "1px solid blue"}}>
  <thead>
    <tr>
      <th style={{width: "70px"}}>Name</th>
      <th style={{width: "200px"}}>Description</th>
    </tr>
  </thead>
  <tbody>
    {errorsList.map((item) => (<tr>
        <td style={{width: "70px", border: "1px solid blue", verticalAlign: "top"}}>{item.name}</td>
        <td style={{width: "200px", border: "1px solid blue", verticalAlign: "top"}}>
          <h1 style={{fontStyle: "italic"}}>{`(${item.errors.length} error${item.errors.length > 1 ? "s" : ""})`}</h1>
          {item.errors.map((error, index) => (<p>{`${index + 1}. ${error}`}</p>)
          )}
        </td>
      </tr>)
     )}
  </tbody>
</table>

ReactDOM.render(
  <div>
    <Button
      type="primary"
      onClick={() =>
        notification.warning({
          message: "Notification Title",
          description:
            "This is the content of the notification. This is the content of the notification. This is the content of the notification."
        })
      }
    >
      warning
    </Button>
    <Button
      type="danger"
      onClick={() =>
        notification.error({
          message: "Notification Title",
          description:
            "This is the content of the notification. This is the content of the notification. This is the content of the notification."
        })
      }
    >
      error
    </Button>
    <Button
      type="primary"
      onClick={() => {
        notification.error({
          message: `There ${numOfErrors > 1 ? "are" : "is"} ${numOfErrors} error${numOfErrors > 1 ? "s" : ""}`,
          description:
            tables
        });
      }}
    >
      success
    </Button>
  </div>,
  document.getElementById("container")
);
