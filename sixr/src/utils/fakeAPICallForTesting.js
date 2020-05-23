export async function fakeAPICallForTesting({ username, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "ariels713@gmail.com" && password === "password") {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }
  