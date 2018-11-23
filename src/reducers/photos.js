export const getPhotos = () => {
    const url = 'https://api.unsplash.com/photos/?client_id=3e69419ed57e93397e5729a1e65b38d0eebe02d26867b78c434a799481498b6d';

    return (dispatch) => {
        fetch(url)
            .then(response => response).then(body => body.json())
            .then(arr => dispatch({ type: 'ADD_PHOTOS', payload: arr }))
    }
};