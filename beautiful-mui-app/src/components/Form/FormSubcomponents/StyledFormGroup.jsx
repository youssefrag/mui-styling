import { styled } from "@mui/material/styles";
import { FormGroup } from "@mui/material";

export const StyledFormGroup = styled(FormGroup, {
  name: "StyledFormGroup",
  slot: "Wrapper",
  skipSx: true,
})((props) => ({
  padding: props.theme.spacing(2),
  paddingTop: props.paddingtop,
  justifyContent: "space-between",
}));
