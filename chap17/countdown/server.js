import express from "express";

const app = express();
const port = 3000;

// テンプレートエンジンの指定
app.set("view engine", "ejs");

// 公開用フォルダとしてpublicを追加
app.use(express.static("public"))

app.get("/", (req, res) => {
    const countdown = req.query.countdown;

    if (countdown) {
        // countdownパラメータが渡されてきたとき
        // res.send(countdown);
        res.render("index.ejs", {countdown: countdown});
    } else {
        // countdownパラメータが渡されてこなかったとき
        res.send("countdownパラメータを設定してください。");
    }
});

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}?countdown=5`);
});