export const featuredEventsPromise = () => {
  return fetch(
    "https://assignment-11-sport-sync-server.vercel.app/events/featured"
  ).then((res) => res.json());
};
