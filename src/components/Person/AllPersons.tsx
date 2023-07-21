import { useSelector, useDispatch } from "react-redux";
import Person from "./Person";
import { Card, List, Box, Typography } from "@mui/material";
import { RootState } from "../../store";
import {useEffect} from "react"
import { calculateWeightClassPrices } from "../../slices/weightClassPriceSlice";
import { weightDecimalsSelector } from "../../slices/weightClassPriceSlice";

const AllPersons = () => {

  const dispatch = useDispatch();
  const persons = useSelector((state: RootState) => {
    return state.people.persons; // Terrible naming conventions... Change later
  });
  const weightDecimals = useSelector(weightDecimalsSelector);
  const prices = useSelector((state: RootState) => state.totalPrice)

  useEffect(() => {
    dispatch(calculateWeightClassPrices({ persons, weightDecimals, prices }));
  }, [dispatch, persons, weightDecimals, prices]);

    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: "100%", maxWidth: 500, borderRadius: "20px", p: 1, height: 540}}>
          {!(persons.length === 0) ? (
            <List sx={{ height: "100%", overflow: "auto" }}>
              {persons.map((person) => (
                <Person key={person.id} person={person} />
              ))}
            </List>
          ) : (
            <Box
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%"}}>
              <Typography variant="h5" color="text.secondary">Please Add People!</Typography>
            </Box>
          )}
        </Card>
      </div>
    );
}

export default AllPersons