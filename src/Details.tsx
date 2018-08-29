import * as React from "react";
import { isWidthUp, isWidthDown } from "@material-ui/core/withWidth";
import withWidth from "@material-ui/core/withWidth";
import * as PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { observer } from "mobx-react";
@observer
class Details extends React.Component<any, any> {
    static propTypes = {
        width: PropTypes.string.isRequired
    };
  render() {
    console.log("render");
    let o = this.props.store.selectedContributor;
      let backButton = null;

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
      let content = <aside>
          {backButton}
          <div>its up dude</div></aside>;
    if (o.size < 1) {
      return content;
    }

    let item = o.toJSON();
      {/*<aside>*/}
    return (
        <aside>
        <div className={"navContent"}>
          <div className={"innerNavContent"}>
              {backButton}
            <div>{item.login}</div>
          </div>
        </div></aside>

    )
  }
}

export default withWidth()(Details)
