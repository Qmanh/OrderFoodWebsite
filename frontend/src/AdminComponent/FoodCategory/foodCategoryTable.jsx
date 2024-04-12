import { Create, Delete } from "@mui/icons-material";
import { Box, Card,CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { CreateFoodCategoryForm } from "./CreateFoodCategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../component/State/store";
import { getRestaurantsCategory } from "../../component/State/Restaurant/Actions";
import { fetchRestaurantsOrder } from "../../component/State/Restaurant Order/Action";

const orders =[1,1,1,1,1]

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const FoodCategoryTable = () =>{

  const {restaurant} = useSelector((store)=>store)
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log("Restaurant details ",restaurant)

  useEffect(()=>{
    dispatch(getRestaurantsCategory({
        jwt:jwt,
        restaurantId: restaurant.usersRestaurant?.id
  }))
  
  },[])

    return(
        <Box>
            <Card className="mt-1">
                <CardHeader
                  action={
                    <IconButton onClick={handleOpen} aria-label="settings">
                      <Create />
                    </IconButton>
                  }
                title={"Category"} sx={{pt:2,alignItems:"center"}}
              />

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">Title</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurant.categories.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

            </Card>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
              <Box sx={style}>
                <CreateFoodCategoryForm/>
              </Box>
            </Modal>
        </Box>
  
    )
}