import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({headers, body}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
              {headers.map(item => {
                  return (
                    <TableCell>{item}</TableCell>
                  )
              })}
          </TableRow>
        </TableHead>
        <TableBody>
            {body.map(row => {
                return (
                    <TableRow>
                        {row.map(item => {
                            return (
                                <TableCell>{item}</TableCell>
                            )
                        })}
                    </TableRow>
                )
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
