# Auth0セットアップガイド

このガイドでは、SPR探偵事務所にAuth0認証を統合する手順を説明します。

## 📋 前提条件

- ✅ Auth0アカウント作成済み
- ✅ Auth0アプリケーション登録済み
- ✅ Vercelアカウント（デプロイ用）

## 🔧 セットアップ手順

### 1. Auth0設定の取得

Auth0ダッシュボードで以下の情報を取得してください：

1. **Applications** → あなたのアプリケーションを選択
2. 以下の情報をメモ：
   - `Domain` (例: `your-tenant.auth0.com`)
   - `Client ID` (例: `abc123...`)
   - `Client Secret` (例: `xyz789...`)

### 2. Auth0アプリケーション設定

Auth0ダッシュボードで以下を設定：

#### Allowed Callback URLs
```
http://localhost:3000/callback.html,
https://yourdomain.vercel.app/callback.html
```

#### Allowed Logout URLs
```
http://localhost:3000,
https://yourdomain.vercel.app
```

#### Allowed Web Origins
```
http://localhost:3000,
https://yourdomain.vercel.app
```

**注意**: `yourdomain.vercel.app` は実際のVercelのURLに置き換えてください。

### 3. auth_config.json の更新

`auth_config.json` ファイルを開き、Auth0の情報を入力：

```json
{
  "domain": "your-tenant.auth0.com",
  "clientId": "your-client-id",
  "audience": "https://your-tenant.auth0.com/api/v2/"
}
```

### 4. Vercel環境変数の設定

Vercelダッシュボードで環境変数を設定：

1. Vercelプロジェクトを開く
2. **Settings** → **Environment Variables**
3. 以下の変数を追加：

| 変数名 | 値 |
|--------|-----|
| `AUTH0_DOMAIN` | `your-tenant.auth0.com` |
| `AUTH0_CLIENT_ID` | `your-client-id` |
| `AUTH0_CLIENT_SECRET` | `your-client-secret` |

**重要**: すべての環境（Production, Preview, Development）にチェックを入れてください。

### 5. ローカル開発環境の設定（オプション）

ローカルで開発する場合、`.env.local` ファイルを作成：

```bash
AUTH0_DOMAIN=your-tenant.auth0.com
AUTH0_CLIENT_ID=your-client-id
AUTH0_CLIENT_SECRET=your-client-secret
VERCEL_URL=localhost:3000
```

**注意**: `.env.local` は `.gitignore` に含まれているため、Gitにコミットされません。

### 6. デプロイ

```bash
# Vercelにデプロイ
vercel --prod
```

デプロイ後、Vercelから提供されたURLで以下を確認：
1. Auth0設定のCallback URLsに追加
2. `auth_config.json` が正しく読み込まれることを確認

## 🧪 テスト手順

### 1. ログインテスト
1. トップページの「探偵になる」ボタンをクリック
2. Auth0ログイン画面が表示されることを確認
3. ログイン後、`callback.html` を経由してマイページにリダイレクトされることを確認

### 2. サインアップテスト
1. 「新規登録」ページにアクセス
2. フォームを送信
3. Auth0のサインアップ画面（`screen_hint=signup`）が表示されることを確認

### 3. ログアウトテスト
1. ログイン済みの状態でログアウトボタンをクリック
2. トップページにリダイレクトされることを確認
3. ログイン状態が解除されていることを確認

## 🔐 セキュリティベストプラクティス

### 必須設定
- ✅ HTTPS経由でのみ通信（本番環境）
- ✅ Client SecretはVercel環境変数で管理
- ✅ `.env.local` をGitにコミットしない

### 推奨設定
- 🔹 MFA（多要素認証）の有効化
- 🔹 パスワードポリシーの強化
- 🔹 ブルートフォース攻撃対策の有効化

Auth0ダッシュボード → **Security** → **Attack Protection** で設定できます。

## 📱 ソーシャルログインの追加（オプション）

Auth0でGoogleやFacebookログインを追加する場合：

1. Auth0ダッシュボード → **Authentication** → **Social**
2. 使用したいプロバイダーを選択
3. 各プロバイダーのClient IDとSecretを設定
4. 自動的にログイン画面に表示されます

## 🐛 トラブルシューティング

### エラー: "Callback URL mismatch"
→ Auth0のAllowed Callback URLsに正しいURLが設定されているか確認

### エラー: "Invalid state"
→ ブラウザのキャッシュをクリアして再試行

### エラー: "Failed to fetch auth_config.json"
→ ファイルパスが正しいか、ファイルが存在するか確認

### ログイン後にリダイレクトされない
→ コンソールエラーを確認、callback.htmlが正しく動作しているか確認

## 📞 サポート

問題が解決しない場合：
- Auth0ドキュメント: https://auth0.com/docs
- Auth0コミュニティ: https://community.auth0.com/

## 🎉 完了！

セットアップが完了しました！これで：
- ✅ ユーザー登録・ログインが可能
- ✅ セキュアな認証フロー
- ✅ Vercelで本番環境稼働

次のステップ：ユーザープロファイルの拡張、権限管理、データベース連携など

