//创建组件
import {Card} from "antd";

function MyButton() {
    return (
        <div>
            <button>子组件按钮</button>
        </div>
    );
}

// 使用组件
export default function FCom() {
    return (
        <Card title="父组件">
            <MyButton/>
        </Card>
    );
}
