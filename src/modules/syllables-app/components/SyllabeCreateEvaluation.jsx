import React from 'react'
import { SyllabeCreateRevision } from './SyllabeCreateRevision'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';


export const SyllabeCreateEvaluation = ({
  legalbase,
  procedures,
  evaluationdetail,
  criteria,
  achievementlevel,
  handleInputChange,
  handleUdpadeGeneralData }) => {

  const classes = useStylesCreateSyllabe();


  return (
    <div className="container__datos__generales">
      <Grid container spacing={3} alignItems='flex-end'>

        <Grid item xs={6} >
          <h4>DESCRIPCIÓN</h4>
        </Grid>
        <Grid item xs={6} align='end'>
          <SyllabeCreateRevision />
        </Grid>

        <Grid item xs={12}>
          <h6>Base legal:</h6>
          <TextareaAutosize
            aria-label="minimum height"
            className={classes.formSelects}
            minRows={2}
            placeholder="Escriba la base legal en el que se fundamenta la evaluación del curso...."
            id='legalbase'
            name='legalbase'
            value={legalbase}
            onChange={handleInputChange}
          />
        </Grid>

        <Grid item xs={12}>
          <h6>Principios y procedimientos:</h6>
          <TextareaAutosize
            aria-label="minimum height"
            className={classes.formSelects}
            minRows={5}
            placeholder="Escriba los principios y procedimientos del curso..."
            id='procedures'
            name='procedures'
            value={procedures}
            onChange={handleInputChange}

          />
        </Grid>

        <Grid item xs={12}>
          <h6>Detalle del cálculo de notas:</h6>
          <TextareaAutosize
            aria-label="minimum height"
            className={classes.formSelects}
            minRows={5}
            placeholder="Escriba la forma como se calculará la nota final del curso..."
            id='evaluationdetail'
            name='evaluationdetail'
            value={evaluationdetail}
            onChange={handleInputChange}

          />
        </Grid>

        <Grid item xs={12}>
          <h6>Criterios para la promoción:</h6>
          <TextareaAutosize
            aria-label="minimum height"
            className={classes.formSelects}
            minRows={5}
            placeholder="Escriba los criterios necesarios para la promoción del estudiante..."
            id='criteria'
            name='criteria'
            value={criteria}
            onChange={handleInputChange}

          />
        </Grid>

        <Grid item xs={12}>
          <h6>Niveles de logro:</h6>
          <TextareaAutosize
            aria-label="minimum height"
            className={classes.formSelects}
            minRows={5}
            placeholder="Escriba los criterios necesarios para la promoción del estudiante..."
            id='achievementlevel'
            name='achievementlevel'
            value={achievementlevel}
            onChange={handleInputChange}

          />
        </Grid>

        <Grid item xs={12} align='center'>
          <Button
            variant="contained"
            color="primary"
            className={classes.formButton}
            onClick={handleUdpadeGeneralData}
          >
            Guardar datos
          </Button>
        </Grid>

      </Grid>

    </div>
  )
}
