class ToImooc extends HTMLElement { // Web Components 继承自 HTMLElement
    constructor() {
        super(); // 调用父类构造函数

        const link = document.createElement('a'); // 创建一个 a 元素

        link.href = 'javascript:;'; // 默认什么都不做
        link.innerText = 'GOGOGO! Imooc 出发!'; // 显示的文案

        link.addEventListener('click', () => { // 跳转事件
            alert('坐稳啦！要发车啦！！！');

            window.location.href = '//imooc.com';
        });

        this.append( // this 就是自定义的节点
            link,
            document.createElement('br'),
        );
    }
}

window.customElements.define('to-imooc', ToImooc);
