import axios from "axios"


export const GET_CART_REQUEST = "GET_CART_REQUEST";
export const GET_CART_SUCCESS = "GET_CART_SUCCESS";
export const GET_CART_FAILURE = "GET_CART_FAILURE";
export const ADD_TO_CART = "ADD_TO_CART";

export const CartRequest = () => {
    return {
        type : GET_CART_REQUEST
    }
}

export const CartSuccess = (data) => {
    return {
        type: GET_CART_SUCCESS,
        payload : data
    }
}

export const CartFailure = (err) => {
    return {
        type: GET_CART_FAILURE,
        payload : err
    }
}


export const AddToCart = (payload) => (dispatch)=> {
    dispatch(CartRequest())
  
    
    axios.post('https://fab-bag.herokuapp.com/cart', payload)
      .then(function (response) {
          console.log("bag",response.data);
          dispatch(GetCart())
      })
      .catch(function (error) {
          console.log(error);
          dispatch(CartFailure(error.message))
      });
}

export const GetCart = (payload) => (dispatch)=> {
    dispatch(CartRequest())
  
    
    axios.get('https://fab-bag.herokuapp.com/cart')
      .then(function (response) {
          console.log(response.data);
          dispatch(CartSuccess(response.data))
      })
      .catch(function (error) {
          console.log(error);
          dispatch(CartFailure(error.message))
      });
}

export const DelteCart = (id) => (dispatch)=> {
    dispatch(CartRequest())
  
    
    axios.delete(`https://fab-bag.herokuapp.com/cart/${id}`)
    .then(function (response) {
        console.log(response.data);
        dispatch(GetCart())
    })
    .catch(function (error) {
        console.log(error);
        dispatch(CartFailure(error.message))
    });
}

