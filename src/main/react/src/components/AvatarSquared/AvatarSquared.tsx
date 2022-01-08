import React from 'react';
import {Avatar} from "@mui/material";
import manAvatarPlaceholder from '../../assets/photo-placeholder-man.png'
import {IAvatarSquared} from "../../typescript/interfaces";

const AvatarSquared = (props: IAvatarSquared) => {

    const { image, alt, width, height} = props

    return (
        <Avatar
            alt={alt}
            src={image? (image !== "not supported yet" ? image : manAvatarPlaceholder) : manAvatarPlaceholder}
            sx={{
                width: width,
                height: height,
                borderRadius: '30px'}}
        />
    );
};

export default AvatarSquared;