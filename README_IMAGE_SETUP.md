# イベント画像の設定方法

## Googleドライブの画像をLPに表示する手順

### 1. 画像をGoogleドライブにアップロード
1. Googleドライブに画像ファイルをアップロードします
2. 画像ファイルを右クリックして「共有」を選択
3. 「リンクを知っている全員」に変更して「完了」をクリック

### 2. ファイルIDを取得
共有リンクは以下のような形式です：
```
https://drive.google.com/file/d/1ABC123DEF456GHI789/view?usp=sharing
```

この中の `1ABC123DEF456GHI789` の部分がファイルIDです。

### 3. index.htmlに画像を設定

`index.html` の43行目あたりにある以下の部分を編集します：

#### 現在のコード：
```html
<a href="event-detail.html" class="pickup-image-card">
    <!-- ここに画像URLを設定してください -->
    <!-- 例: style="background-image: url('https://drive.google.com/uc?export=view&id=YOUR_FILE_ID');" -->
    <div class="pickup-overlay">
```

#### 画像を設定する場合（ファイルIDを使用）：
```html
<a href="event-detail.html" class="pickup-image-card" 
   style="background-image: url('https://drive.google.com/uc?export=view&id=1ABC123DEF456GHI789');">
    <div class="pickup-overlay">
```

**重要**: `1ABC123DEF456GHI789` の部分を実際のファイルIDに置き換えてください。

### 4. 画像の推奨仕様
- **サイズ**: 800×800px 以上（正方形）
- **フォーマット**: JPG または PNG
- **ファイルサイズ**: 500KB以下（ページ読み込み速度のため）
- **内容**: 二色浜や海をイメージできる写真

### 例：完成形
```html
<a href="event-detail.html" class="pickup-image-card" 
   style="background-image: url('https://drive.google.com/uc?export=view&id=1xYz9AbC123DeF456');">
    <div class="pickup-overlay">
        <div class="pickup-badge">初回イベント</div>
        <h3 class="pickup-title">二色浜の七色のメロディー</h3>
        <div class="pickup-hint">
            <span class="hint-icon">🔍</span>
            <span class="hint-text">クリックして詳細を見る</span>
        </div>
    </div>
</a>
```

## トラブルシューティング

### 画像が表示されない場合
1. **共有設定を確認**: 画像ファイルが「リンクを知っている全員」に共有されているか確認
2. **ファイルIDを確認**: ファイルIDが正しくコピーされているか確認
3. **URLの形式を確認**: `https://drive.google.com/uc?export=view&id=` の後にファイルIDが続いているか確認
4. **キャッシュをクリア**: ブラウザのキャッシュをクリアしてリロード

### 別の画像ホスティング方法
Googleドライブ以外にも以下のサービスが使用できます：

#### Imgur（おすすめ）
```html
<a href="event-detail.html" class="pickup-image-card" 
   style="background-image: url('https://i.imgur.com/XXXXX.jpg');">
```

#### 直接URLの場合
```html
<a href="event-detail.html" class="pickup-image-card" 
   style="background-image: url('画像の直接URL');">
```

## デフォルト表示
画像を設定しない場合は、緑のグラデーション背景に波のアイコン（🌊）が表示されます。

