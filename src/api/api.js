import * as axios from "axios";
export const HarryPotter = {
  getHarryPotter() {
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=harry+potter`
    );
  },
};
