import { Create, Delete } from "@mui/icons-material";
import { Box, Card,CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CreateIngredientCategoryForm } from "./CreateIngredientCategoryForm";
import { useDispatch, useSelector } from "react-redux";
import { getIngredientCategory } from "../../component/State/Ingredients/Action";
import {store} from "../../component/State/store";

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

export const IngredientCategory = () =>{

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt")
  const {restaurant,ingredients} = useSelector(store=>store)

  console.log("rrr ",ingredients)
  useEffect(()=>{
    dispatch(getIngredientCategory({id:restaurant.usersRestaurant?.id,jwt}))
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
                title={"Ingredient Category"} sx={{pt:2,alignItems:"center"}}
              />

      <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">id</TableCell>
            <TableCell align="left">name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ingredients.category.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{item.id}</TableCell>
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
                  <CreateIngredientCategoryForm />
              </Box>
            </Modal>
            
    </Box>

    
            

    )
}