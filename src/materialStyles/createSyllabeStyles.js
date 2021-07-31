import { makeStyles } from '@material-ui/core/styles';


export const useStylesCreateSyllabe = makeStyles((theme) => ({
  underline: {
    "&&&:before": {
      borderBottom: "none"
    },
    "&&:after": {
      borderBottom: "none"
    }
  },

  formControl: {
    // margin: theme.spacing(1),
    minWidth: 120,
  },

  formSelects: {
    // margin: theme.spacing(1),
    width: '100%',
    outline: 'none',
    padding: '4px'
  },
  addButton: {
    marginTop: '5%',
    width: '100%',
  },

  formButton: {
    width: '30%',
    margin: '0 10px'
  },

  textField: {
    width: '100%',

  },
  root: {
    width: '100%',
  },
  title: {
    margin: theme.spacing(1, 0),
  },
  toggleContainer: {
    margin: theme.spacing(0, 0),
  },

  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: '600px'
  },
}));