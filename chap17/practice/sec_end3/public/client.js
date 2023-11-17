// 関数の実行
countdown();

function countdown() {
    // countdown要素を取得
    const countdown = document.querySelector("#countdown");

    // 現在のカウントダウンの値を取得
    let currentCount = Number(countdown.textContent);

    // countdown.textContentが数値として変換できなかった場合(NaN)
    if (!currentCount) {
        countdown.textContent = "countdownパラメータが不正です。";
        return;
    }

    // 1秒ごとのインターバル処理を実行
    const intervalID = setInterval(() => {
        // カウントダウンの値を1減算
        currentCount--;

        // カウントダウンの値が0の時
        if (currentCount === 0) {
            // インターバルを停止
            clearInterval(intervalID);
            countdown.textContent = "カウントダウン終了!!";
        } else {
            // 画面表示を更新
            countdown.textContent = currentCount;
        }
    }, 1000);

}