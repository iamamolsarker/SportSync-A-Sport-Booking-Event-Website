export const manageMyEventsPromise = (email, accessToken) => {
    return fetch(`http://localhost:5000/events/private/?email=${email}`, {
        headers: {
            authorization : `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}