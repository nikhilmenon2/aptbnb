// import BarBox from "./BarBox";
// import React, { useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
// import { parse } from "query-string";
// import { setLoginModal } from "../../store/modal";
// import { useDispatch } from "react-redux";
// function SpotList({ spotList }) {
//   const [confirmScreen, setConfirmScreen] = useState(false);
//   const history = useHistory();
//   const location = useLocation();
//   const dispatch = useDispatch();
//   let futureReservations;
 
//   const vals = parse(location.search);
 
//   if (!barList || barList.length === 0)
//     return (
//       <>
//         <div className="list-box">
//           <h1>{name}</h1>
//           <div>{/* <h2>No Results</h2> */}</div>
//         </div>
//       </>
//     );
//   return (
//     <div className="list-box">
//       <h1>{name}</h1>
//       {confirmReturn()}
//       {barList.map((el, ind) => {
//         let res = false;
//         let match;
//         if (futureReservations) {
//           match = futureReservations.filter((reserve) => {
//             return reserve.barId === el.id;
//           });
//         }
//         if (match && match.length) res = match[0];
//         return (
//           <BarBox
//             bar={el}
//             reservation={res}
//             key={ind}
//             ind={ind}
//             confirmReservation={confirmReservation}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default BarList;
