import * as React from "react";
import { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
import withWidth from "@material-ui/core/withWidth";
import * as PropTypes from "prop-types";
import { observer } from "mobx-react";

@observer
class ResponsiveRouter extends React.Component<any, any> {
  static propTypes = {
    width: PropTypes.string.isRequired
  };

  render() {
    console.log("ResponsiveRouter", this.props.width);
    if (isWidthDown("xs", this.props.width)) {
      // return default first child immediately
      return this.props.children[0];
    }

    let list = [];
    let children = this.props.children;
    let ctr = 0;
    let stop = false;

    React.Children.forEach(children, (child: any) => {
      if (stop) {
        // noop
      } else {
        if (isWidthDown("sm", this.props.width)) {
          // let's push 2 children and ignore the 3rd
          if (ctr < 2) {
            list.push(child);
          } else {
            stop = true;
          }
        } else {
          // we have a big screen push em all
          list.push(child);
        }
      }

      ctr++;
    });
    return list.map(x => x);
  }
}

export default withWidth()(ResponsiveRouter);
