// restart the app by "control + C" (cut the server), then rerun npm run dev everytime changes are made in thid next.config.js file
module.exports = {
  images: {
    domains: ["res.cloudinary.com", "links.papareact.com", "jsonkeeper.com"],
  },
  //in Next.js, Environment Variables are stored insie of "next.config.js" https://nextjs.org/docs/api-reference/next.config.js/environment-variables
  // "mapbox_key" is "Access Token from "Share" on Mapbox Studio04:00:36:00
  env: {
    mapbox_key:
      "pk.eyJ1IjoiYW5uaW4tdG9mdSIsImEiOiJja3MxbWd2dXQxdnJlMnZyMDZqZGo0MXlkIn0.ra0bcMjJ1lKDfx6V20q2gQ",
  },
};
