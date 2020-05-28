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
  

    //when submitted different actions will be passed to the reducer depending on the username and password validation
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const {username, password} = formValues

//     try {
//       await fakeAPICallForTesting({username, password})
//       props.loginAction(formValues);
//       props.loginSucessAction()
//       history.push("/dashboard")
//     } catch (error) {
//       props.loginActionFail()
//     }
//   };