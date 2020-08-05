const key = '17751267-16ded02a741af1cdfc94a2144';

export default {
  serchQueary: '',
  page: 1,
  fetchGallery() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q='${this.serchQueary}'&page=${this.page}&per_page=12&key=${key}`;

    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();

        return hits;
      });
  },

  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },

  get query() {
    return this.serchQueary;
  },
  set query(value) {
    this.serchQueary = value;
  },
};
