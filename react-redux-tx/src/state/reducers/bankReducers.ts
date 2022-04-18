const initialState = 0;

interface depositAction  {
    type: string,
    payload: number
};

interface withdrawAction {
    type: string,
    payload: number
};

interface bankruptAction {
    type: string,
    payload: number
};

type Action = depositAction | withdrawAction | bankruptAction;

const reducer = (state: number = initialState, action: Action) => {
    switch (action.type) {
        case "depostit":
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        case "bankrupt":
            return 0;
        default:
          ;  return state;
    }
};

export default reducer;