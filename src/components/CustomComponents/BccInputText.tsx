import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const BccLoginInputText = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "#219653"
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "#219653"
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "#E8E8E8"
            },
            "&:hover fieldset": {
                borderColor: "#219653"
            },
            "&.Mui-focused fieldset": {
                borderColor: "#219653"
            }
        }
    }
})(TextField);

export default BccLoginInputText;
