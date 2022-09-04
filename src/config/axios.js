import axios from 'axios';

const token = "b8b84db74ed0a638cecdb1b5510ba7835bec9654043690d66691c90b51444a07"

const createRequest = (token) => {
  const request = axios.create({
    baseURL: 'https://gorest.co.in'
  });

  request.interceptors.request.use(
    (config) => ({
      ...config,
        headers: { Authorization: `Bearer ${token}` }
    
    }),
    async (error) => await Promise.reject(error)
  );

  return request;
};

const useFetch = () => {
  
  const requestAxios = createRequest( token );

  return (
    { requestAxios }
  );
};


export { useFetch };