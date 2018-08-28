import * as React from "react"
import {isWidthUp, isWidthDown} from "@material-ui/core/withWidth"
import withWidth from "@material-ui/core/withWidth"
import * as PropTypes from 'prop-types';

class UIRouter extends React.Component<any, any> {
    static propTypes = {
        width: PropTypes.string.isRequired,
    };
    render () {
        let list = []
        let children = this.props.children
        let ctr = 0
        React.Children.forEach(children, (child: any) => {
            console.log('isWidthDown ctr', ctr)
            if (isWidthDown('xs', this.props.width)) {
                // just get first child then ignore the rest
                if (ctr == 0) {
                    // push first child always
                    list.push(child)
                }
            }
            else {
                // we are on a bigger screen  push all
                list.push(child)
            }
            ctr++
            // list.push(child)
        })
        console.log('render')
        // if (isWidthDown('xs', this.props.width)) {
        //     console.log('isWidthUp', this.props.width)
        //     return <span >isWidthDown</span>
        // }
        // console.log('nahh')
        //
        // return <div >its up dude</div>;
        return list.map(x=>x)
    }
}

export default withWidth()(UIRouter);