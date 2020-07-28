import React from "react";
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  withStyles,
} from "@material-ui/core";


const WhiteRadio = withStyles({
  root: {
    color: 'white'
  },
  checked: {},
})((props) => <Radio color="primary" {...props} />);

const radioBtnGroup = ["All", "Dataset", "Tag"];
const RadioButtonGroup = () => {
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <RadioGroup
      value={value}
      row
      onChange={handleChange}
    >
      {radioBtnGroup.map((el, i) => (
        <FormControlLabel  key={i} value={el} control={<WhiteRadio  />} label={el} />
      ))}
    </RadioGroup>
  );
};

export default RadioButtonGroup;
