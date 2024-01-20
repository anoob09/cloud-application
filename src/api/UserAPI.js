import UserData from '../mockdata/UserMetadata.json';
import EmailList from '../mockdata/EmailList.json';

export const fetchUserDetails = (userId) => {
    // call api to fetch user details
    console.log("fetch user details");
    return UserData;
}

export const fetchUserEmails = (userId) => {
    console.log("fetch user emails");
    return EmailList;
}