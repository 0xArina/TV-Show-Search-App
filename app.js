// selecting queries 
const form = document.querySelector('#searchForm')

// form event
form.addEventListener('submit', async function (e) {
    // prevent default submit action
    e.preventDefault();

    // extract user input and save it to a var
    // console.log(form.elements.query.value);
    const searchTerm = form.elements.query.value;
    // create object with search params
    const config = { params: { q: searchTerm } }
    // wait for a promise of API call to get show info and save it to var
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    // show image of the first element from the data 
    // console.log(res.data[0].show.image.medium);

    // call f to display images
    makeImages(res.data);
    // empty imput
    form.elements.query.value = '';
    // clear previous images

})

// f to display images
const makeImages = (shows) => {
    // loop through shows
    for (let result of shows) {
        // check if image exists
        if (result.show.image) {
            // create new img element
            const img = document.createElement('img');
            // image source
            img.src = result.show.image.medium;
            // append image to body
            document.body.append(img);
        }
    }
}

