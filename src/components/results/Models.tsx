import { Box, Container, Typography } from "@mui/material";
import React, { ReactEventHandler, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, useDragControls } from "framer-motion";
import convertible from "../../assets/models/Convertible.png";
import coupe from "../../assets/models/Coupe_Hatchback.png";
import pickup from "../../assets/models/pickup_truck.png";
import sedan from "../../assets/models/sedan.png";
import van from "../../assets/models/van.png";
import wagon from "../../assets/models/wagon.png";
import "./model.css";

const activeStyles = {
  backgroundColor: "#fff",
  color: "#000",
};

interface Car {
  image: string;
  name: string;
}

const cars = [
  { image: convertible, name: "convertible" },
  { image: coupe, name: "coupe" },
  { image: pickup, name: "pickup" },
  { image: sedan, name: "sedan" },
  { image: van, name: "van" },
  { image: wagon, name: "wagon" },
];

function Models() {
  const [width, setWidth] = useState(0);
  const scrollContainer: any = useRef();
  // const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    let scrollableWidth =
      scrollContainer.current.scrollWidth - scrollContainer.current.offsetWidth;
    setWidth(scrollableWidth);
  }, [width]);

  const dragControls = useDragControls();

  function startDrag(event: PointerEvent | React.PointerEvent<Element>) {
    dragControls.start(event, { snapToCursor: true });
  }

  function handleClick(event: any) {
    // event.stopPropagation()
    if (!event.target.classList.contains("active")) {
      event.target.classList.add("active");
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        overflow: "hidden",
        mx: "auto",
        // gap: 2,
        height: { xs: "85%", sm: "50%" },
        bgcolor: "#2b2d42",
      }}
    >
      <motion.div
        ref={scrollContainer}
        whileTap={{ cursor: "grabbing" }}
        className="scroll-container"
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          cursor: "grab",
          width: "100%",
        }}
        transition={{ duration: 2 }}
      >
        <div onPointerDown={startDrag} />
        <motion.div
          drag="x"
          dragControls={dragControls}
          dragConstraints={{ right: 0, left: -width }}
          className="scroll-inner"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {cars.map((car: Car) => (
            <>
              <motion.div style={{ width: "100%" }} className="model-container">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    py: 1,
                    px: 3,

                    color: "#fff",
                    ":hover": {
                      color: "#ed1f1f",
                      bgcolor: "#f8f8f8",
                    },
                    transition: "0.25s ease-in-out",
                  }}
                >
                  <img
                    src={car.image}
                    height={20}
                    width={60}
                    alt={car.name}
                  />
                  <Typography
                    variant="subtitle1"
                    sx={{ textTransform: "capitalize" }}
                  >
                    {car.name}
                  </Typography>
                </Box>
              </motion.div>
            </>
          ))}
        </motion.div>
      </motion.div>
    </Box>
  );
}

export default Models;

// import { motion, useDragControls } from 'framer-motion'
// import React, { useRef, useEffect, useState } from 'react'
// import { styled } from '@mui/material/styles'
// import Card from '@mui/material/Card'
// import CardHeader from '@mui/material/CardHeader'
// import CardMedia from '@mui/material/CardMedia'
// import CardContent from '@mui/material/CardContent'
// import CardActions from '@mui/material/CardActions'
// import Collapse from '@mui/material/Collapse'
// import Avatar from '@mui/material/Avatar'
// import IconButton, { IconButtonProps } from '@mui/material/IconButton'
// import Typography from '@mui/material/Typography'
// import { red } from '@mui/material/colors'
// import FavoriteIcon from '@mui/icons-material/Favorite'
// import ShareIcon from '@mui/icons-material/Share'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import MoreVertIcon from '@mui/icons-material/MoreVert'
// import PropTypes from 'prop-types'
// import { Box, Divider, Zoom } from '@mui/material'
// import { Call, Email, Image, StarBorderOutlined } from '@mui/icons-material'
// import CollectionsIcon from '@mui/icons-material/Collections'

// import member1 from '../../assets/home/team-members/teammember1.jpg'
// import member2 from '../../assets/home/team-members/teammember2.jpg'
// import member3 from '../../assets/home/team-members/teammember3.jpg'
// import member4 from '../../assets/home/team-members/teammember4.jpg'
// import HorizontalScroll from '../utilities/HorizontalScroll'

// const teamMembers = [
//   {
//     fullName: 'John Doe',
//     email: 'johndoe@gmail.com',
//     phone: '0797165741',
//     image: member1,
//     position: 'Customer Advisor',
//   },
//   {
//     fullName: 'Jane Doe',
//     email: 'janedoe@gmail.com',
//     phone: '0797165742',
//     image: member2,
//     position: 'Marketing Manager',
//   },
//   {
//     fullName: 'Tom Doe',
//     email: 'tomdoe@gmail.com',
//     phone: '0797165743',
//     image: member3,
//     position: 'IT Manager',
//   },
//   {
//     fullName: 'Jack Doe',
//     email: 'jackdoe@gmail.com',
//     phone: '0797165744',
//     image: member4,
//     position: 'Customer Relations',
//   },
//   {
//     fullName: 'Jack Jane',
//     email: 'jackjane@gmail.com',
//     phone: '0797165744',
//     image: member4,
//     position: 'Customer Relations',
//   },
// ]

// function TeamMemberCard() {
//   const [isHovered, setIsHovered] = React.useState(false)
//   const [isLiked, setIsLiked] = React.useState(false)
//   const [width, setWidth] = useState(0)
//   const scrollContainer: any = useRef()

