import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import ModeCommentIcon from '@material-ui/icons/ModeComment';



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
        flex: '0 0 50%',
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
    aboutSideWrapper: {
        // width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 50,
        marginTop: 20,
        marginBottom: 50
    },
    aboutSideListItem: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 700,
        color: 'white',
        marginBottom: 20
    },
    aboutSideListItemIcon: {
        marginRight: 10,
        fontSize: 35
    }
});


function SignIn() {

    const classes = useStyles();


    return (
        <div className={classes.wrapper}>
            <section className={classes.aboutSide}>
                <div className={classes.aboutSideWrapper}>
                    <ul>
                        <li>
                            <Typography variant="h5" className={classes.aboutSideListItem}>
                                <SearchIcon className={classes.aboutSideListItemIcon} />
                                Читайте о том, что вам интересно.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="h5" className={classes.aboutSideListItem}>
                                <PeopleIcon className={classes.aboutSideListItemIcon} />
                                Узнайте, о чем говорят в мире.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="h5" className={classes.aboutSideListItem}>
                                <ModeCommentIcon className={classes.aboutSideListItemIcon} />
                                Присоединяйтесь к общению.
                            </Typography>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon color="primary" className={classes.loginSideIcon} />
                    <Typography variant="h1" className={classes.loginSideTitle}>В курсе происходящего</Typography>
                    <Typography> <b>Присоединяйтесь к Твиттеру прямо сейчас!</b> </Typography> <br />
                    <Button style={{ marginBottom: 20 }} variant="contained" color="primary" fullWidth>Зарегистрироваться</Button>
                    <Button onClick={handleClickOpen} variant="outlined" color="primary" fullWidth>Войти</Button>

                    

                </div>
            </section>
        </div>
    );
}

export default SignIn;