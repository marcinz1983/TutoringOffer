import {useState} from 'react';
import {Button} from "@mui/material";
import {phoneDisplayerStyles as styles} from "./phone-displayer-styles";
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

interface IPhoneDisplayer {
    userPhoneNumber: string
}

const PhoneDisplayer = (props: IPhoneDisplayer) => {

    const {userPhoneNumber} = props;
    const [showNumberToUser, setShowNumberToUser] = useState(false)

    if (!userPhoneNumber) {
        return null
    }

        const separatedNumber = userPhoneNumber.match(/.{1,3}/g);
        return (
            <Button onClick={() => setShowNumberToUser(true)} sx={styles.button} startIcon={<LocalPhoneOutlinedIcon color={"primary"} />}>
                {showNumberToUser ?
                    separatedNumber!.join("-")
                    :
                    `${separatedNumber![0]}-${separatedNumber![1]}-XXX-XXX`
                }
            </Button>
        );

};

export default PhoneDisplayer;
