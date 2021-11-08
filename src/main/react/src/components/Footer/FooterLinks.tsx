import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { footerStyles as styles } from "./footer-styles";
import {
  FOOTER_LINK_1_TEXT,
  FOOTER_LINK_2_TEXT,
  FOOTER_LINK_3_TEXT,
  FOOTER_LINK_4_TEXT,
  FOOTER_HEADING,
} from "../../utility/constants";

export const FooterLinks = () => {
  return (
    <div>
      <Typography variant="h5">{FOOTER_HEADING}</Typography>
      <ul style={styles.footerRightUl}>
        <li style={styles.footerRightLi}>
          <Link to="#" style={styles.footerRightLiLink}>
            {FOOTER_LINK_1_TEXT}
          </Link>
        </li>
        <li style={styles.footerRightLi}>
          <Link to="#" style={styles.footerRightLiLink}>
            {FOOTER_LINK_2_TEXT}
          </Link>
        </li>
        <li style={styles.footerRightLi}>
          <Link to="#" style={styles.footerRightLiLink}>
            {FOOTER_LINK_3_TEXT}
          </Link>
        </li>
        <li style={styles.footerRightLi}>
          <Link to="#" style={styles.footerRightLiLink}>
            {FOOTER_LINK_4_TEXT}
          </Link>
        </li>
      </ul>
    </div>
  );
};
