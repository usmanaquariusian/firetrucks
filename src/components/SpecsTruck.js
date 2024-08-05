import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const tabData = [
  { label: 'Tab 1', content: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]] },
  { label: 'Tab 2', content: [[26, 27, 28, 29, 30], [31, 32, 33, 34, 35], [36, 37, 38, 39, 40], [41, 42, 43, 44, 50], [51, 52, 53, 54, 55]] },
  { label: 'Tab 3', content: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]] }
];

const Layout = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', flexGrow: 1 , alignContent: 'space-around', flexWrap:'wrap'}}>
        <Box sx={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
          <Typography variant="h6">LOGO</Typography>
          <Typography variant="body1">Some Text</Typography>
        </Box>
        <Box sx={{ width: '70%' }}>
          <Tabs value={selectedTab} variant="fullWidth" onChange={handleChange} centered aria-label="basic tabs example">
            {tabData.map((tab, index) => (
              <Tab key={index} label={tab.label} />
            ))}
          </Tabs>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <TabPanel value={selectedTab} index={0}>
          <TableComponent data={tabData[0].content} />
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          <TableComponent data={tabData[1].content} />
        </TabPanel>
        <TabPanel value={selectedTab} index={2}>
          <TableComponent data={tabData[2].content} />
        </TabPanel>
      </Box>
    </Box>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const TableComponent = ({ data }) => (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Column 1</TableCell>
          <TableCell>Column 2</TableCell>
          <TableCell>Column 3</TableCell>
          <TableCell>Column 4</TableCell>
          <TableCell>Column 5</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <TableCell key={cellIndex}>{cell}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default Layout;
