export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item:null,
    // token:'BQCwozN-qZPDz0PK6TvICNRxGGiiEM41VpVoIqCvIMab8TBjTeZVddXlbIZUsaBnVxeBG6Cdjs2CHKmZ1QkP39_l7szzKHSOpSwXkP5lR-rxP6p-vTToasql4PlS5PuuaUWUyqH8YMwtoV_pbFFynuhLlK1ovbAsnYnvQRu3OJsIw5X2'
};

const reducer = (state, action) => {
     console.log(action);

     switch(action.type) {
         case 'SET_USER':
             return {
                 ...state,
                 user:action.user
             };

             case 'SET_TOKEN':
                 return {
                     ...state,
                     token: action.token
                 };
               
             case "SET_PLAYLISTS":
                 return {
                     ...state,
                     playlists:action.playlists,
                 };    


             case "SET_DISCOVER_WEEKLY":
                 return {
                     ...state,
                    discover_weekly: action.discover_weekly,
                 }     


             default:
                 return state;
     }
}

export default reducer;