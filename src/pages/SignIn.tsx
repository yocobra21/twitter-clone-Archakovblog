import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import { ModalBlock } from '../components/ModalBlock';

import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

export const useStylesSignIn = makeStyles({
    wrapper: {
        display: 'flex',
        height: '100vh',
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
        flex: '0 0 50%',
    },
    loginSideIcon: {
        fontSize: 50,
    },
    loginSideWrapper: {
        width: 380,
    },
    aboutSideWrapper: {
        // width: 380
    },
    loginSideTitle: {
        fontWeight: 700,
        fontSize: 50,
        marginTop: 20,
        marginBottom: 50,
    },
    aboutSideListItem: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 700,
        color: 'white',
        marginBottom: 20,
    },
    aboutSideListItemIcon: {
        marginRight: 10,
        fontSize: 35,
    },
});

function SignIn() {
    const classes = useStylesSignIn();

    const [visibleModal, setVisibleModal] = React.useState<
        'signIn' | 'signUp'
    >();

    const handleClickOpenSignIn = (): void => {
        setVisibleModal('signIn');
    };

    const handleClickOpenSignUp = (): void => {
        setVisibleModal('signUp');
    };

    const handleCloseModal = (): void => {
        setVisibleModal(undefined);
    };

    return (
        <div className={classes.wrapper}>
            <section className={classes.aboutSide}>
                <div className={classes.aboutSideWrapper}>
                    <ul>
                        <li>
                            <Typography
                                variant="h5"
                                className={classes.aboutSideListItem}>
                                <SearchIcon
                                    className={classes.aboutSideListItemIcon}
                                />
                                ?????????????? ?? ??????, ?????? ?????? ??????????????????.
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="h5"
                                className={classes.aboutSideListItem}>
                                <PeopleIcon
                                    className={classes.aboutSideListItemIcon}
                                />
                                ??????????????, ?? ?????? ?????????????? ?? ????????.
                            </Typography>
                        </li>
                        <li>
                            <Typography
                                variant="h5"
                                className={classes.aboutSideListItem}>
                                <ModeCommentIcon
                                    className={classes.aboutSideListItemIcon}
                                />
                                ?????????????????????????????? ?? ??????????????.
                            </Typography>
                        </li>
                    </ul>
                </div>
            </section>
            <section className={classes.loginSide}>
                <div className={classes.loginSideWrapper}>
                    <TwitterIcon
                        color="primary"
                        className={classes.loginSideIcon}
                    />
                    <Typography variant="h1" className={classes.loginSideTitle}>
                        ?? ?????????? ??????????????????????????
                    </Typography>
                    <Typography>
                        {' '}
                        <b>?????????????????????????????? ?? ???????????????? ?????????? ????????????!</b>{' '}
                    </Typography>{' '}
                    <br />
                    <Button
                        onClick={handleClickOpenSignUp}
                        style={{ marginBottom: 20 }}
                        variant="contained"
                        color="primary"
                        fullWidth>
                        ????????????????????????????????????
                    </Button>
                    <Button
                        onClick={handleClickOpenSignIn}
                        variant="outlined"
                        color="primary"
                        fullWidth>
                        ??????????
                    </Button>
                    <ModalBlock
                        visible={visibleModal === 'signUp'}
                        onClose={handleCloseModal}
                        classes={classes}
                        dialogTitle="????????????????????????????????????"
                        title="???????????????? ?????????????? ????????????">
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="??????"
                                type="text"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="email"
                                label="??????????"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="password"
                                label="????????????"
                                type="password"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseModal} color="primary">
                                ????????????
                            </Button>
                            <Button onClick={handleCloseModal} color="primary">
                                ??????????
                            </Button>
                        </DialogActions>
                    </ModalBlock>
                    <ModalBlock
                        visible={visibleModal === 'signIn'}
                        onClose={handleCloseModal}
                        classes={classes}
                        dialogTitle="??????????"
                        title="?????????????? ???????? ????????????">
                        <DialogContent>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="email"
                                label="??????????"
                                type="email"
                                fullWidth
                            />
                            <TextField
                                margin="dense"
                                id="password"
                                label="????????????"
                                type="password"
                                fullWidth
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseModal} color="primary">
                                ????????????
                            </Button>
                            <Button onClick={handleCloseModal} color="primary">
                                ??????????
                            </Button>
                        </DialogActions>
                    </ModalBlock>
                </div>
            </section>
        </div>
    );
}

export default SignIn;