//   useEffect(() => {
//     let scrollableWidth =
//       scrollContainer.current.scrollWidth - scrollContainer.current.offsetWidth
//     setWidth(scrollableWidth)
//   }, [])

//   const dragControls = useDragControls()

//   function startDrag(
//     event:
//       | MouseEvent
//       | React.MouseEvent<Element, MouseEvent>
//       | React.TouchEvent<Element>
//       | React.PointerEvent<Element>
//       | TouchEvent
//       | PointerEvent
//   ) {
//     dragControls.start(event, { snapToCursor: true })
//   }
//   const handleCardHover = () => {
//     alert(1)
//     setIsHovered(true)
//   }
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         width: '100vw',
//         overflow: 'hidden',
//         gap: 2,
//         height: { xs: '85%', sm: '50%' },
//       }}
//     >
//       <motion.div
//         ref={scrollContainer}
//         whileTap={{ cursor: 'grabbing' }}
//         className="scroll-container"
//         style={{
//           overflow: 'hidden',
//           whiteSpace: 'nowrap',
//           cursor: 'grab',
//           width: '100%',
//         }}
//         transition={{ duration: 2 }}
//       >
//         <div onPointerDown={startDrag} />
//         <motion.div
//           drag="x"
//           dragControls={dragControls}
//           dragConstraints={{ right: 0, left: -width }}
//           className="scroll-inner"
//           style={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}
//         >
//           {teamMembers.map((member) => (
//             <motion.div key={member.email}>
//               <Card
//                 sx={{
//                   maxWidth: 450,
//                   m: { md: '2rem auto' },
//                   borderRadius: '0.7rem',
//                   bgcolor: '#ffffff',

//                   ':hover': {
//                     cursor: 'pointer',
//                     m: { md: '1.5rem auto' },
//                   },
//                   display: 'flex',
//                   flexDirection: {
//                     xs: 'column',
//                   },
//                   gap: 2,
//                   width: { xs: '100vw', md: '20rem' },
//                   transition: 'all ease-in-out 0.5s',
//                 }}
//                 //   onMouseOver={handleCardHover}
//               >
//                 <CardMedia
//                   component="img"
//                   height="194"
//                   image={member.image}
//                   alt={member.fullName}
//                   sx={{
//                     opacity: 0.75,
//                   }}
//                 />
//                 <CardContent
//                   sx={{
//                     px: '1.5rem',
//                   }}
//                 >
//                   <Typography
//                     variant="h5"
//                     color="#222732"
//                     fontWeight="bolder"
//                     textAlign="left"
//                   >
//                     {member.fullName}
//                   </Typography>
//                   <Typography fontSize="1rem" color="#a0a2a7" textAlign="left">
//                     {member.position}
//                   </Typography>
//                   <Divider
//                     sx={{
//                       m: '0.5rem auto 0',
//                       bgcolor: '#ecf0f3',
//                       height: '0.1px',
//                     }}
//                   />

//                   <Box
//                     sx={{
//                       display: 'flex',
//                       gap: 1,
//                       position: 'relative',
//                       top: '-7.5rem',
//                     }}
//                   >
//                     <a
//                       style={{
//                         color: '#a0a7b7',
//                         textAlign: 'left',
//                       }}
//                       href={`tel:${member.phone}`}
//                     >
//                       {' '}
//                       <IconButton
//                         sx={{
//                           bgcolor: '#ff4605',
//                           ':hover': {
//                             bgcolor: '#ff4605',
//                           },
//                         }}
//                       >
//                         <Call sx={{ fill: '#fff' }} />
//                       </IconButton>
//                     </a>
//                     <a
//                       style={{
//                         color: '#ff6934',
//                         textAlign: 'left',
//                       }}
//                       href={`mailto:${member.email}`}
//                     >
//                       <IconButton
//                         sx={{
//                           bgcolor: '#ff4605',
//                           ':hover': {
//                             bgcolor: '#ff4605',
//                           },
//                         }}
//                       >
//                         <Email sx={{ fill: '#fff' }} />
//                       </IconButton>
//                     </a>
//                   </Box>

//                   <Box
//                     sx={{
//                       pb: '2rem',
//                     }}
//                   >
//                     <Typography
//                       fontSize="1.2rem"
//                       fontWeight="bolder"
//                       color="#ff6934"
//                       textAlign="left"
//                     >
//                       <a
//                         style={{
//                           color: '#ff6934',
//                           textAlign: 'left',
//                         }}
//                         href={`mailto:${member.email}`}
//                       >
//                         {member.email}
//                       </a>
//                     </Typography>
//                     <Typography
//                       fontSize="1.2rem"
//                       color="#a0a7b7"
//                       textAlign="left"
//                     >
//                       <a
//                         style={{
//                           color: '#a0a7b7',
//                           textAlign: 'left',
//                         }}
//                         href={`tel:${member.phone}`}
//                       >
//                         {member.phone}
//                       </a>
//                     </Typography>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </Box>
//   )
// }

// TeamMemberCard.propTypes = {
//   id: PropTypes.number,
//   title: PropTypes.string,
//   images: PropTypes.array,
//   price: PropTypes.number,
//   year: PropTypes.number,
//   features: PropTypes.array,
//   safetyFeatures: PropTypes.array,
//   car: PropTypes.object,
// }

// export default TeamMemberCard
