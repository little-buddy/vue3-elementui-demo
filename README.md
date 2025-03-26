# Vue3 ElementUI Demo

### unocss 的使用

```
由于与 tailwindcss 的设计目标不同，UnoCSS不支持 TailwindCSS 的插件系统或配置，这意味着它可能会使从高度定制的 Tailwind CSS 项目迁移变得更加困难。
```

### unocss 请求字体网络异常

```
Failed to fetch web fonts: https://fonts.googleapis.com/css2?family=DM+Sans&family=DM+Serif+Display&family=DM+Mono&display=swap

我本地是连接vpn的，只是node请求的时候没有走vpn，所以导致它访问异常

配置node代理即可解决
npm config set proxy http://127.0.0.1:7890
npm config set https-proxy http://127.0.0.1:7890

```

### 主题颜色修改

```
它这个脚手架是修改了主题颜色的，具体还需要我们重新配置
它这里的 primary 是绿色的
```

### eslint中对于prettier的配置

```
对于js部分，它基础的格式化，始终觉得没有 prettier好用
所以打算重新把 prettier 配置上

eslint-config-prettier 这个文件包是关闭 eslint 对 prettier 有相关冲突的规则

发现现在 vue3 的项目格式化只能选择 volar 和 eslint，不能选择prettier
然后进行配置 prettier的时候，vue的文件也不会被 prettier 自动格式化，这个就很头疼

prettier .  --write 执行的时候却可以运行

prettier 和 eslint 是可以共存的，冲突部分需要 eslint-config-prettier 来解决
```
