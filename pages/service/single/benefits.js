import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Benefits = ({ faq }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="wpo-benefits-section">
            <div className="row">
                <div className="col-lg-12 col-12">
                    <div className="wpo-benefits-item">
                        {faq && faq.length > 0 ? (
                            faq.map((item, index) => (
                                <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                    <AccordionSummary
                                        expandIcon={"+"}
                                        aria-controls={`panel${index}bh-content`}
                                        id={`panel${index}bh-header`}
                                    >
                                        <Typography>{item.question}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>{item.answer}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            ))
                        ) : (
                            <p>Geen veelgestelde vragen beschikbaar.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefits;
