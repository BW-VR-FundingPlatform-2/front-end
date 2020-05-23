export async function fakeAPICallForTesting({ username, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "Ariel" && password === "password") {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }
  