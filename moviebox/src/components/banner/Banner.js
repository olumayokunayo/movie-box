// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import MenuIcon from "@mui/icons-material/Menu";
// import { Button, Typography } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";
// import banner from "../../images/jwick.jpeg";
// import imbdImage from "../../images/imdb.png";
// import berryImage from "../../images/strawberry.png";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import Loader from "../loader/Loader";
// import LiveTvIcon from "@mui/icons-material/LiveTv";
// import HomeIcon from "@mui/icons-material/Home";
// import MovieIcon from "@mui/icons-material/Movie";
// import DateRangeIcon from "@mui/icons-material/DateRange";

// const Sidebar = ({ onSearch }) => {
//   const [search, setSearch] = useState("");

//   const handleSearch = () => {
//     onSearch(search);
//   };

//   const handleSearchInputChange = (e) => {
//     setSearch(e.target.value);
//   };

//   const handleSearchInputKeyPress = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "1rem",
//         marginTop: "3rem",
//         alignItems: "left",
//       }}
//     >
//       <NavLink
//         to=""
//         style={{
//           display: "flex",
//           textDecoration: "none",
//           gap: "1rem",
//           color: "#fff",
//         }}
//       >
//         <HomeIcon sx={{ color: "red", fontSize: "2rem" }} />
//         <Typography variant="h4">Home</Typography>
//       </NavLink>
//       {/* Add other sidebar navigation links here */}

//       <Box
//         sx={{
//           position: "relative",
//           display: "flex",
//           alignItems: "center",
//           "@media (max-width: 600px)": { display: "flex" },
//           "@media (min-width: 601px)": { display: "none" },
//         }}
//       >
//         <input
//           type="search"
//           placeholder="What do you want to watch?"
//           style={{
//             backgroundColor: "transparent",
//             padding: "0.4rem",
//             width: "100%",
//             paddingRight: "2rem",
//             border: "1px solid #fff",
//             borderRadius: "4px",
//             color: "#fff",
//             outline: "none",
//             "::placeholder": {
//               color: "#fff",
//             },
//           }}
//           value={search}
//           onChange={handleSearchInputChange}
//           onKeyPress={handleSearchInputKeyPress}
//         />

//         <SearchIcon
//           style={{
//             position: "absolute",
//             right: "10px",
//             cursor: "pointer",
//             color: "#fff",
//           }}
//           onClick={handleSearch}
//         />
//       </Box>
//     </Box>
//   );
// };

// const Header = ({ onSearch, isLoading }) => {
//   const [showSidebar, setShowSidebar] = useState(false);

//   const toggleSidebar = () => {
//     setShowSidebar(!showSidebar);
//   };

//   return (
//     <Container
//       maxWidth="none"
//       sx={{
//         padding: "1rem 0 2rem 0",
//         width: "100%",
//         backgroundImage: `url(${banner})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         height: "fit-content",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//           }}
//         >
//           {window.innerWidth <= 600 && (
//             <MenuIcon
//               sx={{
//                 color: "#fff",
//                 fontSize: "2rem",
//                 cursor: "pointer",
//               }}
//               onClick={toggleSidebar}
//             />
//           )}
//           <NavLink
//             to={"/"}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "1rem",
//               textDecoration: "none",
//             }}
//           >
//             {/* ... */}
//           </NavLink>
//           {/* Add other header elements here */}
//         </Box>
//         {/* {showSidebar && <Sidebar onSearch={onSearch} />} */}
//         {/* ... */}
//       </Container>
//     </Container>
//   );
// };

// export default Header;
