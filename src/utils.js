export const getCookie = cookieName => {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
        let [key,value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

function decodeToken(urlEncodedString) {
    let decodedUriComponent = decodeURIComponent(urlEncodedString.replace(/\+/g, ' ').replace(' path', ''));
    return JSON.parse(decodedUriComponent).accessToken;
}

export const getDecodedJwt = () => {
    const jwtCookie = getCookie("jwt");
    if(jwtCookie === undefined || "" === jwtCookie) {
        console.log("Could not get jwt cookie. Please log in and try again.")
        return ""
    }
    return decodeToken(jwtCookie);
}