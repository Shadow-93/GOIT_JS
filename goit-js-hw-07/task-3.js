const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryRef = document.querySelector('#gallery');

let imageRef = '';

images.forEach(image => {
  imageRef += `<li><img src=${image.url} alt=${image.alt}></li>`;
});

galleryRef.insertAdjacentHTML('beforeend', imageRef);

// const galleryRef = document.querySelector('#gallery');

// const createGallery = image => {
//   const listImageRef = document.createElement('li');
//   const imageSrcRef = document.createElement('img');
//   imageSrcRef.src = image.url;
//   imageSrcRef.alt = image.alt;
//   listImageRef.appendChild(imageSrcRef);
//   return listImageRef;
// };

// const imageRef = images.map(image => createGallery(image));
// galleryRef.append(...imageRef);
