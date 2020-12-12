1. HTML 文件都由不同的标签构成的。
    ```html
    <HTML lang="en">
    <head>
        <meta charset="UTF-8">
        <title>HTML基本语法</title>
    </head>
    <body>
    <p>段落标签</p>
    <h1>我是一个大标题</h1>
    <a href="https://www.baidu.com" title="百度一下">百度</a>
    </body>
    </HTML>
    ```

2. 标签分为双标签和单标签。

   ```html
   <!-- img标签为单标签，没有尾标签和内容 -->
   <img src='https://www.imooc.com/static/img/index/logo.png' alt='慕课logo'>
   
   <!-- p标签为双标签，有尾标签和内容 -->
   <p>这是一段话</p>
   ```

3. 双标签都是成对出现的。

   ```html
   <!-- p标签为双标签，有尾标签， 尾标签多一个/ -->
   <p>这是一段话</p>
   ```

4. 双标签具有内容和属性。

   ```html
   <!-- a标签为双标签， href为标签属性， 百度为标签的内容 -->
   <a href='https://www.baidu.com'>百度</a>
   ```

5. 单标签只有属性，没有内容。

   ```html
   <!-- img标签为单标签， src和alt都为属性，单标签没有内容 -->
   <img src='https://www.imooc.com/static/img/index/logo.png' alt='慕课logo'>
   ```

6. 标签有且仅有嵌套和并列关系。

   ```html
   <!DOCTYPE HTML>
   <!-- head标签和body标签为并列关系， head和HTML、body和HTML均为嵌套关系 -->
   <HTML lang="en">
       <head>
           <title>HTML基本语法</title>
       </head>
       <body>
       </body>
   </HTML>
   ```

   ![](/home/w/WebstormProjects/learn-FE/imooc-慕课网前端教程/HTML/imgs/2020-12-12_12-36.png)