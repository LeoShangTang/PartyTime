import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { Ref } from 'react';

type Props = {
    isDisabled?: boolean,
    label: string,
    defaultValue: number,
    inputRef?: Ref<HTMLDivElement>
}

const SettingTextField = ({isDisabled = false, label, defaultValue, inputRef = null} : Props) => {
    return (
      <>
        <TextField
          id={label}
          disabled={isDisabled}
          label={label}
          type="number"
          sx={{width:200}}
          inputRef={inputRef}
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{
            endAdornment: <InputAdornment position="end">%</InputAdornment>,
            inputProps: { min: 0, max: 100, step: 5, defaultValue },
          }}
        />
      </>
    );
}

export default SettingTextField