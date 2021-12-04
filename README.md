# electron-file-and-py 

 - ファイルビューア
 - Pythonプログラムの実行

## ファイルビューア

 - IPC(メインプロセスでファイルツリーを取得, レンダラプロセスで表示制御)

メインプロセス

1. 指定したパスのファイル一覧を取得するメソッドを定義する(xxx.js => main.jsからrequire)
2. (1)をipc経由で実行するためのハンドラを定義する(main.js)
3. (1)をipc経由で実行するためのAPIを定義する(preload.js)

レンダラプロセス

4. (1)をipc経由で呼び出し、レスポンスから一覧を作成するメソッドを作成(renderer.js)
5. その他、適当なイベントにhookして(4)を呼び出すなど、必要なjsを記述(renderer.js)

## Pythonプログラムの実行

 - IPC(メインプロセスでPython(python-shell)を実行して標準出力をキャプチャ, レンダラプロセスで表示制御)

# 利用方法

インストール

```
npm install
```

起動

```
npm start
```

ビルド( /out に出力)

```
npm run make
```
