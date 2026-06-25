// var initialState={
//     cart:{},
//     user:{}

// }

// export default function RootReducer(state=initialState,action)
// {
//     switch(action.type)
//     {
//         case 'ADD_CART':
//             state.cart[action.payload[0]]=action.payload[1]
//             console.log(state.cart)
//             return {cart:state.cart,user:state.user}

//         case 'ADD_USER':
//             state.user[action.payload[0]]=action.payload[1]
//             console.log(state.user)
//             localStorage.setItem('USER',state.user)
//             return {cart:state.cart,user:state.user}

//         case 'DELETE_CART':
//             delete state.cart[action.payload[0]]
//             console.log(state.cart)
//             return {cart:state.cart,user:state.user}

//         default:
//             return {cart:state.cart}

//     }

// }

// var initialState = {
//   cart: {},
//   user: {}
// };

// export default function RootReducer(state = initialState, action) {

//   switch (action.type) {

//     case "ADD_CART": {

//       const cart = { ...state.cart };
//       cart[action.payload[0]] = action.payload[1];

//       return {
//         ...state,
//         cart
//       };
//     }

//     case "DELETE_CART": {

//       const cart = { ...state.cart };
//       delete cart[action.payload[0]];

//       return {
//         ...state,
//         cart
//       };
//     }

//     case "ADD_USER": {

//       const user = { ...state.user };
//       user[action.payload[0]] = action.payload[1];

//       if (typeof window !== "undefined") {
//         localStorage.setItem("USER", JSON.stringify(user));
//       }

//       return {
//         ...state,
//         user
//       };
//     }

//     default:
//       return state;
//   }
// }

'use client'

const initailState = {
    cart: {},
    user: {}
}
function RootReducer(state = initailState, action) {
    switch (action.type) {
        case "ADD_CART":
            state.cart[action.payload[0]] = action.payload[1]
            console.log("CART:", state.cart)
            return { cart: state.cart, user: state.user }

        case "ADD_USER":
            state.user[action.payload[0]] = action.payload[1]
            localStorage.setItem("USER", JSON.stringify(state.user))
            // localStorage.setItem("USER",state.user)

            return { cart: state.cart, user: state.user }


        case "DELETE_CART":
            delete state.cart[action.payload[0]]
            console.log("CART:", state.cart)
            return { cart: state.cart, user: state.user }

        case "EMPTY_CART":
            state.cart={}
            // console.log("CART:", state.cart)
            return { cart: state.cart, user: state.user }

        default:
            return state
    }
}

export default RootReducer