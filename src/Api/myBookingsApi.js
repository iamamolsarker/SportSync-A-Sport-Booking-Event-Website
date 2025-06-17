export const myBookingsPromise = (email, accessToken) => {
    return fetch(`http://localhost:5000/event-bookings/?email=${email}`, {
        headers: {
            authorization : `Bearer ${accessToken}`
        }
    })
    .then(res => res.json())
}