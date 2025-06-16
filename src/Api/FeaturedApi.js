export const featuredEventsPromise = () => {
    return fetch("http://localhost:5000/events/featured").then(res => res.json())
}