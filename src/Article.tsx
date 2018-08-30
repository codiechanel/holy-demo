import * as React from "react";

class Article extends React.Component<any, any> {
  render() {
    return (
      <article>
        <div className={"navContent"}>
          {this.props.children}
        </div>
      </article>
    );
  }
}
export default Article;
