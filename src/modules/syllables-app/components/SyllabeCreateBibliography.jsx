import React from 'react'
import { SyllabeCreateRevision } from './SyllabeCreateRevision'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import PersonIcon from '@material-ui/icons/Person';
import BookIcon from '@material-ui/icons/Book';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import ListItemText from '@material-ui/core/ListItemText';









export const SyllabeCreateBibliography = () => {
  const classes = useStylesCreateSyllabe();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div className="container__datos__generales">
      <Grid container spacing={3} alignItems='flex-end'>

        <Grid item xs={6} >
          <h4>RECURSOS BIBLIOGRÁFICOS</h4>
        </Grid>

        <Grid item xs={6} align='end'>
          <SyllabeCreateRevision />
        </Grid>



        <Grid item xs={12}>
          {
            ([1, 2].length > 0)
              ?
              <div className={classes.demo}>
                <List>
                  {
                    [1, 2].map((profe) => {
                      {/* const ind = professors.find(pro => pro.id === profe) */ }
                      return (
                        <ListItem key={profe}>
                          <ListItemAvatar>
                            <Avatar>
                              <BookIcon color='primary' />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                          // primary={`${ind?.fathername} ${ind?.mothername}, ${ind?.names} (${ind?.codeprofessor})`}
                          />
                          <ListItemSecondaryAction
                          // onClick={() => handDeleteProfessor(profe)}
                          >
                            <IconButton edge="end" aria-label="delete">
                              <HighlightOffIcon color='secondary' />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>)
                    })
                  }
                </List>
              </div>
              :
              <Typography variant="h4" className={classes.title}>
                **Aun no se ha agregado ningún recurso
              </Typography>
          }
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="standard-basic"
            label="Referencia en formato APA:"
            className={classes.formSelects}
          />


          <TextField
            id="standard-basic"
            label="Ubicación del recurso:"
            className={classes.formSelects}
          />


          <FormControlLabel
            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
            label="Recurso principal:"
          // labelPlacement="start"
          />

        </Grid>

        <Grid item xs={12}
          align='start'
        >
          <Button
            variant="outlined"
            color="primary"
            className={classes.formButton}

          // onClick={handleAddProfessor}
          >
            Agregar recurso
          </Button>
        </Grid>


        <Grid item xs={12} align='center'>
          <Button
            variant="contained"
            color="primary"
            className={classes.formButton}
          // onClick={handleUdpadeGeneralData}
          >
            Guardar datos
          </Button>
        </Grid>

      </Grid>
    </div>
  )
}
