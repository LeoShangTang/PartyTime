import { CardActions, ListItem, Card, CardContent, Typography, Grid, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { removePerson } from '../../slices/peopleSlice';
import MoreInfo from './MoreInfo';
import IPerson from '../../utils/Types/IPerson';
import { useSelector, useDispatch  } from 'react-redux';
import { RootState } from '../../store';

type Props = {
    person: IPerson
}

const cardStyle = {
  display: "flex",
  minWidth: 440,
  flexDirection: "row",
  justifyContent: "space-between",
  boxShadow: 2,
  borderRadius: 3,
  m: 1,
  p: 1,
};

const Person = ({person} : Props) => {
  const dispatch = useDispatch();

  const handleDeletePerson = (id: string) => {
    dispatch(removePerson({ id }));
  };

  const weightClassPrice = useSelector((state: RootState) => {
    return state.weightClassPrice;
  });

  const personWeightClassPrice = () => {
    let { drinks, food } = person;
    let { drinkPrices, foodPrices } = weightClassPrice;

    let drinkPrice = 0;
    let foodPrice = 0;

    switch (drinks) {
      case "heavy":
        drinkPrice = drinkPrices.heavy;
        break;
      case "medium":
        drinkPrice = drinkPrices.medium;
        break;
      case "light":
        drinkPrice = drinkPrices.light;
        break;
    }

    switch (food) {
      case "heavy":
        foodPrice = foodPrices.heavy;
        break;
      case "medium":
        foodPrice = foodPrices.medium;
        break;
      case "light":
        foodPrice = foodPrices.light;
        break;
    }

    return {drinkPrice, foodPrice};
  };

  const prices = personWeightClassPrice();

  return (
    <ListItem sx={{ display: "flex" }}>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
        <Card sx={cardStyle}>
          <CardContent sx={{ alignSelf: "center", width: "45%" }}>
            <Typography variant="h5" component="div">
              {person.name}
            </Typography>
          </CardContent>
          <CardContent sx={{ alignSelf: "center" }}>
            <Typography
              variant="h5"
              component="div"
              sx={{ width: "130px", color: "#71797E" }}
            >
              $
              {(Math.round((prices.drinkPrice + prices.foodPrice) * 100) / 100).toFixed(2)}
            </Typography>
          </CardContent>
          <Grid item xs={4} container justifyContent="flex-end">
            <CardActions>
              <MoreInfo person={person} prices={prices} />
              <IconButton onClick={() => handleDeletePerson(person.id)}>
                <DeleteIcon />
              </IconButton>
            </CardActions>
          </Grid>
        </Card>
      </Grid>
    </ListItem>
  );
}

export default Person