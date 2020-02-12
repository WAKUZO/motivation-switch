<h1 align="center">Motivation-Switch</h1>

<h2 align="center"> やる気の「スイッチ」を入れるアプリ。情熱大陸に乗せて偉人の名言や名言集を見れます。</h2>
<h3 align="center"> 情熱大陸に乗せて偉人の名言や名言集を見れます。</h3>

<a href="https://gyazo.com/6e8d1f2c1f99f3ced2d94b02627a3c73"><video alt="Video from Gyazo" width="1000" autoplay muted loop playsinline controls><source src="https://i.gyazo.com/6e8d1f2c1f99f3ced2d94b02627a3c73.mp4" type="video/mp4" /></video></a>

### (例)本田圭佑ver
![DEMO](/raw)

## App URL

http://18.178.244.243/
    
#### テストユーザーアカウント
  - メールアドレス:test@test.com
  - パスワード: test1111
 
## Description

フリマアプリ「メルカリ」のクローンサイトを作成しました。誰でも簡単に売り買いが楽しめるフリマアプリの機能を再現したページ。 ユーザー登録、商品出品、商品購入などの機能が再現されていますが、実際の取引はできません。4人チームでアジャイル開発を行いました。
 
## Features
 
- haml/scss記法と、命名規則BEMを使ったマークアップ
- ウィザード形式を用いたユーザー登録フォーム
- SNS認証による新規登録、ログイン(ローカル環境のみ)
- pay.jpによる商品購入処理
- 商品検索機能
- capistranoによるAWS EC2への自動デプロイ
- ActiveStorageを使用しAWS S3への画像アップロード
 
## Requirement

* Ruby 2.5.1
* Rails 5.0.7
 
## Installation

```
$ git clone https://github.com/WAKUZO/motivation-switch.git
$ cd motivation-switch
$ bundle install
$ rails s
👉 http://localhost:3000
```

## Author

- GitHub
  ：<a href="https://github.com/WAKUZO?tab=repositories">@WAKUZO</a>
- Twitter
  ：<a href="https://twitter.com/WAKUZ0_2">@WAKUZ0_2</a>

