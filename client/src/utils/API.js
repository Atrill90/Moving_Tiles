import axios from "axios";

export default {
    findChars: function () {
        return axios.get("/api/chars")
      },
}