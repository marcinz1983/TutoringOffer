import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { footerStyles as styles } from "./footer-styles";
import {FOOTER} from "../../utility/constants";
import {ROUTER_CONSTANTS} from "../../utility/router-constants";

export const FooterLinks = () => {
  return (
    <div>
      <Typography variant="h5">{FOOTER.HEADING}</Typography>
      <ul style={styles.footerRightUl}>
        <li style={styles.footerRightLi} key={FOOTER.LINK_1_TEXT}>
          <Link to={ROUTER_CONSTANTS.HOME} style={styles.footerRightLiLink}>
            {FOOTER.LINK_1_TEXT}
          </Link>
        </li>
        <li style={styles.footerRightLi} key={FOOTER.LINK_2_TEXT}>
          <Link to={ROUTER_CONSTANTS.SEARCH} style={styles.footerRightLiLink}>
            {FOOTER.LINK_2_TEXT}
          </Link>
        </li>
        <li style={styles.footerRightLi} key={FOOTER.LINK_3_TEXT}>
          <Link to={ROUTER_CONSTANTS.PRIVACY_POLICY} style={styles.footerRightLiLink}>
            {FOOTER.LINK_3_TEXT}
          </Link>
        </li>
        <li style={styles.footerRightLi} key={FOOTER.LINK_4_TEXT}>
          <Link to={ROUTER_CONSTANTS.TERMS_OF_SERVICE} style={styles.footerRightLiLink}>
            {FOOTER.LINK_4_TEXT}
          </Link>
        </li>
      </ul>
    </div>
  );
};
