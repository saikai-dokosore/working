# Nextjs と TypeScript の環境を最高にしたい

- [x] `npx create-next-app test --ts`
- [x] `touch tsconfig.json`
- [x] eslint
- [x] prettier
- [x] sass
- [x] recet.scss
- [x] next-pwa（先に vscode で build してから push）
> [PWA01](https://chaika.hatenablog.com/entry/2021/07/21/083000)
> [PWA02](https://www.npmjs.com/package/next-pwa)


# リーダブルコード

> [変数などによく使う英単語](https://qiita.com/Ted-HM/items/7dde25dcffae4cdc7923#%E9%96%93%E9%81%95%E3%81%84%E3%82%84%E3%81%99%E3%81%84%E8%A8%80%E8%91%89)

| 変数名         | 用途                         |
| -------------- | ---------------------------- |
| tmp            | ループなどでの一時的な代入   |
| i,j,k          | ループのイテレータ           |
| user_i, user_k | ループのイテレータ           |
| start_ms       | ミリ秒                       |
| \_id           | 一時的に id を置き換えるもの |

- `// TODO : ここの関数を綺麗にする`みたいなコメントは後から直すところ
- 説明変数と要約変数を使う
- 最初にグローバルで使いたい変数（ログイン情報など）を全て洗い出して、そこから定義していく
- それ以外の変数はスコープをできるだけ短くすることで、同じ単語でも後から使えるようにする
