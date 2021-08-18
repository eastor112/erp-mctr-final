import React from 'react'
import { SyllabeCreateUnit } from './SyllabeCreateUnit'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import { updateActualSyllabe } from '../../../actions/syllabe-actions';
import { useDispatch } from 'react-redux';
import { SyllabeCreateAddNewUnit } from './SyllabeCreateAddNewUnit';
import { deleteUnit } from '../../../helpers/syllabes-helpers';

export const SyllabeCreateProgramming = ({ actualSyllabe, token }) => {

  const classes = useStylesCreateSyllabe();

  const dispatch = useDispatch();

  const sortUnits = (obj1, obj2) => {
    if (obj1.unitnumber > obj2.unitnumber) { return 1 };
    if (obj1.unitnumber < obj2.unitnumber) { return -1 };
    if (obj1.unitnumber === obj2.unitnumber) { return 0 };
  }

  const handleDeleteUnit = (id) => {
    Swal.fire({
      title: `¿Esta seguro de eliminar esta unidad?`,
      text: "No podrá revertir esta acción luego!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        deleteUnit(id, token)
          .then((data) => {
            const unitsFiltereds = actualSyllabe.units.filter((unit) => unit.id !== id);
            dispatch(updateActualSyllabe({ ...actualSyllabe, units: unitsFiltereds }));

            Swal.fire(
              'Eliminado!',
              'La unidad ha sido eliminada con éxito',
              'success'
            );
          });
      }
    })
  }


  return (

    <>
      <div className="container__datos__generales">
        <Grid container spacing={3} alignItems='flex-end'>
          <Grid item xs={6} >
            <h3>UNIDADES</h3>
          </Grid>
        </Grid>
        {

          actualSyllabe.units.length > 0
            ?
            <>
              {
                actualSyllabe.units.sort(sortUnits).map((unit) => {

                  return (
                    <SyllabeCreateUnit
                      key={unit.id}
                      {...unit}
                      handleDeleteUnit={handleDeleteUnit}
                      syllabeCapabilities={actualSyllabe.course.terminalcapacity}
                      actualSyllabe={actualSyllabe}
                      dispatch={dispatch}
                      token={token}
                    />
                  )
                })
              }
            </>
            :
            <Typography variant="h4" className={classes.title}>
              **Aun no se han agregado unidades al curso
            </Typography>
        }
      </div>

      <SyllabeCreateAddNewUnit
        actualSyllabe={actualSyllabe}
        token={token}
      />
    </>
  )
}
