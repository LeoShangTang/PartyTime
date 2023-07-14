import { useSelector } from "react-redux";
import Person from "./Person";
import { Card, List, Box, Typography } from "@mui/material";
import { RootState } from "../../store";

const AllPersons = () => {

  const people = useSelector((state: RootState) => {
    return state.people.people; // Terrible naming conventions... Change later
  });

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
          {!(people.length === 0) ? (
            <List sx={{ height: "100%", overflow: "auto" }}>
              {people.map((person) => (
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