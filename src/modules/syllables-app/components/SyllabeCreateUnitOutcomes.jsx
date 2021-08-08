import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';

export const SyllabeCreateUnitOutcomes = ({
  outcomes, outcome,
  handleInputChange }) => {

  const classes = useStylesCreateSyllabe();


  return (
    <Accordion className={classes.formSelects}>

      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2bh-content"
        id="panel2bh-header"
      >
        <Typography>Resultados de aprendizaje</Typography>

      </AccordionSummary>

      <AccordionDetails>
        <Grid container spacing={3} spacing={1} >
          <Grid item xs={12}>
            <h5>
              Resultados de aprendizaje:
            </h5>
            <div className={classes.demo}>
              <List>
                {
                  outcomes.length > 0
                    ?
                    outcomes.map((outcome) => {

                      return (
                        <ListItem key={outcome.id}>
                          <ListItemAvatar>
                            <Avatar>
                              <LibraryAddCheckIcon color='primary' />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={`${outcome.description}`}
                          />
                          <ListItemSecondaryAction
                            onClick={() => handDeleteResource(outcome)}
                          >
                            <IconButton edge="end" aria-label="delete">
                              <HighlightOffIcon color='secondary' />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>)
                    })
                    :
                    <Typography variant="h4" className={classes.title}>
                      **Aun no se han agregado resultados de aprendizaje a esta unidad
                    </Typography>
                }
              </List>
            </div>
          </Grid>

          <Grid item xs={12}>
            <h6 style={{ marginTop: '30px' }}>Resultado de aprendizaje:</h6>
            <TextareaAutosize
              aria-label="minimum height"
              className={classes.formSelects}
              minRows={3}
              placeholder="Escriba los principios y procedimientos del curso..."
              id='outcome'
              name='outcome'
              value={outcome}
              onChange={handleInputChange}

            />
          </Grid>

          <Grid item xs={12} align='center'>
            <Button
              variant="contained"
              color="primary"
              className={classes.formButton}
            // onClick={handleAddProfessor}
            >
              Agregar resultado
            </Button>
          </Grid>
        </Grid>

      </AccordionDetails>
    </Accordion>
  )
}
