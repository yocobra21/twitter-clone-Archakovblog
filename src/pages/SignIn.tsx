import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        height: '100vh'
    },
    aboutSide: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f51b5',
        flex: '0 0 50%'
    },
    loginSide: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '0 0 50%'
    },
    loginSideIcon: {
        fontSize: 50
    },
    loginSideWrapper: {
        width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 50,
        marginTop: 20,
        marginBottom: 50
    }
});


function SignIn() {

    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <section className={classes.aboutSide}>
                <div>
                    <ul>
                        <li>
                            <Typography>Читайте о том, что вам интересно.</Typography>
                        </li>
                        <li>
                            <Typography>Узнайте, о чем говорят в мире.</Typography>
                        </li>
                        <li>
                            <Typography>Присоединяйтесь к общению.</Typography>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideIcon}/>
                    <Typography variant="h1" className={classes.loginSideTitle}>В курсе происходящего</Typography>
                    <Typography>Присоединяйтесь к Твиттеру прямо сейчас!</Typography>
                    <Button variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button variant="outlined" color="primary" fullWidth>Войти</Button>
                </div>
            </section>
        </div>
    );
}

export default SignIn;