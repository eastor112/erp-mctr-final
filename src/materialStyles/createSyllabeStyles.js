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
  },

  textField: {
    width: '100%',

  },
  root: {
    width: 500,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));