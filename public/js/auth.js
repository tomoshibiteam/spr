// Auth0 SPAクライアントの初期化
let auth0Client = null;

// Auth0設定の読み込み
const configureClient = async () => {
  const response = await fetch('/auth_config.json');
  const config = await response.json();

  auth0Client = await auth0.createAuth0Client({
    domain: config.domain,
    clientId: config.clientId,
    authorizationParams: {
      redirect_uri: window.location.origin + '/callback.html',
      audience: config.audience
    }
  });
};

// ログイン処理
const login = async () => {
  try {
    await auth0Client.loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.origin + '/callback.html'
      }
    });
  } catch (err) {
    console.error('ログインエラー:', err);
  }
};

// サインアップ処理
const signup = async () => {
  try {
    await auth0Client.loginWithRedirect({
      authorizationParams: {
        redirect_uri: window.location.origin + '/callback.html',
        screen_hint: 'signup'
      }
    });
  } catch (err) {
    console.error('サインアップエラー:', err);
  }
};

// ログアウト処理
const logout = () => {
  auth0Client.logout({
    logoutParams: {
      returnTo: window.location.origin
    }
  });
};

// ユーザー情報の取得
const getUser = async () => {
  return await auth0Client.getUser();
};

// 認証状態の確認
const isAuthenticated = async () => {
  return await auth0Client.isAuthenticated();
};

// UIの更新
const updateUI = async () => {
  const isAuth = await isAuthenticated();
  
  // ログイン状態に応じてボタンを表示/非表示
  const loginButtons = document.querySelectorAll('.btn-login');
  const signupButtons = document.querySelectorAll('.btn-signup');
  const logoutButtons = document.querySelectorAll('.btn-logout');
  const userInfo = document.querySelectorAll('.user-info');

  if (isAuth) {
    const user = await getUser();
    
    loginButtons.forEach(btn => btn.style.display = 'none');
    signupButtons.forEach(btn => btn.style.display = 'none');
    logoutButtons.forEach(btn => btn.style.display = 'inline-block');
    userInfo.forEach(el => {
      el.style.display = 'block';
      el.innerHTML = `
        <div class="user-profile">
          <img src="${user.picture}" alt="${user.name}" class="user-avatar">
          <span class="user-name">${user.name}</span>
        </div>
      `;
    });
  } else {
    loginButtons.forEach(btn => btn.style.display = 'inline-block');
    signupButtons.forEach(btn => btn.style.display = 'inline-block');
    logoutButtons.forEach(btn => btn.style.display = 'none');
    userInfo.forEach(el => el.style.display = 'none');
  }
};

// ページ読み込み時の初期化
window.onload = async () => {
  await configureClient();
  
  // URLパラメータのチェック（Auth0からのリダイレクト後）
  if (window.location.search.includes('code=') && window.location.search.includes('state=')) {
    try {
      await auth0Client.handleRedirectCallback();
      window.history.replaceState({}, document.title, window.location.pathname);
    } catch (err) {
      console.error('認証コールバックエラー:', err);
    }
  }

  await updateUI();

  // イベントリスナーの設定
  const loginButtons = document.querySelectorAll('.btn-login');
  const signupButtons = document.querySelectorAll('.btn-signup');
  const logoutButtons = document.querySelectorAll('.btn-logout');

  loginButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    login();
  }));
  signupButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    signup();
  }));
  logoutButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
  }));
};

