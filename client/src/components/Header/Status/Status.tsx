import {AnonymousUser} from "./AnonymousUser";
import {LoggedInUser} from "./LoggedinUser";

export const Status = () => {
    return (
        <>
            <AnonymousUser/>
            <LoggedInUser/>
        </>
    );
}