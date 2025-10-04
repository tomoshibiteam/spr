# 🖼️ イベント画像の設定ガイド

## 現在の問題

Googleドライブの画像が「Sign in」を要求されており、共有設定が制限されているため表示できません。

## ✅ 推奨: 画像を直接配置する方法

### 手順

1. **画像ファイルを準備**
   - ファイル名: `nishikihama-event.jpg` または `nishikihama-event.png`
   - 推奨サイズ: 800×800px 以上（正方形）
   - ファイルサイズ: 500KB以下

2. **画像を配置**
   ```
   SPR/
   ├── images/
   │   └── nishikihama-event.jpg  ← ここに画像を配置
   ├── index.html
   └── styles.css
   ```

3. **完了！**
   - `index.html` の45行目は既に設定済みです
   - ブラウザでリロードすれば画像が表示されます

### 📝 現在の設定

```html
<a href="event-detail.html" class="pickup-image-card has-custom-image" 
   style="background-image: url('images/nishikihama-event.jpg');">
```

---

## 代替方法1: Googleドライブの共有設定を変更

もしGoogleドライブを使い続けたい場合：

### 手順

1. Googleドライブで画像ファイルを右クリック
2. 「共有」を選択
3. **「リンクを知っている全員」に変更**ナビは5つまで（情報香りを強く）：「事務所について / 仕組み / 依頼 / よくある質問 / 探偵になる」

ヒーローは1見出し＋1リード＋1CTAに圧縮。副見出しは下段へ退避。

「謎を解け。世界を救え。」はタグラインとして固定配置。

CTAを3本に役割分担：探偵になる（主）／初回イベントを見る（従）／資料請求（BtoB）

「社会課題→謎へ転化」は各カードを“課題→事件名”の2行で統一（本文は40–60字）。

仕組みは3ステップ＋1行の要約だけに（詳細は下層へ誘導）。

各見出しを二語タイトルで統一（例：日常強化／現地依頼／功績解放）。

絵文字は各ブロック1つまで（視線が散らばらないように）。

FAQは5問に絞る→残りは「もっと見る」へ。

フッター上に再度CTAブロック（3列）を置き、回遊を終わらせる。
   - 現在: 「制限付き」（Sign in必須）← これが問題
   - 変更後: 「リンクを知っている全員」
4. 「閲覧者」のまま「完了」をクリック
5. `index.html` を以下に変更：

```html
<a href="event-detail.html" class="pickup-image-card has-custom-image" 
   style="background-image: url('https://drive.google.com/uc?export=view&id=1czdXxvtGPNNU7pfha5d2oDMuV8296jL7');">
```

---

## 代替方法2: Imgur（無料画像ホスティング）

### 手順

1. [Imgur](https://imgur.com/) にアクセス
2. 「New post」をクリック
3. 画像をアップロード
4. アップロード後、画像を右クリック → 「画像アドレスをコピー」
5. `index.html` を以下のように変更：

```html
<a href="event-detail.html" class="pickup-image-card has-custom-image" 
   style="background-image: url('https://i.imgur.com/XXXXX.jpg');">
```

---

## トラブルシューティング

### 画像が表示されない場合

1. **ファイル名を確認**
   - `images/nishikihama-event.jpg` と完全に一致していますか？
   - 大文字・小文字も区別されます

2. **ファイルの場所を確認**
   ```
   SPR/
   ├── images/          ← このフォルダに
   │   └── nishikihama-event.jpg  ← この名前で配置
   └── index.html
   ```

3. **ブラウザのキャッシュをクリア**
   - Windows: Ctrl + Shift + R
   - Mac: Cmd + Shift + R

4. **画像フォーマットを確認**
   - JPG、PNG、WebP のいずれか
   - BMPやTIFFは使用しないでください

---

## 📌 まとめ

**最も簡単で確実な方法**: 
1. `images` フォルダに `nishikihama-event.jpg` を配置
2. ブラウザをリロード

これだけで完了です！

