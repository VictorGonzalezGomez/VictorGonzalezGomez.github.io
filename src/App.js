import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Box, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function App() {

  return (
    <Grid
      container
      justifyContent='center'
      alignItems='center'
      sx={{width: '100%', height: '100%'}}>
      <Box sx={{width: '100%'}}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Compañia 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Area 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Rut</TableCell>
                        <TableCell align="right">Edad</TableCell>
                        <TableCell align="right">Profesión</TableCell>
                        <TableCell align="right">Cargo</TableCell>
                        <TableCell align="right">Grupo familiar</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">No aplica</TableCell>
                      </TableRow>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">
                          <ul>
                          <li>Julio</li>
                          <li>Carmen</li>
                          <li>Ignacio</li>
                          <li>Elena</li>
                        </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">No aplica</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Area  2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Rut</TableCell>
                        <TableCell align="right">Edad</TableCell>
                        <TableCell align="right">Profesión</TableCell>
                        <TableCell align="right">Cargo</TableCell>
                        <TableCell align="right">Grupo familiar</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">No aplica</TableCell>
                      </TableRow>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">
                          <ul>
                            <li>Julio</li>
                            <li>Carmen</li>
                            <li>Ignacio</li>
                            <li>Elena</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">No aplica</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Compañia 2</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Area 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Rut</TableCell>
                        <TableCell align="right">Edad</TableCell>
                        <TableCell align="right">Profesión</TableCell>
                        <TableCell align="right">Cargo</TableCell>
                        <TableCell align="right">Grupo familiar</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">No aplica</TableCell>
                      </TableRow>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">
                          <ul>
                            <li>Julio</li>
                            <li>Carmen</li>
                            <li>Ignacio</li>
                            <li>Elena</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">No aplica</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon/>}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Compañia 3</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Area 1</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Rut</TableCell>
                        <TableCell align="right">Edad</TableCell>
                        <TableCell align="right">Profesión</TableCell>
                        <TableCell align="right">Cargo</TableCell>
                        <TableCell align="right">Grupo familiar</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">No aplica</TableCell>
                      </TableRow>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">
                          <ul>
                            <li>Julio</li>
                            <li>Carmen</li>
                            <li>Ignacio</li>
                            <li>Elena</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">No aplica</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Area 2</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Rut</TableCell>
                        <TableCell align="right">Edad</TableCell>
                        <TableCell align="right">Profesión</TableCell>
                        <TableCell align="right">Cargo</TableCell>
                        <TableCell align="right">Grupo familiar</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">No aplica</TableCell>
                      </TableRow>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">
                          <ul>
                            <li>Julio</li>
                            <li>Carmen</li>
                            <li>Ignacio</li>
                            <li>Elena</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">No aplica</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel3a-content"
                id="panel3a-header"
              >
                <Typography>Area 3</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer component={Paper}>
                  <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="right">Nombre</TableCell>
                        <TableCell align="right">Rut</TableCell>
                        <TableCell align="right">Edad</TableCell>
                        <TableCell align="right">Profesión</TableCell>
                        <TableCell align="right">Cargo</TableCell>
                        <TableCell align="right">Grupo familiar</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">No aplica</TableCell>
                      </TableRow>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">
                          <ul>
                            <li>Julio</li>
                            <li>Carmen</li>
                            <li>Ignacio</li>
                            <li>Elena</li>
                          </ul>
                        </TableCell>
                      </TableRow>
                      <TableRow
                      >
                        <TableCell align="right">Paco</TableCell>
                        <TableCell align="right">23123113</TableCell>
                        <TableCell align="right">356</TableCell>
                        <TableCell align="right">Diseñador</TableCell>
                        <TableCell align="right">Gerente</TableCell>
                        <TableCell align="right">No aplica</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </AccordionDetails>
            </Accordion>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Grid>
  );
}

export default App;
