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
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import BookIcon from '@material-ui/icons/Book';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import { useForm } from '../../../hooks/useForm';
import { createResource, deleteResource } from '../../../helpers/syllabes-helpers';
import { updateActualSyllabe } from '../../../actions/syllabe-actions';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2/dist/sweetalert2.all.js'



export const SyllabeCreateBibliography = ({ actualSyllabe, token }) => {

  const dispatch = useDispatch();

  const { formValues, handleInputChange, handleInputCheckChange, setFormValues } = useForm({
    resources: actualSyllabe.bibliography.resources,
    reference: '',
    location: '',
    principalresource: false
  });

  const {
    resources,
    reference,
    location,
    principalresource
  } = formValues;

  const classes = useStylesCreateSyllabe();



  const handleAddResource = () => {

    if (reference.length > 0 && location.length > 0) {

      Swal.fire({
        title: 'Agregando recurso',
        html: 'Espere...',
        allowEscapeKey: false,
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading()
        }
      });

      createResource({
        bibliography: actualSyllabe.bibliography.id,
        reference: reference,
        location: location,
        principalresource: principalresource
      }, token)
        .then((resourceCreated) => {

          const newResources = [...resources, { ...resourceCreated }]

          setFormValues(prev => ({
            ...prev,
            resources: newResources,
            reference: '',
            location: '',
            principalresource: false
          }));

          const syllabeUpdated = {
            ...actualSyllabe,
            bibliography: { ...actualSyllabe.bibliography, resources: newResources }
          };
          dispatch(updateActualSyllabe(syllabeUpdated));

          Swal.close();
        });

    }
  };



  const handDeleteResource = (id) => {

    Swal.fire({
      title: 'Eliminando recurso',
      html: 'Espere...',
      allowEscapeKey: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    });

    deleteResource(id, token)
      .then(() => {

        const newResources = resources.filter(res => res.id !== id);

        setFormValues(prev => ({
          ...prev,
          resources: newResources
        }));

        const syllabeUpdated = {
          ...actualSyllabe,
          bibliography: { ...actualSyllabe.bibliography, resources: newResources }
        };
        dispatch(updateActualSyllabe(syllabeUpdated));

        Swal.close();
      });
  }


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
            (resources.length > 0)
              ?
              <div className={classes.demo}>
                <List>
                  {
                    resources.map((resource) => {

                      return (
                        <ListItem key={resource.id}>
                          <ListItemAvatar>
                            <Avatar>
                              <BookIcon color='primary' />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={`${resource.reference} ${resource.principalresource ? ' - [Recurso principal]' : ''} - (Ubicado en: ${resource.location}) `}
                          />
                          <ListItemSecondaryAction
                            onClick={() => handDeleteResource(resource.id)}
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
            label="Referencia en formato APA:"
            className={classes.formSelects}
            id="reference"
            name='reference'
            value={reference}
            onChange={handleInputChange}
          />


          <TextField
            label="Ubicación del recurso:"
            className={classes.formSelects}
            id="location"
            name='location'
            value={location}
            onChange={handleInputChange}
          />


          <FormControlLabel
            control={<Checkbox checked={principalresource} onChange={handleInputCheckChange} name="principalresource" />}
            label="Recurso principal:"
          />
        </Grid>


        <Grid item xs={12} align='center'>
          <Button
            variant="contained"
            color="primary"
            className={classes.formButton}
            onClick={handleAddResource}
          >
            Agregar recurso
          </Button>
        </Grid>

      </Grid>
    </div>
  )
}
