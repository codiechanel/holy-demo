import * as React from "react";
import { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
import withWidth from "@material-ui/core/withWidth";
import * as PropTypes from "prop-types";
import { observer } from "mobx-react";
@observer
class Details extends React.Component<any, any> {
  render() {
    console.log("render");
    let o = this.props.store.selectedContributor;
    let content = <div>its up dude</div>;
    if (o.size < 1) {
      return content;
    }

    let item = o.toJSON();

    return (
      <div className={"navContent"}>
        <div className={"innerNavContent"}>
          <div>{item.login}</div>
        </div>
      </div>
    );
  }
}

export default Details;
