import React from 'react';
import dotenv from 'dotenv';
import GoogleLogin from 'react-google-login';


dotenv.config();

 const onSignIn = (googleUser) => {
    const profile = googleUser.getBasicProfile();
    const user = {};
    user.name = profile.getName();
    user.email = profile.getEmail();
    localStorage.setItem('user', JSON.stringify(user));
    location.reload();
    location.href = '';
  }

export default (
      <GoogleLogin
        clientId={"324188947534-ibp78eh5j4ni3j21kfbkf7idl88g06b7.apps.googleusercontent.com"}
        onSuccess={onSignIn}
      >
       <span>Login with Google</span>
      </GoogleLogin>
 );



