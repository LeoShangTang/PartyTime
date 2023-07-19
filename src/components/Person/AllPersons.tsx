import { useSelector } from "react-redux";
import Person from "./Person";
import { Card, List, Box, Typography } from "@mui/material";
import { RootState } from "../../store";
import { createSelector } from "@reduxjs/toolkit";
// useEffect onChange of number of people, total prices, Ratios
const AllPersons = () => {

  const persons = useSelector((state: RootState) => {
    return state.people.people; // Terrible naming conventions... Change later
  });


  
  // const prices = useSelector(totalPriceSelector);

  // const weightDecimals = useSelector((state: RootState) => {
  //   return {
  //     heavy: state.foodDrinkSetting.heavy / 100,
  //     medium: state.foodDrinkSetting.medium / 100,
  //     light: state.foodDrinkSetting.light / 100,
  //     none: state.foodDrinkSetting.none,
  //   };
  // });

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            width: "100%",
            maxWidth: 500,
            borderRadius: "20px",
            p: 1,
            height: 500,
          }}
        >
          {!(persons.length === 0) ? (
            <List sx={{ height: "100%", overflow: "auto" }}>
              {persons.map((person) => (
                <Person key={person.id} person={person} />
              ))}
            </List>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Typography variant="h5" color="text.secondary">Please Add People!</Typography>
            </Box>
          )}
        </Card>
      </div>
    );
}

export default AllPersons