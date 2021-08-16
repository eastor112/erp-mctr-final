import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import StarIcon from '@material-ui/icons/Star';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



export const SyllabeCreateUnitCapacities = ({
  capabilities,
  syllabeCapabilities,
  handleInputChange,
  capability,
  addCapacity,
  deleteCapability }) => {

  const classes = useStylesCreateSyllabe();

  return (
    <Accordion className={classes.formSelects}>

      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography className={classes.heading}>Capacidades</Typography>

      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={3} spacing={1} >
          <Grid item xs={12}>
            <h5>
              Capacidades:
            </h5>
            <div className={classes.demo}>
              <List>
                {
                  capabilities.length > 0
                    ?
                    capabilities.map((cap) => {
                      return (
                        <ListItem key={cap.capacity.id}>
                          <ListItemAvatar>
                            <Avatar>
                              <StarIcon color='primary' />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={`(${cap.capacity.code} - ${cap.capacity.indicatoricacit}) ${cap.capacity.description.substring(0, 60)}...`}
                          />
                          <ListItemSecondaryAction
                            onClick={() => deleteCapability(cap.id)}
                          >
                            <IconButton edge="end" aria-label="delete">
                              <HighlightOffIcon color='secondary' />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>)
                    })
                    :
                    <Typography variant="h4" className={classes.title}>
                      **Aun no se han agregado capacidades a esta unidad
                    </Typography>
                }
              </List>
            </div>
          </Grid>


          <Grid item xs={12}>
            <FormControl className={classes.formSelects}>
              <InputLabel id="course-label">Capacidad terminal</InputLabel>
              <Select
                labelId="course-label"
                id="capability"
                name="capability"
                value={capability}
                onChange={handleInputChange}
              >
                {
                  syllabeCapabilities.map(cap => {

                    const capacitiesExist = capabilities.map((capUnit) => {
                      return capUnit.capacity.id
                    })

                    if (capacitiesExist.includes(cap.id)) {
                      return
                    }

                    return (
                      <MenuItem
                        key={cap.id}
                        value={cap.id}
                      >
                        ({cap.code} - {cap.indicatoricacit}) {cap.description.substring(0, 70)}...
                      </MenuItem>)
                  })
                }
              </Select>
            </FormControl>
          </Grid>


          <Grid item xs={12} align='center'>
            <Button
              variant="contained"
              color="primary"
              className={classes.formButton}
              onClick={addCapacity}
            >
              Agregar capacidad
            </Button>
          </Grid>
        </Grid>

      </AccordionDetails>
    </Accordion>
  )
}
