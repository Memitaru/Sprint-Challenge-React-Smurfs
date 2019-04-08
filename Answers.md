1.  Explain the differences between `client-side routing` and `server-side routing`.

Server side routing -

When you click a link there is a refresh and you see the new page. This can lead to faster initial load times because it will only request the data necessary to load the new page but it also means that things on multiple pages will need to be requested multiple pages (such as headers and footers).

Client side routing -

When you click on a link the URL changes but there is no refresh/reload. You are still redirected to the new page or component. There will be a longer initial load time generally but much faster loading between pages.

2.  What does HTTP stand for?

Hyper Text Transfer Protocol

3.  What does CRUD stand for?

Create Read Update Delete

4.  Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

C - Post

R - Get

U - Put

D - Delete

5.  Mention three tools we can use to make AJAX requests

Fetch
jquery
Axios