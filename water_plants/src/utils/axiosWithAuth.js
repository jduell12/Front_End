// import axios from 'axios';

// export const axiosWithAuth = () => {
//     const token = localStorage.getItem('token');

//     return axios.create({
//         headers:{
//             Authorization: token
//         },
//         baseURL: 'https://watermyplantsdatabase.herokuapp.com/'
//     })
// }

import axios from "axios";
export const axiosWithAuth =() => {
  const token = window.localStorage.getItem("token");
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    },
    baseURL: 'http://localhost:2019'
  });
};