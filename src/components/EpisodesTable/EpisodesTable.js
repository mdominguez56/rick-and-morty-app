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
import Button from "@material-ui/core/Button";

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

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function EpisodesTable() {
  const [episodes, setEpisodes] = useState([]);

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

  const classes = useStyles();

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
                <Button variant="contained" color="primary">
                  See all
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
