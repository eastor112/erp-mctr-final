import React, { useState } from 'react'
import { SyllabeCreateUnit } from './SyllabeCreateUnit'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


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
    deleteUnit(id, token).then((data) => {
      const unitsFiltereds = actualSyllabe.units.filter((unit) => unit.id !== id);
      dispatch(updateActualSyllabe({ ...actualSyllabe, units: unitsFiltereds }));
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
