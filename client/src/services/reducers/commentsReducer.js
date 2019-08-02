export default function commentsReducer(state = {
    idsOfPostsFromWhichDisplaComments: []
    }, action) {

    switch (action.type) {
        case 'DISPLAY_COMMENTS':
            return  {
                    ...state,
                    idsOfPostsFromWhichDisplaComments: state.idsOfPostsFromWhichDisplaComments.concat(action.payload)}
        
        case 'HIDE_COMMENTS':
                const newState = state.idsOfPostsFromWhichDisplaComments.filter( val => val !== action.payload );
                return  {
                        ...state,
                        idsOfPostsFromWhichDisplaComments: newState}
        default:
            return state;
    }
}