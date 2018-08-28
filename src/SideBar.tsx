import * as React from "react";
import MyComponent from "./MyComponent";
import { observer } from "mobx-react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
@observer
class SideBar extends React.Component<any, any> {
  render() {
    let arr = this.props.store.repos.entries();
    let list: any = Array.from(arr);

    return (
      <div className={"navContent"}>
        <div className={"innerNavContent"}>
          <div style={{  }}>
            <h3>We like balloons</h3>
            <p>
              You can find all kinds of balloon related things here and there
            </p>
          </div>
          <div style={{ flex: 1, overflowY: "auto" }}>
            <List style={{ color: "white" }}>
              {list.map(item => (
                <ListItem
                  style={{ color: "white" }}
                  button
                  divider
                  key={item[0]}
                >
                  <ListItemText
                    primary={item[1].name}
                    primaryTypographyProps={{ color: "inherit" }}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
