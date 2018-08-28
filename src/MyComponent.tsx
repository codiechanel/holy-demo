import * as React from "react"
import {isWidthUp, isWidthDown} from "@material-ui/core/withWidth"
import withWidth from "@material-ui/core/withWidth"
import * as PropTypes from 'prop-types';

class MyComponent extends React.Component<any, any> {
    static propTypes = {
        width: PropTypes.string.isRequired,
    };
    render () {
        console.log('render')
        if (isWidthDown('xs', this.props.width)) {
            console.log('isWidthUp', this.props.width)
            return <span >isWidthDown</span>
        }
        console.log('nahh')

        return <div >its up dude</div>;
    }
}

export default withWidth()(MyComponent);