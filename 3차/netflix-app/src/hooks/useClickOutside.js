// import { useRef, useEffect } from "react";

// export const useClickOutside = (callback) => {
//   const MdRef = useRef();
//   useEffect(() => {
//     const handleClick = (e) => {
//       if (!MdRef.current.contains(e.target)) {
//         callback();
//       }
//     };
//     document.addEventListener("click", handleClick);
//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, []);

//   return MdRef;
// };

// 도전중...
