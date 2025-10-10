# 🚀 Auth0認証 クイックスタート

## ✅ 実装完了した内容

### 新規ファイル
- `js/auth.js` - Auth0認証ロジック
- `callback.html` - Auth0コールバックページ
- `auth_config.json` - Auth0設定ファイル
- `package.json` - プロジェクト設定
- `vercel.json` - Vercel設定

### 更新したファイル
- `index.html` - Auth0スクリプト追加
- `login.html` - Auth0ログイン統合
- `signup.html` - Auth0サインアップ統合

## 🔧 次にすべきこと

### 1. auth_config.jsonの更新 ⚠️ 必須

```json
{
  "domain": "your-actual-domain.auth0.com",
  "clientId": "your-actual-client-id",
  "audience": "https://your-actual-domain.auth0.com/api/v2/"
}
```

### 2. Auth0でコールバックURLを設定 ⚠️ 必須

Auth0ダッシュボード → Applications → Settings

**Allowed Callback URLs:**
```
http://localhost:3000/callback.html,
https://your-vercel-domain.vercel.app/callback.html
```

**Allowed Logout URLs:**
```
http://localhost:3000,
https://your-vercel-domain.vercel.app
```

**Allowed Web Origins:**
```
http://localhost:3000,
https://your-vercel-domain.vercel.app
```

### 3. Vercel環境変数の設定（本番環境用）

Vercel Dashboard → Settings → Environment Variables

```
AUTH0_DOMAIN=your-domain.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
```

### 4. ローカルテスト

```bash
# 静的サーバーで起動（Live Serverなど）
# または
npx http-server -p 3000
```

ブラウザで `http://localhost:3000` を開いて：
1. 「探偵になる」ボタンをクリック
2. Auth0ログイン画面が表示されるか確認

### 5. Vercelにデプロイ

```bash
vercel --prod
```

## 📊 認証フロー

```
1. ユーザーが「ログイン」をクリック
   ↓
2. Auth0ログイン画面へリダイレクト
   ↓
3. ユーザーが認証情報を入力
   ↓
4. callback.html にリダイレクト
   ↓
5. トークンを取得・保存
   ↓
6. mypage.html へリダイレクト
```

## 🎯 動作確認チェックリスト

- [ ] `auth_config.json` を実際の値に更新
- [ ] Auth0でコールバックURL設定完了
- [ ] ローカルでログインテスト成功
- [ ] Vercel環境変数設定完了
- [ ] 本番環境でログインテスト成功
- [ ] サインアップテスト成功
- [ ] ログアウトテスト成功

## 🐛 よくある問題

### "Callback URL mismatch"
→ Auth0のAllowed Callback URLsを確認

### "Failed to fetch"
→ `auth_config.json` のパスと内容を確認

### ログイン画面が表示されない
→ ブラウザコンソールでエラーを確認

## 📚 詳細ドキュメント

より詳しい情報は `AUTH0_SETUP.md` をご覧ください。

## 🎉 完了！

これで本格的な認証システムが実装されました！

