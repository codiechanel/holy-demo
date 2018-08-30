import * as React from "react";
import MyComponent from "./MyComponent";
import { observer } from "mobx-react";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import * as PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Article from "./Article"
@observer
class Contributors extends React.Component<any, any> {
  static propTypes = {
    width: PropTypes.string.isRequired
  };
  render() {
    let arr = this.props.store.contributors.entries();
    let list: any = Array.from(arr);

    let backButton = null;
    let desc = `You can find all kinds You can find all kinds You can find all
                kinds You can find all kinds You can find all kinds You can find all
                kinds You can find all kinds You can find all kinds You can find all
                kinds You can find all kinds You can find all kinds You can find all
                kinds`

    if (isWidthDown("xs", this.props.width)) {
      /**
       * since its xs, we can assume we are the only one on display
       */
      backButton = (
        <Button
          style={{ margin: 5 }}
          variant="contained"
          color="primary"
          onClick={() => {
            this.props.store.goBack();
          }}
        >
          Back
        </Button>
      );
    }

    /**
       *   the innerNavContent's purpose is to organize the flow * of this
       section with the list...  it allows the list to be pulled upwards
       and to set min-width zero for the firefox scroll fix
       */

    return (
      /**
       * the function of navContent is to enforce the height limit for it's
       * direct child...and to occupy the whole space from parent nav
       */
          <div className={"innerNavContent"}>
            <div style={{}}>
              {backButton}
              <h3>We like balloons</h3>
              <p>You can find all kinds</p>
            </div>
            <div style={{ flex: 1, overflowY: "auto" }}>
              <List style={{ color: "white" }}>
                {list.map(item => (
                  <ListItem
                    style={{ color: "white" }}
                    button
                    divider
                    onClick={() => {
                      console.log("click", item[1]);
                        this.props.store.selectContributor(item[0], "details");
                        // if (isWidthDown("xs", this.props.width)) {
                        //     this.props.store.selectContributor(item[0], "details");
                        // }
                        // else {
                        //     this.props.store.selectContributor(item[0]);
                        // }
                    }}
                    key={item[0]}
                  >
                    <ListItemText
                      primary={item[1].login}
                      // secondary={desc}
                      primaryTypographyProps={{ color: "inherit" }}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
    );
  }
}

export default withWidth()(Contributors);
