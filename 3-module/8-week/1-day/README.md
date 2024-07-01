# M3-W8-D1

- Assessment
- Request / Response
- HTTP Basics
- ReST

## Assessment

## Request / Response Cycle

### What is a server?

A server is a program that runs on a computer somewhere.

It's purpose is to run continously and to listen to a location on the network
for client requests.

Once it recieves and processes a request it sends back data as a response.

Examples:

- Navigating to google.com
- Liking a post on twitter
- Adding an item to an amazon shopping cart
- Viewing an amazon shopping cart

### HTTP

**HyperText:** Content with references to other content.

(HT)ML, HyperText Markup Language allows us to send content over the internet
and allow that content to reference everything else. CSS pages, JS pages,
images, ect are all included by reference in our HTML. Content that references
other content.

**Transfer Protocol:** The specifications for sending the hypertext from point a
to point b.

The transfer protocol defines the rules of what format a client request and
server response should
take, what should and should not be included, how it could fail, ect.

### Properties of HTTP

**Reliability:**: There are two main protocols that allow for data transmission
TCP and UDP, what they are doesn't matter much at the moment. Just know that TCP
is slower but lossless because it allows retratransmission of lost packets.
Wheras UDP is faster, simpler, and more efficient, but it isn't lossless. There
are advantages and disadvantages to both protocols. UDP is great for streaming,
VoIP, video conferencing, and other applications that prioritize transmission
speed over fidelity. For now all you need to know is that HTTP is a reliable protocol because it uses TCP connections, you know that all of your data is guaranteed to get to the other end of the connection.

**Stateless Transfer**: Each request/response cycle is fully independent,
meaning all you need to deal with a request is fully contained in that request,
however it also means that you cannot use the request/reponse cycle to manage
persistency. Information like user information, whether someone is logged in,
and saved settings, all need to be managed seperately from the request/response cycle.

### HTTP Verbs

There are other HTTP verbs but these are the most common and the ones you will mostly need to work with.

- GET: Read
- POST: Create
- PUT: Update (Full)
- PATCH: Update (Partial)
- DELETE: Delete

An classic HTML Web Server can only have GET or POST methods due to the limitations of the form element.

## Reading (SOLO, 20m)

- Week 8 Framing
- HTTP Request Components
- HTTP Response Components

## Request / Response Scenario Practices (COLLAB w/Class)

## ReSTful Routes

ReST: Representational State Transfer

Comes from the idea that a server should have a representation of a resource, which allows for actions that will change the state of that resource and respond with another representation of the resource.

Rest is a convention for defining endpoints in a way that makes them easily understandable by other developers.

### Routes vs Endpoints

Endpoint `GET /users`, Route `/users`

Endpoint `POST /users`, Route `/users`

A route is a URL path for a request, an endpoint is a route and HTTP verb combination.

### Collection vs Singular Routes

`/posts` could reference a collection of posts

`/posts/:id` could reference a singular post in the posts collection

`/my/posts` could reference a collection of posts owned by the logged in user

`/users/:id/posts` could reference a collection of posts owned by a singular user

## Reading (Solo, 20m)

- HTML Form Submission Request/Response
- ReSTful Routes Convention

## Restful Routes Quiz (COLLAB w/Class)

## HTTP Basics Long Practice (PAIRED)

Demo first two routes
