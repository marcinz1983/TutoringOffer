import React from 'react';
import {Breadcrumbs as MUIBreadcrumbs, Link, Typography} from "@mui/material";
import {withRouter} from "react-router-dom";
import {BreadcrumbsStyles as styles} from "./breadcrumbs-styles";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumbs = (props: any) => {

    const {history, location: {pathname}} = props;
    const pathnames = pathname.split('/').filter((x: any) => x);

    return (
        <MUIBreadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label={"breadcrumb"} sx={styles.breadcrumbs}>
            {pathnames.length > 0 ? (
                <Link underline="hover" href={""} onClick={() => history.push('/')} color={"inherit"}>home</Link>
            ) : null}

            {pathnames.map((name: any, index: number) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length -1;
                return  isLast? (
                    <Typography sx={styles.lastItem} key={index} color={"primary"}>{name}</Typography>
                ) : (
                    <Link
                        key={index}
                        underline="hover"
                        href={""}
                        onClick={() => history.push(routeTo)}
                        color={"inherit"}>
                        {name}</Link>
                )
            })}
        </MUIBreadcrumbs>
    );
};

export default withRouter(Breadcrumbs);