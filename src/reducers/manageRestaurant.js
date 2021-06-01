import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [], 
    reviews: []
}, action) {
    
    switch(action.type) {
        case "ADD_RESTAURANT": 
            return {...state, restaurants: [...state.restaurants, {id: cuid(), text: action.text}]}
        case "DELETE_RESTAURANT": 
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        case "ADD_REVIEW":
            return {...state, reviews: [...state.reviews, {id: cuid(), review: action.review})}
        default: 
            return state;
    }
}
