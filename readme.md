1. mkdir -> cd 创建文件夹转到当前文件夹目录下
2. npm init 创建package.json
3. npm i -S react react-dom 添加react
4. touch .babelrc ->
{
  "presets": ["react"]
} 配置babel
5. npm i -D babel-preset-react parcel-bundler 添加babel
6. 新建 index.html 文件 -> 新建 index.js 文件
7. "start": "parcel public/index.html" 添加打包命令
8. npm start
9. touch .gitignore -> 
.cache
dist
node_modules
10. "start": "parcel public/index.html -p <port number>" 修改端口
11. touch .postcssrc ->
```
{
  "modules": true,
  "plugins": {
    "autoprefixer": {
      "grid": true
    }
  }
}
``` 配置postcss

参考：https://segmentfault.com/a/1190000012327384


待解决：
1. 打包相对路径问题
2. 配置less环境
