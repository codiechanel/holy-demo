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
import SideBar from "./SideBar";
import Contributors from "./Contributors";
import Details from "./Details";

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
        <UIRouter store={store}>
          {/*<nav>*/}
            <SideBar  store={store} />
          {/*</nav>*/}
          {/*<article>*/}
            <Contributors route={"contributors"} store={store} />
          {/*</article>*/}
          <aside>
            <Details store={store} />
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
