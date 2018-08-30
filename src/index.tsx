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
import JssProvider from "react-jss/lib/JssProvider";
import { create } from "jss";
import { createGenerateClassName, jssPreset } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Nav from "./Nav";
import Article from "./Article"
import Aside from "./Aside"
const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
/**
 * we only document.getElementById if we build using create react app
 * which strips away comments
 */
// document.getElementById("jss-insertion-point")
// jss.options.insertionPoint = 'jss-insertion-point';
jss.setup({ insertionPoint: "jss-insertion-point" });
const theme = createMuiTheme({
  palette: {
    text: {
      primary: "#fff",
      secondary: "#606984"
    },
    // divider: '#606984',
    primary: {
      main: "#606984"
    },
    secondary: {
      main: "#9baec8"
    }
  }
});
function App2(props: any) {
  store.searchRepo("javascript");
  return (
    <JssProvider jss={jss} generateClassName={generateClassName}>
      <MuiThemeProvider theme={theme}>
        <div className="vbox">
          {/*<header>Header</header>*/}
          <div className="hbox">
            <UIRouter store={store}>
              {/*<nav>*/}
              <Nav>
                {/*we can add additional router here*/}
                <SideBar store={store} />
              </Nav>
                <Article>
              <Contributors route={"contributors"} store={store} />
                </Article>
            <Aside>
              <Details route={"details"} store={store} />
            </Aside>
              {/*</aside>*/}
            </UIRouter>
          </div>

          {/*<footer>Footer</footer>*/}
        </div>
      </MuiThemeProvider>
    </JssProvider>
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
