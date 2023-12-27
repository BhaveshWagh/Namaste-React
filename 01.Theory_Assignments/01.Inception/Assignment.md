# Chapter 01 - Inception

## Whta is Emmet ?

<p>
Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.
</p>

## Difference between a Library and Framework?

<p>
A library is a collection of prewritten code that can be used to simplify tasks. The term library simply refers to a collection of code that is reused repeatedly. It is essentially a set of pre-defined functions and classes that programmers can use to simplify their work and speed up the development process.

A framework is like the foundation upon which developers build applications for specific platforms. It includes reusable pieces of code written to perform common tasks and uses code provided by a developer for custom functionality.

</p>

## What is CDN? Why do we use it?

<p>
A Content Delivery Network (CDN) is essentially a group of servers that are strategically placed across the globe with the purpose of accelerating the delivery of web content. It is a solution that provides faster delivery of content to users distributed worldwide. A CDN stores a cached version of the original content in multiple geographical locations, also known as points of presence (PoPs). Each PoP contains a number of caching servers known as edge servers that are responsible for content delivery to visitors within its proximity.
</p>

### CDNs are used for several reasons:

<p>

- Performance: CDNs can significantly improve website load times by distributing content closer to website visitors using a nearby CDN server. This leads to faster page loading times, which can reduce bounce rates and increase the amount of time that people spend on the site.

* Reliability: CDNs can handle more traffic and withstand hardware failure better than many origin servers, thanks to their distributed nature.

* Cost savings: CDNs can reduce the amount of data an origin server must provide through caching and other optimizations, thus reducing hosting costs for website owners.

* Security: A properly configured CDN may also help protect websites against some common malicious attacks, such as Distributed Denial of Service (DDOS) attacks.

In summary, a CDN helps to ensure quick, efficient, and secure delivery of content to websites and Internet services3. Today, the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.

</p>

## Why is React known as React?

<p>
React is a JavaScript library for building user interfaces. It was developed by Facebook, and the name “React” was chosen because it is meant to help developers build user interfaces that are fast and responsive, or "reactive". The library was designed to “react” to changes in data. When data in a React application changes, the components that depend on that data are automatically updated, which allows for efficient and seamless updates to the user interface. The name “React” reflects this reactive nature of the library. The idea behind React is to build reusable components that can be rendered on the front-end, rather than writing a new piece of code every time you need to display something on the screen. This makes it easier and more efficient to build complex user interfaces.

It "reacts" quickly to changes without reloading the whole page.

It uses the virtual DOM to efficiently update parts of a webpage.

It’s built around components that "react" and update.

</p>

## What is crossorigin in script tag?

<p>
The crossorigin attribute in the  tag is used to handle Cross-Origin Resource Sharing (CORS) when loading an external script file from a third-party server or domain.

CORS is a standard mechanism that allows web pages to request resources from another domain outside their own. This attribute sets the mode of the CORS request.

The crossorigin attribute can have two values:

anonymous: A cross-origin request is performed, but no credentials are sent.

use-credentials: A cross-origin request is performed, and credentials are sent (e.g., a cookie, a certificate, HTTP Basic authentication).

This attribute is used to protect sensitive information from the third party when fetching out the results. It’s important to note that this attribute is only valid for use if we try to fetch the resources from the third-party domain.

</p>

## What is diference between React and ReactDOM

<p>

* React React is a library for building user interfaces, particularly those that are complex and state-driven. It allows you to create reusable UI components, manage component state, and handle the component lifecycle. React can be used in both web and mobile apps.

* ReactDOM, on the other hand, is a complimentary library that provides DOM-specific methods. It serves as the glue between React and the DOM, rendering React elements to the DOM. Essentially, ReactDOM is responsible for updating the browser’s UI to match changes in React components.
</p>

## What is difference between react.development.js and react.production.js file via CDN?

<p>

The react.development.js and react.production.js files are two versions of the React library that serve different purposes and are typically used in different stages of the development and deployment process:

* react.development.js: This file is more developer-friendly and readable. It’s typically larger in size as it contains additional code, comments, and debugging information that aids in development and troubleshooting. It enables and utilizes React developer tools, devtools profiler, debugging environment attached with source code. It also includes functionalities such as Hot Module Replacement, diagnostics so that the development environment will help to debug code.

* react.production.js: This file is optimized for performance and is typically used in production environments. It includes various optimizations, such as dead code elimination, to make the React library run more efficiently. The production version has ugly, minified (compressed) version of your JavaScript code, so this makes rendering of file on end user’s browser very quick and performance enhancing.

When these files are served via a Content Delivery Network (CDN), it provides you with the respective JS file online. The CDN helps in setting up a faster development environment.

Remember that only React files ending with .production.min.js are suitable for production.
</p>

## What are async and defer?

<p>
In JavaScript, async and defer are attributes that you can add to a script tag to control how the script is loaded and executed in relation to the HTML document. Here’s how they work

* async: When you use the async attribute, the script is downloaded asynchronously with the rest of the page without pausing the HTML parsing. Once the script is downloaded, the HTML parsing will be paused, the script’s execution will happen, and then HTML parsing will resume. The page and other scripts don’t wait for async scripts and async scripts also don’t wait for them. It is great for independent scripts and externally located scripts.

* defer: The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built. Deferred scripts maintain their relative order which means the first script will be loaded first while all others below it will have to wait.

In summary, use async for scripts that can run independently and don’t require the DOM to be fully constructed, and use defer for scripts that need access to the fully parsed DOM and need to maintain the order of execution.

</p>
