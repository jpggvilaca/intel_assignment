import axios from 'axios';

import { constructAxiosGetUrl } from './utils';

const FlickrApi = {
  fetchPhotos: (queryString?: string) => {
    const url = constructAxiosGetUrl(queryString);

    return axios.get(url).then((response) => response.data.photos.photo)
      .catch(error => console.log(error));
  }
}

export default FlickrApi;
