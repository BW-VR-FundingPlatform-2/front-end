// import React from "react";
// import { Button } from "@material-ui/core";
// import { useHistory } from "react-router-dom";
// import { connect } from "react-redux";
// import logOutAction from '../store/actions/logOutAction'

// const LogOut = (props) => {
//   const history = useHistory();

//   const handleClick = () => {
//     props.logOutAction()
//     localStorage.clear();
//     history.push("/");
//   };

//   return (
//     <>
//     {
//       props.loggedOut &&
//       <Button
//       style={{ height: "30px", marginLeft: "1em", marginTop: ".5em" }}
//       variant="contained"
//       color="primary"
//       onClick={handleClick}
//     >
//       Log Out
//     </Button>
//     }
//     </>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     loggedOut: state.logOutReducer.loggedOut
//   }
// }

// export default connect(mapStateToProps, {logOutAction})(LogOut);
