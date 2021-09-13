import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CharacterList(props) {
  const { episodes } = props;
  const [characters, setCharacters] = useState([]);
  const classes = useStyles();

  const test = () => {
    console.log(episodes);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          url: "https://rickandmortyapi.com/api/episode/1",
        });

        setCharacters(response.data.characters);
        //console.log(response.data.characters);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setCharacters]);

  return (
    <List dense className={classes.root}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem key={value} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
            <button onClick={test}>Test</button>
          </ListItem>
        );
      })}
    </List>
  );
}
