import React from 'react';
import ReactDOM from 'react-dom';

import Home from "./pages/home";

ReactDOM.render(<Home />, document.getElementById('root'));

// if (module.hot) {
//     module.hot.dispose(function () {
//         console.log('模块即将被替换时');
//     });

//     module.hot.accept(function () {
//         console.log('模块或其依赖项之一刚刚更新时');// 模块或其依赖项之一刚刚更新时
//     });
// }