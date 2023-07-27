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
  flexDirection: "row",
  justifyContent: "space-between",
  boxShadow: 2,
  borderRadius: 3,
 
  '@media (min-width: 500px)': {
    minWidth: 440,
    m: 1,
    p: 1,
  },
  '@media (max-width: 500px)': {
    maxHeight: 60,
    minWidth: 300
  }
}

const priceStyle = {
  color: "#71797E",
  "@media (min-width: 500px)": {
    minWidth: "130px",
  },
  "@media (max-width: 500px)": {
    minWidth: "60px",
    fontSize: "120%"
  },
};

const nameStyle = {
  "@media (min-width: 500px)": {
    minWidth: "120px",
  },
  "@media (max-width: 500px)": {
    minWidth: "70px",
    fontSize: "120%"
  },
}

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
        <Card sx={cardStyle}>
          <CardContent sx={{ alignSelf: "center" }}>
            <Typography variant="h5" component="div" sx={nameStyle}>
              {person.name}
            </Typography>
          </CardContent>
          <CardContent sx={{ alignSelf: "center" }}>
            <Typography variant="h5" component="div" sx={priceStyle}>
              $
              {(Math.round((prices.drinkPrice + prices.foodPrice) * 100) / 100).toFixed(2)}
            </Typography>
          </CardContent>
            <CardActions>
              <MoreInfo person={person} prices={prices} />
              <IconButton onClick={() => handleDeletePerson(person.id)}>
                <DeleteIcon />
              </IconButton>
            </CardActions>
        </Card>
    </ListItem>
  );
}

export default Person