import * as axios from "axios";
export const HarryPotter = {
  getHarryPotter(order = "relevance", page = 0, maxResults = 40) {
    order = order ? order : "relevance";
    page = page !== "" ? page : (page = 0);
    maxResults = maxResults ? maxResults : 40;
    return axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=${maxResults}&orderBy=${order}&projection=full&startIndex=${page}`
    );
  },
};
// export const AllBooks = {
//   getAllBooks(page = 0, maxResults = 40) {
//     return axios.get(
//       `https://www.googleapis.com/books/v1/volumes?q=-&maxResults=40&startIndex=${page}$maxResults=${maxResults}`
//     );
//   },
// };
