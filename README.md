# Connection Counter By Milkcocoa

## 概要
Milkcocoaデータストアへのコネクション数を表示するJavascriptです。技術力不足でどうにも安定してコネクション数がカウントされないです。

## 使い方
### 1. htmlファイルでCDNのmilkcocoaを読み込みます。
<script src='https://cdn.mlkcca.com/v2.0.0/milkcocoa.js'></script>

### 2. 1のあとでconnection_count.jsを読み込みます。
<script src="connection_count.js"></script>

### 3. connection_count.jsのmilkcocoaのyour-app-idを変更する
var milkcocoa = new MilkCocoa("{your-app-id}.mlkcca.com");の{your-app-id}をあなたのデータストアのものに変えてください。

### 4. connection_counter.start(カウント数を出力するタグのid);を呼び出す
<script>connection_counter.start("connection_counter");</script>
そのidを持ったタグを設置するのも忘れずに。

以上。