let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string1 = `
/* 你好，我是一名前端新人
 * 接下来我要展示一下我的前端功底
 */
#div1 {
    border:1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成八卦图
 * 注意看好了
 * 首先把 div 变成一个圆圈
 */
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/* 八卦是阴阳形成的
 * 一半黑一半白
 */
#div1 {
    background: rgb(255,255,255);
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
#div1::before{
    border-radius: 50%;
    position: absolute;
    left: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
}
#div1::after{
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    
}
/* 加两个神奇的小圆球
 */
#div1::before{
    background: rgb(255,255,255);
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    background: rgb(0,0,0);
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;

let n = 0;
let string2 = "";
let step = () => {
  setTimeout(() => {
    if (string1[n] === "\n") {
      string2 += "<br>";
    } else if (string1[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string1[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string1.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string1.length - 1) {
      n++;
      step();
    }
  }, 50);
};

step();
