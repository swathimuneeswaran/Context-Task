import { createContext } from "react";

const UserContext= createContext();

export const UserProvider=({children}) =>{
    const username="Swathi";
    const name="SmartPhones";
    return (
        <UserContext.Provider value={[username,name]}>
            {children}
        </UserContext.Provider>
    );

};

export default UserContext;