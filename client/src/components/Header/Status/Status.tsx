import {AnonymousUser, LoggedInUser} from "./User";

export const Status = () => {
    return (
        <>
            <LoggedInUser username="ForumMortsel"/>
            <AnonymousUser/>
        </>
    );
}