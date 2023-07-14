import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActions, ListItem } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux'
import { removePerson } from '../../slices/peopleSlice';
import MoreInfo from './MoreInfo';
import PersonType from '../../utils/Types/PersonType';

type Props = {
    person: PersonType
}

const style = { display: 'flex', minWidth: 440 , flexDirection: "row", justifyContent: 'space-between', boxShadow: 2, borderRadius: 3, m:1, p:1 };

const Person = ({person} : Props) => {

  const dispatch = useDispatch()

  const handleDeletePerson = (id: string) => {
    dispatch(removePerson({id}));
  }

    return (
      <ListItem sx={{ display: "flex" }}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Card sx={style}>
            <CardContent sx={{ alignSelf: "center" }}>
              <Typography variant="h5" component="div">
                {person.name}
              </Typography>
            </CardContent>
            <Grid item xs={4} container justifyContent="flex-end">
              <CardActions>
                <MoreInfo person={person} />
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