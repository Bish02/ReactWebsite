

export const reducer = (state,action)=>{
    if(action.type ==='HOME_UPDATE'){
        return {
            ...state,
            name:action.playload.name,
            image:action.playload.image,
        }
    }
    if(action.type ==='ABOUT_UPDATE'){
        return {
            ...state,
            name:action.playload.name,
            image:action.playload.image,
        }
    }
    if(action.type ==='SERVICES_UPDATE'){
        return {
            ...state,
           serviceSection:action.playload,
        }
    }
    return state;
}