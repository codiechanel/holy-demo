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
        let result = null
        console.log('routeSource', routeSource)

        React.Children.forEach(children, (child: any) => {

            if (routeSource == child.props.route) {
                result = child
            }
        })

        return result
    }
    render() {
        let routes = this.props.store.selectedRoutes;
        let routeSource = routes[routes.length - 1];
        console.log('ui router', routeSource )
        // let arr = React.Children.toArray(this.props.children)
        let  viewPortSize = this.props.viewPortSize
        //
        if (viewPortSize && !isWidthDown(viewPortSize, this.props.width)) {
          return this.props.children[0]
        }
        else {
            return this.matchRoute(this.props.children, routeSource)
        }


    }
}

export default withWidth()(UIRouter)
