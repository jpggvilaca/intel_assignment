/*
  Construct URL to use `flickr.photos.search` api
*/
export const constructAxiosGetUrl = (params: Record<string, string>) => {
  const REACT_APP_FLICKR_SEARCH_URL = 'https://api.flickr.com/services/rest';

  // "Parameterless searches have been disabled by Flickr. If 'text' is empty then
  //  the `getRecent` endpoint should be used instead
  // const method = params?.text?.length ? 'flickr.photos.search' : 'flickr.photos.getRecent';

  // `getRecent` endpoint was returning innapropriate photos so I commented the code above
  const method = 'flickr.photos.search';

  const query = new URLSearchParams({ ...params, method });

  return `${REACT_APP_FLICKR_SEARCH_URL}?${query}`;
};

/*
  Get the actual photo url
*/
export const constructPhotoImageUrl = (
  photoId: string,
  serverId: string,
  secret: string
): string => {
  const placeholderImageUrl = 'https://i.picsum.photos/id/1000/200/200.jpg?hmac=U6gBcO-m8lNXspqhLW17ugDZ1Z3cEcCQj07Wp9Nq7IQ';

  if (!secret || !photoId || !serverId) {
    return placeholderImageUrl;
  }

  return `https://live.staticflickr.com/${serverId}/${photoId}_${secret}.jpg`;
};