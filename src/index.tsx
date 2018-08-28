import * as React from "react";
import * as ReactDOM from "react-dom";
import * as style from "./style.module.css";
import "./index.css";
// import "./styles.css";

// import style from './style.module.css'
import { Hello } from "./Hello";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import MyComponent from "./MyComponent";
import UIRouter from "./UIRouter";

import store from "./MyStore";
import SideBar from "./SideBar"

function App2(props: any) {
  console.log("style", style.nice);
  store.searchRepo("javascript");
  // if (isWidthUp('sm', props.width)) {
  //     return <span >width up </span>
  //
  // }
  return (
    <div className="vbox">
      {/*<header>Header</header>*/}
      <div className="hbox">
        <UIRouter>
          <nav>
            <SideBar store={store}/>
          </nav>
          <article>
            Force full width & height. If this block is removed, the layout
            height/length will be determined by the amount of content in the
            page. That might result in a page which has a footer only a few
            inches from the top of the viewport, or one which scrolls beyond the
            viewport.
          </article>
          <aside>
            <div className={"navContent2"}>
              <h3>Right Hand side</h3>
              <p>You can find all kinds of balloon related things here.</p>
            </div>
          </aside>
        </UIRouter>
      </div>

      {/*<footer>Footer</footer>*/}
    </div>
  );
}

const Button2: React.StatelessComponent<{}> = ({ children }) => (
  <button className={style.cool}>{children}</button>
);

ReactDOM.render(
  <App2 />,
  document.getElementById("root")
  // <Hello compiler="TypeScript" framework="React" />,
  // document.getElementById("root")
);
