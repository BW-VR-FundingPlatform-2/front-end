export async function fakeAPICallForTesting({ email, password }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === "ariels713@gmail.com" && password === "password") {
          resolve();
        } else {
          reject();
        }
      }, 1000);
    });
  }
  