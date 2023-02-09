# Displaying library data

- We're now ready to add the pages that display the LocalLibrary website books and other data.
- The pages will include a home page that shows how many records we have of each model type and list and detail pages for all of our models.
- Along the way, we'll gain practical experience in getting records from the database, and using templates.

## Overview

- In our previous tutorial articles, we defined Mongoose models that we can use to interact with a database and created some initial library records.
- We then created all the routes needed for the LocalLibrary website, but with "dummy controller" functions (these are skeleton controller functions that just return a "not implemented" message when a page is accessed).

- The next step is to provide proper implementations for the pages that display our library information (we'll look at implementing pages featuring forms to create, update, or delete information in later articles).
- This includes updating the controller functions to fetch records using our models and defining templates to display this information to users.

- We will start by providing overview/primer topics explaining how to manage asynchronous operations in controller functions and how to write templates using Pug.
- Then we'll provide implementations for each of our main "read-only" pages with a brief explanation of any special or new features that they use.

- At the end of this article, you should have a good end-to-end understanding of how routes, asynchronous functions, views, and models work in practice.
