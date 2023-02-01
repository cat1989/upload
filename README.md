# @cat1989/upload
选择文件 API。
## 安装
```shell
npm i @cat1989/upload
```
## 使用
```js
import upload from '@cat1989/upload';

upload().then((files) => {
    console.log(files);
});

// 自定义格式
upload(".doc;").then((files) => {
    console.log(files);
});
```
