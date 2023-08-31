import React, {Component} from 'react';
import {Card} from "antd";

class MyButton extends Component {
    render() {
        return (
            <button>子组件按钮</button>
        );
    }
}

class CCom extends Component {
    render() {
        return (
            <Card title="父组件">
                <MyButton/>
            </Card>
        );
    }
}

export default CCom;
