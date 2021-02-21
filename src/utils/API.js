import axios from "axios";
const BASEURL = "https://randomuser.me/api/";

export default {
  search: function(query) {
      console.log(query);
    return axios.get(BASEURL + query);
    // return axios.get(BASEURL + query + APIKEY);
  }
};