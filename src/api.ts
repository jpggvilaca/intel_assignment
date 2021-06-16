import axios from 'axios';

import { constructAxiosGetUrl } from './utils';

const defaultQueryParams: Record<string, string> = {
  method: 'flickr.photos.getRecent',
  api_key: `${process.env.REACT_APP_FLICKR_API_KEY}`,
  FLickrApi_sig: `${process.env.REACT_APP_FLICKR_API_SIGNATURE}`,
  format: 'json',
  page: '0',
  per_page: '50',
  privacy_filter: '1',
  safe_search: '1',
  nojsoncallback: 'true',
  text: 'intel',
}

const FlickrApi = {
  fetchPhotos: (params?: Record<string, string>) => {
    const url = constructAxiosGetUrl({ ...defaultQueryParams, ...params });

    return axios.get(url).then((response) => response.data.photos.photo)
      .catch(error => console.log(error));
  }
}

export default FlickrApi;
