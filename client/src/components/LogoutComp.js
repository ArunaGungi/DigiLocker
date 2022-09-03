import HomeComp from './HomeComp';

const LogoutComp = () => {
    window.localStorage.setItem("isLoggedIn",false);
    return (
        <HomeComp/>
    )
}

export default LogoutComp;