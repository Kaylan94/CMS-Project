import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { BuilderComponent } from '@builder.io/react'

function sleep(delay = 0) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

export const Searchbar = () => {
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      await sleep(1e3); // For demo purposes.

      if (active) {
        setOptions([...Fields]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

  React.useEffect(() => {
    if (!open) {
      setOptions([]);
    }
  }, [open]);

  return (
    <Autocomplete
      id="asynchronous-search"
      style={{ width: 300, marginRight: 'auto', marginLeft: 'auto', fontWeight: 600}}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}

const Fields = [
  { title: 'Commerce', category: 'Course', year: 2021 },
  { title: 'Accounting', category: 'Course', year: 2021 },
  { title: 'Humanities', category: 'Course', year: 2021 },
  { title: 'Nursing', category: 'Course', year: 2021 },
  { title: 'Engineering', category: 'Course', year: 2021 },
  { title: "Human Resources", category: 'Course', year: 2021 },
  { title: 'Chemistry', category: 'Course', year: 2021 },
  {
    title: 'Covid-19 Personal Protection',
    category: 'Life Hacks',
    year: 2021
  },
  { title: 'Marketing', category: 'Research', year: 2021 },
  { title: 'Interview Preparation', category: 'Life Hacks', year: 2021 },
  {
    title: 'The Age of Automation',
    category: 'Research',
    year: 2021
  },
  {
    title: 'Ultimate Focus',
    category: 'Lifehacks',
    year: 2021,
  },
];