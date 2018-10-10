
const apiKey = '6aocciN3SVo1bV6bHnRxWcmkaxxafNkBTbTSQEHznGyQaHdl1dAwOuFmVJt5elb3AOwlWeVmd9VbMup9jbcUH279gjqMknD1TrOalagvZfVXqxZWk_hG-0w93Iq9W3Yx'

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
            { 
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            }).then(response => {
                return response.json();
            }).then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => {
                        return {
                            id: business.id,
                            imageSrc: business.image_url,
                            name: business.name,
                            address: business.location.address1,
                            city: business.location.city,
                            state: business.location.state,
                            zipCode: business.location.zip_code,
                            category: business.categories.title,
                            rating: business.rating,
                            reviewCount: business.review_count
                        }
                    })
                }
            });
    }
};

export default Yelp;