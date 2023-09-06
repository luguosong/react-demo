import React, {Component} from 'react';
import {Card} from "antd";

// 创建组件
class MyButton extends Component {
    render() {
        return (
            <button>子组件按钮</button>
        );
    }
}

// 使用组件
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
