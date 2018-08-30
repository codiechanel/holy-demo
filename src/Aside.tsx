import * as React from "react";
import Article from "./Article"

class Aside extends React.Component<any, any> {
  render() {
    return (
      <aside>
        <div className={"navContent"}>
          {this.props.children}
        </div>
      </aside>
    );
  }
}
export default Aside
