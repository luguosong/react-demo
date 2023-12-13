//{% raw %}
import React, {forwardRef, useRef} from 'react';

function FCom(props) {

    const ref = useRef(0);

    const inputRef = useRef(null);

    const myInputRef = useRef(null);

    return (
        <div>
            <div>
                {ref.current}
                <button onClick={() => {
                    ref.current += 1;
                    alert("ref.current:" + ref.current)
                }}>ref加1（ref改变，组件不会重新渲染）
                </button>
            </div>

            <div>
                <input ref={inputRef}/>
                <button onClick={() => {
                    inputRef.current.focus();
                }}>聚焦(ref一般用来操作DOM元素)
                </button>
            </div>

            <div>
                <MyInput ref={myInputRef}/>
                <button onClick={() => {
                    myInputRef.current.focus();
                }}>聚焦(ref操作自定义组件)
                </button>
            </div>
        </div>
    );
}

const MyInput = forwardRef((props, ref) => {
    return <input {...props} ref={ref} />;
});

export default FCom;
//{% endraw %}
