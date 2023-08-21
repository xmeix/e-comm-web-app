const broadcastChannel = new BroadcastChannel("auth-channel");

const AuthManager = {
  isLoggedIn: false,

  login: () => {
    AuthManager.isLoggedIn = true;
    broadcastChannel.postMessage({ isLoggedIn: true });
  },

  logout: () => {
    AuthManager.isLoggedIn = false;
    broadcastChannel.postMessage({ isLoggedIn: false });
  },
};

export default AuthManager;
