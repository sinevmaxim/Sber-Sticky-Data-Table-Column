import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Box from "@mui/material/Box";

import styled from "@emotion/styled";
import { createData } from "./utils/createData";

const head = [
    "Id",
    "Dessert (100g serving)",
    "Calories",
    "Fat (g)",
    "Carbs (g)",
    "Proteins (g)",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
];

const rows = [
    createData(1, "Frozen yoghurt", 159, 6.0, 24, 4.0, 1, 2, 3, 4, 5, 6),
    createData(2, "Ice cream sandwich", 237, 9.0, 37, 4.3, 1, 2, 3, 4, 5, 6),
    createData(3, "Eclair", 262, 16.0, 24, 6.0, 1, 2, 3, 4, 5, 6),
    createData(4, "Cupcake", 305, 3.7, 67, 4.3, 1, 2, 3, 4, 5, 6),
    createData(5, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(6, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(7, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(8, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(9, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(10, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(11, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(12, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(13, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(14, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(15, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(16, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(17, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(18, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(19, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(20, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(21, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(22, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(23, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(24, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(25, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(26, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
    createData(27, "Gingerbread", 356, 16.0, 49, 3.9, 1, 2, 3, 4, 5, 6),
];

const HeaderTableCell = styled(TableCell)({
    color: "white",
    backgroundColor: "black",
});

const FirstRowElement = styled(HeaderTableCell)({
    position: "sticky",
    left: "0",
});

const LastTableRow = styled(TableRow)({
    "&:last-of-type td, &:last-of-type th": {
        border: 0,
    },
});

const Wrapper = styled(Box)({ width: "3000px" });

const App = () => {
    return (
        <Wrapper>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {head.map((element) => {
                            return <HeaderTableCell>{element}</HeaderTableCell>;
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <LastTableRow key={row.id}>
                            <FirstRowElement component="th" scope="row">
                                {row.id}
                            </FirstRowElement>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.calories}</TableCell>
                            <TableCell>{row.fat}</TableCell>
                            <TableCell>{row.carbs}</TableCell>
                            <TableCell>{row.protein}</TableCell>
                            <TableCell>{row.one}</TableCell>
                            <TableCell>{row.two}</TableCell>
                            <TableCell>{row.three}</TableCell>
                            <TableCell>{row.four}</TableCell>
                            <TableCell>{row.five}</TableCell>
                            <TableCell>{row.six}</TableCell>
                        </LastTableRow>
                    ))}
                </TableBody>
            </Table>
        </Wrapper>
    );
};

export default App;
