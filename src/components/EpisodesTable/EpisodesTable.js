import React, { useState, useEffect } from "react";
import Axios from "axios";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import CharacterList from "../CharacterList";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function EpisodesTable() {
  const classes = useStyles();
  const [episodes, setEpisodes] = useState([]);
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <CharacterList episodes={episodes} />
    </div>
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios({
          url: "https://rickandmortyapi.com/api/episode/1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41",
        });

        setEpisodes(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setEpisodes]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Episode N#</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Air date</StyledTableCell>
            <StyledTableCell>Characters</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {episodes.map((episode) => (
            <StyledTableRow key={episode.id}>
              <StyledTableCell component="th" scope="row">
                {episode.id}
              </StyledTableCell>
              <StyledTableCell>{episode.name}</StyledTableCell>
              <StyledTableCell>{episode.air_date}</StyledTableCell>
              <StyledTableCell>
                <button type="button" onClick={handleOpen}>
                  Open Modal
                </button>
                <button
                  onClick={() =>
                    episode.characters.map((character) =>
                      console.log(character)
                    )
                  }
                >
                  Test
                </button>
                <Modal
                  open={open}
                  onClick={handleOpen}
                  onClose={handleClose}
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                >
                  {
                    <div style={modalStyle} className={classes.paper}>
                      <List dense className={classes.root}>
                        {[0, 1, 2, 3].map((value) => {
                          const labelId = `checkbox-list-secondary-label-${value}`;
                          return (
                            <ListItem key={value} button>
                              <ListItemAvatar>
                                <Avatar
                                  alt={`Avatar n??${value + 1}`}
                                  src={`/static/images/avatar/${value + 1}.jpg`}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                id={labelId}
                                primary={`Line item ${value + 1}`}
                              />
                            </ListItem>
                          );
                        })}
                      </List>
                    </div>
                  }
                </Modal>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
