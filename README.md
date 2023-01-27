# Modern Metaverse Site build on Next 13

1. In Next 13, we don't have to import server components except client hooks i.e; `useState` & `useEffect` or components who use this hooks i.e; `framer-motion` or specific variables data.

> For More Information, Read the Nextjs Docs

2. In Next 13, the most important folder is `app` and we don't really need the `page` folder or `_app.js` file.

3. To Build static website Next 13 still works like older version means it depends on `pages` folder totally, not the new `app` folder. So follow this steps:

- Go to `pages` folder and create `_app.js` file and add the code same as mine expect css links.

- Then create another file named `index.js` and copy-paste the code of `app` folder's `page.js` file.

and you are Good to go!!!
