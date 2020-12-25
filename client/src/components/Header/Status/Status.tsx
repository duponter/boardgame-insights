import {AnonymousUser, LoggedInUser} from "./User";

export const Status = () => {
    // fetch with GET
    // 	https://boardgamegeek.com/api/accounts/current
    // await fetch("https://boardgamegeek.com/api/accounts/current", {
    //     "credentials": "include",
    //     "headers": {
    //         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:84.0) Gecko/20100101 Firefox/84.0",
    //         "Accept": "application/json, text/plain, */*",
    //         "Accept-Language": "en-US,en;q=0.5"
    //     },
    //     "referrer": "https://boardgamegeek.com/",
    //     "method": "GET",
    //     "mode": "cors"
    // });
    return (
        <>
            <LoggedInUser username="ForumMortsel"/>
            <AnonymousUser/>
        </>
    );
}