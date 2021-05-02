#### Revincx API 服务

------

Revincx API提供了一些允许公共调用的接口，具体接口列表如下：

- 随机壁纸

  请求路径：`/randPic`

  请求方法：`GET`

  请求示例：https://api.revincx.icu/randPic

  目前一共有30张壁纸，正在持续增加中...

* 二维码生成

  请求路径：`/qrcode`

  请求方法：`GET`

  请求参数：见下表

  | 参数名称     | 说明                     |
  | ------------ | ------------------------ |
  | url(必选)    | 要解析为二维码的网址链接 |
  | size(可选)   | 二维码的大小             |
  | margin(可选) | 二维码四周留白间距       |

  请求示例：https://api.revincx.icu/qrcode?url=https://blog.revincx.icu/&size=10&margin=6

<style>
    a {
        color: rgb(59, 141, 237);
        text-decoration: none
    }
    a:hover {
        text-decoration: underline;
    }
    footer{
        margin-top: 180px;
        text-align: center;
    }
</style>

<footer>By <a href="https://blog.revincx.icu/">Revincx</a></footer>

