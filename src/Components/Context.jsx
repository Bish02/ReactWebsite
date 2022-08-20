// create context
// provider
// consumer

import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./Reducer";

const context = React.createContext();
const API = "https://newsapi.org/v2/top-headlines?country=us&apiKey=7156beaab24a452296391cb91c161bf5";

const initialState = {
    name: "",
    image: "",
    serviceSection:[],
};

const AppProvider = ({ children }) => {
    // use Of Reducer
    const [state, dispatch] = useReducer(reducer, initialState);

    const updateHome = () => {
        return dispatch({
            type: "HOME_UPDATE",
            playload: {
                name: "blogsInfinity By React Js",
                image: "./Images/header.svg",
            }
        })
    };
    const updateAbout = () => {
        return dispatch({
            type: "ABOUT_UPDATE",
            playload: {
                name: "Biswajit Nanda",
                image: "./Images/About.svg",
            },
        })
    };
    const getServices = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            dispatch({ type: "SERVICES_UPDATE", playload: data.articles })
        } catch (err) {
            console.log(err);
        }
    };

    // to call the api 
    useEffect(() => {
        getServices(API);
    }, []);

    return <context.Provider value={{ ...state, updateHome, updateAbout }}>
        {children}
    </context.Provider>
}

// Custem Hook
const useGlobal = () => {
    return useContext(context);
};

export { context, AppProvider, useGlobal };