import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Divider } from '@mui/material';
import { styled } from '@mui/system';
import CyberIcon from '../content/images/CYBERTRUCK.svg';
import DimensionImage from '../content/images/dimensions.png';

const tabData = [
  { 
    label: 'CYBERBEAST', 
    content: [
      {
        heading: 'Performance',
        data: [
          ['Range (est.)', 'Range (+Range Extender)', 'Acceleration', 'Drive', 'Top Speed'],
          ['515 km', '705+ km', '2.7 sec² 0-100 km/h', 'All-Wheel Drive', '209 km/h'],
          ['Towing', '4,990 kg', '', '', '']
        ]
      },
      {
        heading: 'Dimensions',
        data: [
          ['Weight', 'Cargo', 'Wheels', 'Ground Clearance'],
          ['3,104 kg', '3,423.5 liters', '20"', '406 mm in extract mode'],
          ['Seating', 'Displays', 'Overall Width', 'Overall Height'],
          ['5 adults', '18.5" center touchscreen, 9.4" rear touchscreen', 'Folded mirrors: 2,200.7 mm, Extended mirrors: 2,413.3 mm', '1,790.8 mm'],
          ['Overall Length', 'Image', '', ''],
          ['5,682.9 mm', <img src={DimensionImage} alt="Dimension" style={{ width: '100%' }} />, '', '']
        ]
      }
    ]
  },
  { 
    label: 'ALL-WHEEL DRIVE', 
    content: [
      {
        heading: 'Performance',
        data: [
          ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4', 'Metric 5'],
          ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'],
          ['Another Metric', 'Another Value', '', '', '']
        ]
      },
      {
        heading: 'Dimensions',
        data: [
          ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4'],
          ['Value 6', 'Value 7', 'Value 8', 'Value 9'],
          ['Metric', 'Value', '', '']
        ]
      }
    ]
  },
  { 
    label: 'REAR-WHEEL DRIVE', 
    content: [
      {
        heading: 'Performance',
        data: [
          ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4', 'Metric 5'],
          ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5'],
          ['Another Metric', 'Another Value', '', '', '']
        ]
      }
    ]
  }
];

const CustomTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  fontSize: '1.2rem',
  color: '#a2a3a5',
  marginTop: '20px'
}));

const CustomTab = styled(Tab)(({ theme }) => ({
  background: 'black',
  textAlign: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  width: '20%',
  color: '#a2a3a5',
  padding: '5px 20px',
  borderTop: '2px solid transparent',
  borderRadius: '1px',
  '&:hover': {
    backgroundColor: '#121212',
    borderTop: '2px solid #a2a3a5',
  },
  '&.Mui-selected': {
    backgroundColor: '#121212',
    borderTop: '2px solid #a2a3a5',
    color: '#a2a3a5'
  }
}));

const Layout = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '80%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', flexGrow: 1, alignContent: 'center', flexWrap: 'wrap' }}>
          <Box sx={{ width: '30%', display: 'flex', alignItems: 'center', justifyContent: 'right', gap: 0 }}>
            <img src={CyberIcon} alt="Logo" style={{ height: '60px', width: 'auto' }} />
            <CustomTypography variant="body2">SPECS</CustomTypography>
          </Box>
          <Box sx={{ width: '70%' }}>
            <Tabs 
              value={selectedTab}  
              onChange={handleChange} 
              centered 
              aria-label="custom tabs example"
              sx={{ 
                '.MuiTabs-indicator': { 
                  backgroundColor: 'transparent' 
                } 
              }}
            >
              {tabData.map((tab, index) => (
                <CustomTab key={index} label={tab.label} />
              ))}
            </Tabs>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1, width: '100%' }}>
          {tabData.map((tab, index) => (
            <TabPanel value={selectedTab} index={index} key={index}>
              {tab.content.map((section, sectionIndex) => (
                <React.Fragment key={sectionIndex}>
                  <Typography variant="h6" sx={{ color: '#a2a3a5', marginBottom: 2 }}>
                    {section.heading}
                  </Typography>
                  <TableComponent data={section.data} />
                  {sectionIndex < tab.content.length - 1 && <Divider sx={{ my: 3, borderColor: '#a2a3a5' }} />}
                </React.Fragment>
              ))}
            </TabPanel>
          ))}
        </Box>
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
  <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
    <Table sx={{ color: '#ffffff', fontSize: '1rem', textTransform: 'uppercase' }}>
      <TableHead>
        <TableRow>
          {data[0].map((header, index) => (
            <CustomTableCell key={index}>{header}</CustomTableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.slice(1).map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <CustomTableCell key={cellIndex}>{cell}</CustomTableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const CustomTableCell = styled(TableCell)(({ theme }) => ({
  color: '#a2a3a5',
  fontSize: '0.7rem',
  textTransform: 'uppercase',
  borderBottom: 'none', // Optionally remove the bottom border
}));

export default Layout;
