import React from 'react';
import {Platform} from 'react-native'
import axios from 'axios';
import Api from '../Api';
//let device_platform = Platform.OS === 'ios'? 'iOS_App' : 'Android_App';
// let timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
// axios.defaults.headers.common['platform'] = `${'mobile'}`;
// axios.defaults.headers["Device-Type"] = `${device_platform}`;
// axios.defaults.headers["Time-Zone"] = `${timeZone}`;



export function loginUser(params) {
     return axios.post(Api.MOBILE_SENT_OTP,params)

}