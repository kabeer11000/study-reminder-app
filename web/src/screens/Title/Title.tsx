import React, {FC} from 'react';
import {Button, Container, Typography} from "@mui/material";


interface TitleProps {
}

const Title: FC<TitleProps> = () => (
    <div>
        <img alt={"Education Illustration"} style={{
            position: "absolute",
            top: "-0rem",
            width: "100%",
            zIndex: "-3",
            display: "none",
            maxWidth: "30rem",
            height: "auto",
            left: "-0rem"
        }} src={"./top.svg"}/>
        <Container maxWidth={"md"} style={{marginTop: "6rem"}}>
            <Typography variant='h2' style={{textAlign: "left", fontWeight: "900"}}>
                Welcome to
                <br/> StudySync
            </Typography>
            <Typography variant='h5' sx={{fontWeight: "300", mt: "1rem"}}>
                The lectures app
            </Typography>
            <img alt={'ABC'} src='bg-image.svg'
                 style={{float: "right", width: '30vw', minWidth: '20rem', maxWidth: '40rem'}}/>
            <div style={{marginTop: "5rem"}}>
                <Button style={{width: "100%"}} variant={"contained"}>Design your sync!</Button>
            </div>
        </Container>
    </div>
);

export default Title;
