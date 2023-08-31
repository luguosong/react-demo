import React from 'react';
import {Menu} from "antd";
import {useNavigate} from "react-router-dom";

function SiderMenu(props) {
    const items = [
        {
            label: "基础知识",
            children: [
                {key: "CreatingAndNestingComponents", label: "组件创建和使用"}
            ]
        }
    ]
    const navigate = useNavigate();
    return (
        <div>
            <Menu
                onClick={(item) => navigate(item.key)}
                style={{
                    width: "100%",
                }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items}
            />
        </div>
    );
}

export default SiderMenu;
