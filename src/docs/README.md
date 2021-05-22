## Revincx API 服务

------

Revincx API提供了一些允许公共调用的接口，具体接口列表如下：

#### 随机壁纸

  请求路径：`/randPic`

  请求方法：`GET`

  请求示例：[https://api.revincx.icu/randPic](https://api.revincx.icu/randPic)

  目前一共有452张壁纸，正在持续增加中...

#### 二维码生成

  请求路径：`/qrcode`

  请求方法：`GET`

  请求参数：见下表

  | 参数名称     | 说明                     |
  | ------------ | ------------------------ |
  | url(必选)    | 要解析为二维码的网址链接 |
  | size(可选)   | 二维码的大小             |
  | margin(可选) | 二维码四周留白间距       |

  请求示例：[https://api.revincx.icu/qrcode?url=https://blog.revincx.icu/&size=10&margin=6](https://api.revincx.icu/qrcode?url=https://blog.revincx.icu/&size=10&margin=6)

#### 短链接生成 **(beta)**

  请求路径：`/renexUrl`

  请求方法：`POST`

  请求参数：见下表

  | 参数名称     | 说明                      |
  | ------------ | ------------------------- |
  | action(必选) | 请求动作，目前只能为`new` |
  | url(必选)    | 需要转成短链的原链接      |

  返回参数：见下表

  | 参数名称 | 说明                                  |
  | -------- | ------------------------------------- |
  | code     | 状态码，`200`为请求成功，其他为失败。 |
  | message  | 提示信息                              |
  | urlPath  | 短链接路径，一般为四位的62进制字符串  |

  短链接域名：`https://renex.me`

