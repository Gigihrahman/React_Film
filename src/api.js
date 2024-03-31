import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;
export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

export const seacrhMovie = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=1&api_key=${apiKey}`
  );
  return search.data;
};

export const cobaApi = async (q) => {
  const coba = await axios.post({
    method: "post",
    url: "https://jsonplaceholder.typicode.com/posts",
    data: {
      userId: 10,
      id: 101,
      title: "at na",
      body: "lorem ipsumaaaaa",
    },
  });
  return coba;
};
