import React from 'react';
import {HashRouter, Route, Routes} from "react-router-dom";
import DefaultLayout from "../layout/DefaultLayout/DefaultLayout";
import CreatingAndNestingComponents from "../views/basic/CreatingAndNestingComponents";
import {Result} from "antd";


function NotFound() {
    return (<Result
        status="404"
        title="404"
        subTitle="Sorry, 页面不存在"
    />)
}

function Main() {
    return (<div>
        主页
    </div>)
}


export default function MainRouter(props) {
    return (
        <HashRouter>
            <Routes>

                <Route element={<DefaultLayout/>}>
                    {/*基础知识*/}
                    <Route path="CreatingAndNestingComponents" element={<CreatingAndNestingComponents/>}/>


                    <Route path='/' element={<Main/>}/>
                    <Route path='*' element={<NotFound/>}/>
                </Route>


            </Routes>
        </HashRouter>

    );
}
