import React, { useState } from 'react'
import { useStylesCreateSyllabe } from '../../../materialStyles/createSyllabeStyles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { green } from '@material-ui/core/colors';
import { yellow } from '@material-ui/core/colors';
import { blue } from '@material-ui/core/colors';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import MessageIcon from '@material-ui/icons/Message';


export const SyllabeCreateRevision = () => {

  const classes = useStylesCreateSyllabe();

  const [alignment, setAlignment] = useState('unreviewed');
  const [formats, setFormats] = useState(() => ['phone']);

  const handleFormat = (event, newFormats) => {
    if (newFormats.length) {
      setFormats(newFormats);
    }
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (

    <div className={classes.toggleContainer}>
      <ToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <ToggleButton value="unreviewed" aria-label="left aligned">
          <RadioButtonUncheckedIcon color='primary' />
        </ToggleButton >
        <ToggleButton value="observed" style={{ color: yellow[900] }} aria-label="centered">
          <ErrorOutlineIcon />
        </ToggleButton>
        <ToggleButton value="correct" style={{ color: green[500] }} aria-label="right aligned">
          <CheckCircleOutlineIcon />
        </ToggleButton>
        <ToggleButton value="message" aria-label="justified" disabled>
          <MessageIcon style={{ color: blue[200] }} />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>

  );
}
