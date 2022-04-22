import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { List } from "antd";
import ReactDragListView from "react-drag-listview";

import "./index.css";
import TestModal from "./TestModal";

const data = [
  "row 1.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires.",
  "X Japanese princess to wed commoner.",
  "X Australian walks 100km after outback crash.",
  "X Man charged over missing wedding girl.",
  "X Los Angeles battles huge wildfires.",
  "Y Japanese princess to wed commoner.",
  "Y Australian walks 100km after outback crash.",
  "Y Man charged over missing wedding girl.",
  "Y Los Angeles battles huge wildfires."
];

class DraggableList extends React.Component {
  state = {
    data
  };

  onDragEnd = (fromIndex, toIndex) => {
    if (toIndex < 0) return; // Ignores if outside designated area

    const items = [...this.state.data];
    const item = items.splice(fromIndex, 1)[0];
    items.splice(toIndex, 0, item);
    this.setState({ data: items });
  };

  render() {
    return (
      <div>
        <h3 style={{ margin: "16px 0" }}>Small Size</h3>
        <ReactDragListView
          nodeSelector=".ant-list-item.draggble"
          onDragEnd={this.onDragEnd}
        >
          <List
            size="small"
            bordered
            dataSource={this.state.data}
            renderItem={(item) => {
              return (
                <List.Item actions={["x"]} className="draggble">
                  <List.Item.Meta title={item} description={<TestModal />} />
                </List.Item>
              );
            }}
          />
        </ReactDragListView>
      </div>
    );
  }
}

ReactDOM.render(<DraggableList />, document.getElementById("container"));
