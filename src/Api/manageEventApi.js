export const manageMyEventsPromise = email => {
    return fetch(`http://localhost:5000/events/?email=${email}`).then(res => res.json())
}