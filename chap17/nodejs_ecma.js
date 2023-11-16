const val = "ECMAScripの仕様に沿って記述できます。";

function fn() {
    console.log("関数を利用することができます。");
}
fn();

class NodeCalss {
    constructor() {
        console.log("クラスも使用することができます。");
    }
}

new NodeCalss();

Promise.resolve().then(() => {
    console.log("Promiseなども使用可能です。");
});

function* generator() {
    yield "ジェネレータも使えます。";
}

for (const str of generator()) {
    console.log(str);
}