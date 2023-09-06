
import {Card} from "antd";

//创建组件
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
