import * as React from "react";

class Nav extends React.Component<any, any> {
  render() {
    return (
      <nav>
        <div className={"navContent"}>
          {this.props.children}
        </div>
      </nav>
    );
  }
}
export default Nav;
