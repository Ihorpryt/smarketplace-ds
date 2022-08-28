import React, {createContext, useContext} from "react";
import {SNotificationWrapper} from "../System/Alert/styles";
import Alert from "../System/Alert/Alert";
import {v4} from "uuid";

const NotificationContext = createContext();

const NotificationProvider = ({children}) => {
    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case "ADD_NOTIFICATION":
                return [...state, {...action.payload}];
            case "REMOVE_NOTIFICATION":
                return state.filter(el => el.id !== action.id);
            default:
                return state;
        }

    }, []);



    return (
        <NotificationContext.Provider value={dispatch}>
            <SNotificationWrapper>
                {state.map(alert =>{
                    return <Alert dispatch={dispatch} key={alert.id} {...alert} />
                })}
            </SNotificationWrapper>
            {children}
        </NotificationContext.Provider>

    )
};

export const useNotification = () => {
    const dispatch = useContext(NotificationContext);

    return (props) => {
        dispatch({
            type: "ADD_NOTIFICATION",
            payload: {
                id: v4(),
                ...props
            }
        })
    }
};

export default NotificationProvider;