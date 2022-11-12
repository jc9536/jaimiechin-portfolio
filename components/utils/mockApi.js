export const userLogin = async ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (password === 'password') {
          resolve();
        } else {
          reject();
        }
      }, 3000);
    });
  };