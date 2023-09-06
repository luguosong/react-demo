import React, {Component} from 'react';
import {Button} from "antd";

class CCom extends Component {

    state = {
        show: true
    }

    render() {
        return (
            <div>
                <Button onClick={() => {
                    this.setState({
                        show: !this.state.show
                    })
                }}>切换</Button>
                {/*使用三元运算符*/}
                {this.state.show ? <div>显示</div> : null}
                {/*使用逻辑与运算符*/}
                {this.state.show && <div>显示</div>}
            </div>
        );
    }
}

export default CCom;
