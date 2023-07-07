export function getPhotos(): Promise<any> {
  return new Promise((resolve, reject) => {
    return fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => resolve(data));
  });
}
