import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({data}) {
  return (
    <div>
        {data.map(item => {
            return (
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                    <Typography>{item.title}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        {item.content}
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        })}
    </div>
  );
}
