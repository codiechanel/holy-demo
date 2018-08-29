import * as React from "react";
import { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
import withWidth from "@material-ui/core/withWidth";
import * as PropTypes from "prop-types";
import { observer } from "mobx-react";

@observer
class UIRouter extends React.Component<any, any> {
  static propTypes = {
    width: PropTypes.string.isRequired
  };
  matchRoute(children, routeSource) {
    console.log("matching with", routeSource);
    let result = null;
    React.Children.forEach(children, (child: any) => {
      if (routeSource == child.props.route) {
        result = child;
      }
    });

    return result;
  }
  render() {
    let routes = this.props.store.selectedRoutes;
    let routeSource = routes[routes.length - 1];
      console.log("routeSource", routeSource);
    let list = [];
    let children = this.props.children;
    let ctr = 0;
    let stop = false;
    // React.Children.forEach(children, (child: any) => {
    //   console.log("child.props.route", child.props.route);
    // });
    React.Children.forEach(children, (child: any) => {
      // console.log("isWidthDown ctr", ctr);

      if (stop) {
        // noop
      } else {
        if (isWidthDown("xs", this.props.width) && ctr == 0) {
          // just get first child then ignore the rest
          // push first child always
          if (routeSource) {
            list.push(this.matchRoute(children, routeSource));
          } else {
            list.push(child);
          }

          stop = true;
        } else if (isWidthDown("sm", this.props.width)) {
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
      // if (isWidthDown("xl", this.props.width) && ctr < 3) {
      //     // this condition will match all
      //     // let's push 2 children and ignore the 3rd
      //     list.push(child);
      // }

      ctr++;
      // list.push(child)
    });
    console.log("render");
    // if (isWidthDown('xs', this.props.width)) {
    //     console.log('isWidthUp', this.props.width)
    //     return <span >isWidthDown</span>
    // }
    // console.log('nahh')
    //
    // return <div >its up dude</div>;
    return list.map(x => x);
  }
}

export default withWidth()(UIRouter);
