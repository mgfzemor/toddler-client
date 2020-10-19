import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 3
  }
}));

export default function ContentItem(props) {
  const classes = useStyles();
const [expanded, setExpanded] = React.useState(false);

const handleChange = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : false);
};

  return (
      <div className={classes.root}>
        <Accordion expanded={expanded === '{painel}'} onChange={handleChange('{painel}')}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header">
            <ListItemIcon>
              <BookIcon color="action" />
            </ListItemIcon>
            <Typography className={classes.heading}>{props.content.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {props.content.description}
            </Typography>
          </AccordionDetails>
          <Divider />
          <AccordionActions>
            <Button size="small">Cancel</Button>
            <Button size="small" color="primary">
              Save
            </Button>
          </AccordionActions>
        </Accordion>
      </div>
  )
}
