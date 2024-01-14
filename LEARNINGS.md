- The journey so far has been nothing short of amazing, and I'm thrilled to share the highlights:

✅ React Hooks

✅ State Management

✅ Config Drive UI

✅ Redux

✅ Reusable Components

✅ Rich and Interactive UI

✅ Functional Comp.

✅ Props & State

✅ Class Components

✅ Scaling React Apps

✅ React Router

✅ Optimizing React Apps

✅ Building Live Projects

✅ Bundlers & Babel

✅ JSX

✅ React Fragment

✅ Dynamic UI

✅ Higher Order Comp.

✅ Pure Components

✅ Code Splitting

✅ React Testing Library

✅ Building Custom Hooks

✅ Handling Events

✅ Conditional Rendering

✅ Tailwind CSS

# Episode - 01

Hi folks !! Recently, I started with this amazing web series ‘Namaste React’ by Akshay Saini. Would like to give a huge shoutout to Akshay for the amazing knowledge that he has shared in this course !!

Here are some of my learnings from Episode – 01 (The Inception):

You can check out my notes in my GitHub Repo: https://rb.gy/nznkii

Q1. Why is React called a library? Why not a framework?

Ans : A Library is one that can be applied to our existing code wherever we need it, whereas a Framework is a template that builds the whole software. The developer’s code is just plugged in by the framework at some places as needed.

React is a JS Library, not a full-fledged Framework. It can work independently in a small portion of our page like a navbar or header without affecting the rest of the code. It works only in that portion of the page which has been defined as the root element of React.

Q.2 The fundamental philosophy of React in web apps?😎

“Efficiently manipulate the DOM using JS”

“Rather, if you want to do anything on the webpage, do it using JavaScript”

Q3. Is create-react-app the only way to configure our project with React?

Create-react-app is not the only way! React CDN is another way to inject React in our code. But it is important to note that CDN is not the best way, still we should be aware of it.

Q4. Significance of cross-origin attribute of script tag?💫

Well, whenever we want to load some resources (JS files, css, image etc) from a server other than our origin server, we need to use this attribute.

Cross-origin with element allows the browser to execute the js file without the exchange of user-credentials.

Q5. Why 2 separate packages – react and reactDOM?👀

Because ‘react’ package gives the core React code that is needed to run React anywhere, while ‘reactDOM’ is useful for DOM operations in a web app ie. it is specific to the browser only.

React does not just build web apps, but also mobile and desktop apps, so the separation of core ‘react’ from ‘reactDOM’ makes a lot of sense, since we don’t need ‘reactDOM’ in all these platforms.

# Episode - 02

Episode 02 (Igniting our App) of hashtag#NamasteReact🙏!
So much to learn from this episode!! 🚀

You can check out my notes in my GitHub Repo: https://rb.gy/nwtpc5

📌npm does NOT stand for "Node Package Manager". It is not an abbreviation actually!! It is simply a package manager, a repository that manages all the packages that we might need in our project.

📌package.json: It is a file that holds the configuration for npm and all the packages that we install in our app. Any package that we include in our project has a name, version, description etc. All this info (metadata) is stored in package.json.

📌Caret(^) v/s Tilde(~): These are simply notations for versions of the packages.

- CARET(^) : When the version is prefixed with it (^2.8.3), it will automatically install the future Minor and Patch updates.
- Tilde(~): ( ~2.8.3) It automatically installs the future Patch updates.

📌package-lock.json: It is an automatically generated file for any operations where npm modifies either the node_modules or package.json. It keeps track of the exact version of all the packages.

📌Benefits of Parcel (PARCEL is truly a BEAST!!)😎💪

- It is an easy-to-configure BUNDLER. It bundles the code to be shipped to production.
- Creates a Dev build and Production build of our code.
- Creates a LOCAL SERVER and hosts our app there.
- Performs HMR (Hot Module Replacement) ie. updates modules in the browser at runtime without needing a whole page refresh.
- Performs CODE SPLITTING
- Performs TREE SHAKING to remove all the unused Code from the app.
- Performs CACHING to provide faster builds
- MINIFIES our project and COMPRESSES all the files
- Provides better DIAGNOSTICS and ERROR HANDLING to the developer
  ....and many more!!

📌Difference between npm and npx:

- npm is a package manager used to install, update and delete packages
- npx is a package executer used to execute the packages and if the package is does not exist, it installs it before executing.

Thanks @AkshaySaini for such in-depth guidance on all these important concepts!!

# Episode - 03

#NamasteReact🙏Episode 03: Laying the Foundation 🧱
Sharing some of my learnings from this episode🌱

You can check out my notes in my GitHub Repo: https://rb.gy/nznkii


📌npm Scripts:
♦️Instead of writing long repetitive commands (eg: "npx parcel index.html") for building dev and production build of the app, we can add npm scripts in package.json and then simply use those (eg: "npm run start") to execute the tasks easily.

📌JSX:
♦️It is a Syntax Extension to JS. It just looks like HTML/ XML but is different. In core React, we use React.createElement( ) syntax to create React Elements which becomes very complex. Instead, we can use JSX to do the same in a much more readable and understandable way.

📌How does JS engine understand JSX? :
­­­­­­­♦️So actually, behind the scenes, the JSX code is TRANSPILED to
React.createElement() code which is understandable by JS engine. This is done by Babel.

📌Compilation v/s Transpilation:
♦️ Compilation: The process of taking the source code written in a high-level language and transforming it to low-level executable machine code.
[ (High-level source code) ----->(executable machine code) ]

♦️ Transpilation: The process of taking the source code and transforming it into another language of similar level of abstraction ie. from one high-level language to another high-level language.
[ (High-level source code 1)-----> (High-level source code 2) ]

📌What is Babel?
♦️It is a JS Transpiler that comes as a dependency with our Bundler(eg: parcel). Generally, Babel converts the ES6 syntax JS into ES5 or older syntax for older browser support. But here, specifically in React code, it converts the JSX into such code that the browser understands.

📌XSS Attacks:
♦️Stands for Cross-Site Scripting Attacks. In such attacks, malicious scripts are injected into trusted websites. The hacker gets control to execute such scripts in your browser and access any cookies, session tokens, or other sensitive information from the browser.

📌How JSX protects from DOM-XSS? :
♦️ JSX does not blindly allow any scripts to be executed. It always sanitizes the data that is coming in the curly braces { } of JSX code. If there is some malicious script having some external JS, it simply AUTO-ESCAPES it instead of executing it. So, using JSX to conditionally output content or data to the DOM protects against XSS attacks.

📌React Functional Component:
♦️It is simply a normal JS function that returns a piece of JSX :)

📌Component Composition:
♦️The concept of putting one component into another i.e. Nesting of React Components.

📌Can we have multiple root elements in React app? :
♦️ Yes, if in case our app is not fully-built with React, then we can have multiple root elements.
♦️ multiple createRoot() calls: to create a root for each piece of UI managed by React.
♦️ multiple root.render() calls: to display different content in each root.

Thanks @AkshaySaini for yet another great episode with invaluable content!! 🚀

# Episode - 04

#NamasteReact🙏Episode 04: Talk is Cheap, Show Me the Code 💻💪

In this episode, we did Project-Based learning by starting with a Real-World Application - A Food Ordering App🍕.

You can check out my notes in my GitHub Repo: https://rb.gy/nznkii

Well, here are some learnings that I want to share with you all!!

📌How to start building a Frontend App?
<PLANNING PHASE>📝
♦️ Step 1: Building a Frontend app starts with a Wireframe plan, a high-level diagram of how the UI will look.
♦️ Step 2: After the high-level wireframe design starts the Low-Level Design i.e. what all components are needed and how will they be nested in each other.
<IMPLEMENTATION PHASE>
♦️ Step 3: Now starts the actual Implementation. We start building each component individually.

📌What are Props?
♦️ Props are nothing but the "Properties" that we can pass to a component in React.
♦️ Props allow us to pass data dynamically to a component.
♦️ We know Functional Components are normal JS Functions. Similarly, Props are like normal Arguments that we can send to these JS Functions.
♦️ All the props we send to a component are actually wrapped into one single "props" object. They can be accessed like : {props.name} inside the component.

📌What is CONFIG-DRIVEN UI?
♦️ Config-Driven UI is a very important design concept where the UI of the app is dependent upon the Config i.e. the data coming from backend.
♦️ It means "controlling the UI using the data".
♦️ It makes our app dynamic and allows the same app to have different UI across different geographic locations based upon what data is coming from backend.
Eg: Suppose in Swiggy, there are some Special offers given by restaurants of Punjab but no such similar offers given by restaurants of Karnataka. So the same Swiggy app can have different UI for these scenarios.

📌Some Best Practices of Writing React Code:
♦️ Destructure the props object to use the properties instead of writing {props.data.name}, {propa.data.cuisines} etc again and again.
♦️ Whenever mapping over any list, always give "key" props to each list item. The "key" prop helps React to uniquely identify each list item and optimizes the rendering process.
♦️ It is an anti-pattern in React to use index as a key. We can use it, but only as a last resort.
Rule: Not Using Key <<<<<< Using Index as Key <<<<<<<<<< Using Unique Id as Key
♦️ For every Component, create a Separate file instead of keeping all components in the same file. This improves Readability and Understandability of code. It follows the Single Responsibility Principle.
♦️ The File name should be exactly same as the Component name. Eg: Header component should be in a file named "Header.js" or "Header.jsx".

Thanks Akshay Saini 🚀 for sharing this amazing practical knowledge in this episode!!

# Episode - 05

#NamasteReact🙏Episode 05: Let's Get Hooked 🪝👀

Check out my notes in my GitHub Repo: https://rb.gy/nznkii

My Key Takeaways💪
📌In how many ways can we export/import things from a JS Module?

1. Default Export/Import:
   ♦️ Use it when you want to export something by default.
   ♦️ Multiple Default exports are not allowed from the same module.
   ♦️ We can refer to the default exported thing by any name, so the name is not significant.

2. Named Export/Import:
   ♦️ Use it when you have multiple things to be exported from a JS Module.
   ♦️ Named exports must be referred to by the Exact Same Name while importing them.

📌What is a React Hook?
♦️ Hooks are nothing but Utility Functions provided to us by React out-of-the-box!!
♦️ They are normal JS functions written by Facebook Developers that give us some Super Powers in our React code.
♦️ Most used Hooks: useState( ), useEffect( )
♦️ To use Hooks, we need to import them from 'react' library.

📌What is the use of useState( )?
♦️ useState( ) hook provides us a super-powerful State variable!!
♦️ When called, it returns an array of two things: [state, setState], 'state' being the state variable and 'setState( )' being the state-updating function.

📌What is the Super Power of a State Variable?
♦️ "As soon as the state variable gets updated, it makes React re-render the entire component!"
♦️ Any time the state-updating function is called anywhere in the app, React re-renders the component in which the state resides. This is the super power that normal JS variables don't have.
♦️ It allows React to automatically sync the UI with the data very quickly.

📌What is Virtual DOM?
♦️ A logical representation of the actual DOM in the form of React Elements.
♦️ A programming concept where a virtual representation of the UI is kept in the memory. It is an object that has React Elements to represent the UI.

📌What is the Diff Algorithm?
♦️ Whenever the state or props get updated, an updated VDOM tree is generated.
♦️ Diff Algorithm calculates the difference between the 2 VDOMs (the previous VDOM and the updated VDOM).
♦️ After calculating this diff only the actual DOM is updated. This makes React capable of doing fast DOM manipulations.

📌Reconciliation vs Rendering?
♦️ Reconciliation: The process of computing the diff between the 2 VDOMs.
♦️ Rendering: The actual updation of the information in the rendering environment.

Want to learn more cool stuff about React? Register for the Namaste React course by Akshay Saini 🚀

hashtag#namastereact
hashtag#reactjs

# Episode - 06

#NamasteReact🙏Episode 06: Exploring the World 🌍

You can check out my notes in my GitHub Repo: https://rb.gy/nznkii


My Key Learnings from this episode💪
📌1. What is a Microservice?
♦️ An independently existing service in a Microservice architecture.
♦️ Each microservice is independently deployable and has its own business logic.
♦️ Has its own single responsibility and exists independently in Microservice Architecture.
♦️ Updating, testing, deploying everything occurs within each microservice.

📌2. What is Monolithic Architecture?
♦️ An architectural method having a single large glacial unit with one code base.
♦️ The traditional architecture where the UI, Backend, DB, APIs, SMS, Email Notifications etc. are managed in the same single big project.
♦️ All the business logics are coupled together in the same project and we need to deploy the large bulky project as a whole.

📌3. When to use useEffect( )?
♦️ useEffect() hook is another utility function provided by React out-of-the-box.
♦️ Useful when we need to do something after the component has been rendered.
♦️ Mostly, we make some API call in it because that is a side-effect.
♦️ Useful in scenarios when we want some Shimmer UI to be rendered first quickly, then make API call and then re-render the component with the actual data.

📌4. What is Optional Chaining?
♦️ It is a JS concept wherein we use the '?.' operator while reading some property from an object or calling a function.
♦️ If the object accessed/ function called evaluates to null/undefined, the expression short-circuits and evaluates to undefined rather than throwing an error. So use it when there is a possibility that a reference might be missing.

📌5. What is CORS Policy?
♦️ Browsers do not allow us to call an API present on ohter origin from our origin.
♦️ This is a web standard that makes resource sharing safe across different origins.
♦️ So, when we attempt to access a resource present on another origin from our origin, the browser imposes 'CORS policy' and blocks us from doing so.

📌6. JS Expression v/s JS Statement?
♦️ JS Expression is any JS code that produces a value. It can't exist individually and is a part of a JS statement. Eg: "5\*2" is a JS expression

♦️ JS statements are instructions for the computer. A JS program is a sequence of statements.
♦️ Statements provide slots to be filled with JS expressions. Eg: let a = 5 \* 2; is a JS statement.

[ Remember this✨: Statements are the rigid structure that holds our program together, while Expressions fill in the details in the structure.]

📌7. What is the Conditional Rendering?
♦️ A technique used to render the different UI based on some condition.
♦️ Use JS expressions inside JSX to evaluate some condition and based on its value we can return different JSX from a component.

Get started with this amazing series 'Namaste React'👑 by Akshay Saini 🚀 to strengthen your React concepts!!💪

# Episode - 07

#NamasteReact🙏Episode 07: Finding The Path 🔍

You can check out my notes in my GitHub Repo: https://rb.gy/nznkii

My Key Learnings from this episode💪

✅1. What is SPA?
♦️ SPA stands for Single Page Application.
♦️ An application that has a single HTML page being rendered to the DOM.
♦️ All the new pages that we see are just "Components interchanging themselves".
♦️ If we go on a new route, we just change/refresh the components in the same single HTML page.

✅2. Server-Side Routing v/s Client-Side Routing:
♦️ Server-Side Routing: When we click an anchor tag, it reloads the entire app, sends a network call to that page and fetches the HTML and renders it on the webpage.
♦️ Client-Side Routing: When we click some link/anchor tag, no network call is made because all the components are already loaded into the browser. So, we just render the required component in that place where needed in the DOM. The entire webpage is not reloaded.

✅3. What is the usecase of <Link/> component?
♦️ <Link></Link> component is a superpower given to us by 'react-router-dom'. Use it when you want to make links in your app such that on clicking them, the entire webpage does not reload.
♦️ It just refreshes the components that are required to be loaded into the DOM. So it helps in performing Client-Side Rendering.

✅4. Best practices of useState() hook?
♦️ Never use it outside the body of the component. It does not make any sense, since useState() is used to make local state variables inside the functional components.

♦️ Always call it at the very beginning of the component. So the first thing to do in a component is to create the state variables.

♦️ Never call it inside an if block/loop/nested function. Create state variables at the top-level of the component. This ensures that the hook is always called in the same order each time the component renders.

✅5. What is Dynamic Routing?
♦️ It means creating routes that have dynamic paths rather than hardcoded paths.
♦️ Eg: path: "restaurants/{resId}. Here resId is the dynamic part of the path. Now based on the resId, we will be redirected to a dynamic path that takes us to a particular restaurant.

All these amazing concepts have been covered in Namaste React Series by Akshay Saini 🚀!! Go Dive Deep Into It ✨!!

# Episode - 08

#NamasteReact🙏Episode 08: Let's Get Classy 😎

👉My notes: https://rb.gy/nznkii

My Key Learnings from this episode💪
✅1. What is a Class Component?
♦️ Simply a JS class that has a render( ) method returning some JSX.
♦️ We can create a React class component by making our JS class extend React.Component class provided by the 'react' library.

✅2. What is the order of lifecycle method calls in Class-Based Components?
♦️ During the execution of a class-based component, we have 5 Lifecycle methods executed in the following order:
constructor() -> render() -> componentDidMount() -> componentDidUpdate() -> compononentWillUnmount()

✅3. Use of constructor()?
♦️ The first lifecycle method to be executed as soon as a class component gets loaded.
♦️ Whenever a new instance of the class component is created, the constructor is called.
♦️ The best place to define state for the class component since it is the first to be called upon the loading of the class component.

✅4. Use of render() in class components?
♦️ The 2nd lifecycle method and gets executed after constructor().
♦️ It renders the class component.
♦️ It does not mount the component to the DOM. It just generates the component's Virtual DOM representation based on the current props and state.

✅5. Why do we use super(props) in constructor?
♦️ Every Class component is a child of the 'React.Component' parent class.
♦️ We know in our class components, the 1st method to be called is constructor( ) and in it, super(props) should be the very first line.
♦️ super( ) is a call to the Parent class's constructor i.e. to the React.Component's constructor.
♦️ We know in React class components, we will be using {this.props}. The 'this' object is actually coming from the parent class 'React.Component'. To use it, we must first intialise it. We can't use {this.props} unless the 'this.props' has been initialised in the parent class. So super(props) actually initializes the 'this.props'.

✅6. Use of componentDidMount()?
♦️ The 3rd lifecycle method to be executed in the Lifecycle of a class component.
♦️ It executes after the component has been completely mounted to the DOM.
♦️ It is the best place to make API calls/fetch calls.

✅7. Importance of componentWillUnmount()?
♦️ The 5th Lifecycle method that gets executed just before the class component is about to get unmounted from the DOM.
♦️ It is useful for doing any CLEAN-UP like clearing the interval, or timeout that we might have set earlier while mounting that component.
♦️ This is very important for building SCALABLE and PERFORMANT APPS.

👉A useful resource to keep in your grab bag: https://rb.gy/nznkii

Thanks Akshay Saini 🚀 for helping me dive deep into React Class Components and their LifeCycle!!

# Episode - 09

#NamasteReact🙏Episode 09: Optimising Our App🚀

You can check out my notes in my GitHub Repo: https://rb.gy/nznkii


My Key Takeaways from this episode💪

✅1. When to use lazy()? 😴
♦️ Use the lazy() method when you wish to not load everything into the browser in the beginning, instead, load the components only on-demand.
♦️ It allows the developer to break down an application into chunks (modules) per route and loads only the module(s) required for the route being visited.
♦️ Key principle being: "Load only what you need when you need it."

✅2. What is Suspense?👀
♦️ It is a component provided by the 'react' library that lets you display a fallback until its children have finished loading.
♦️ During the time span when the component is being loaded on-demand, we need to provide some fallback page to be rendered by React otherwise, it suspends the rendering.
♦️ So we wrap the lazy loaded component into <Suspense><Suspense/> and pass a fallback prop to it.

✅3. What is Single Responsibility Principle?🫡
♦️ Single Responsibility Principle(SRP) is a Computer Programming Principle where each entity(class/function) should have just one single responsibility.
♦️ Eg: <RestaurantCard/> component should just be concerned about rendering the Restaurant card. It should not be concerned about fetching those restaurant details from an API.

✅4. What is Modularity of Code?
♦️ Modularity means breaking our code into different small modules that are related to each other.
♦️ Breaking the code into smaller pieces makes it more Reusable, Maintainable and more Testable.
♦️ We can easily reuse the modules anytime, anywhere instead of writing the same code again and again.
♦️ If we encounter any bug in a particular functionality of our Modular code, we have a localised bug i.e. we can easily figure out that the bug arises from which module.

✅5. What are Custom Hooks? How to identify their need? 🪝
♦️ Just as we have React Hooks as utility functions provided by React developers, similarly, we can write our own Custom Hooks to be used as utilities in our code.
♦️ Whenever we find a single component dealing with more than 1 responsibility, we must think of abstracting some "utility functionality" outside it.
♦️ Writing Custom Hooks helps us abstract out the extra responsibility from the component. And they can now be re-used anywhere in our app, any number of times.

✅6. What is meant by 'Linting'?
♦️ Linting is a process of running your code through a tool to analyse for potential errors. It throws an error if you don't follow the conventions set by the linter.
♦️We can plugin linters into our project to make sure the conventions and best practices are being followed.

All thanks to Akshay Saini 🚀for teaching how to Optimize React apps to make them scalable and performant🤠!!

hashtag#namastereact
hashtag#reactjs
hashtag#reactdeveloper
hashtag#BeingCurious

# Episode - 10

#NamasteReact🙏Episode 10: Jo Dikhta Hai Wo Bikta Hai💰

You can check out my notes in my GitHub Repo: https://rb.gy/nznkii


My Key Takeaways from this episode💪

✅1. What are the ways to apply styling to our web app?

♦️ Vanilla CSS:
👉We can use plain CSS to give styles to our app.
👉 We create an index.css file and add all the CSS rules there.

♦️ SASS / SCSS :
👉SASS stands for Syntactically Awesome StyleSheets.
👉 A stylesheet language that is complied to CSS.
👉Allows us to make use of Nested rules, variables, functions.
👉SCSS: The SCSS syntax uses curly braces and semi colon syntax.
👉SASS: Uses indentation instead of curly braces, and line-end instead of semicolon.

♦️ Styled Components:
👉Allows us to write styles just as we write React components.
👉This means that when you're defining your styles, you're actually creating a normal React component, that has your styles attached to it.

♦️ Using External CSS Libraries like Material UI, Tailwind CSS, BootStrap, Ant Design, Chakra UI etc.
👉They give pre-styled components.
👉They export such components that are already beautiful. We can simply import and use them.
👉Tailwind CSS is the most modern method being used extensively in the industry to style web apps.

✅2. Pros of Tailwind CSS?

♦️ We have all our styles in the JS files itself. No need to move to and fro between JS and CSS files thus making the development quite quick.
♦️ Very lightweight library: Only the classes that we use are included in the CSS bundle of our build. Unused CSS is never shipped.
♦️ Builds any complex UI with Tailwind.
♦️ Builds absolutely responsive UIs without writing media queries.
♦️ Preventing Redundancy: If we have want two exact same UI objects in our app, we can use the same classes for both of them. Behind the scenes, the CSS code for that class will be imported just once by Tailwind. So we won't have redundant classes as we had in Vanilla CSS.

✅3. Cons of Tailwind CSS?

♦️ When we add a lot of CSS classes to our HTML/JS code, it becomes less-readable, lengthy and clumsy.
♦️ It comes with a lot of initial learning curve, as we need to know which class is to be used for which property.

✅4. In tailwind.config.js, what do all the keys "content", "theme", "plugins" mean?

♦️ "content": We configure the paths to HTML, JS components that contain tailwind classes.
♦️ "theme": The section where you define your project’s color palette, type scale, fonts, breakpoints etc.
♦️ "plugins": Here, we register new styles by injecting them into the user’s stylesheet using JavaScript instead of CSS.

All thanks to Akshay Saini 🚀 for teaching how to leverage the power of Tailwind CSS for adding styles to our app on the go!! I just love Tailwind❤️

hashtag#namastereact
hashtag#reactjs
hashtag#reactdeveloper

# Episode - 11

#NamasteReact🙏Episode 11: Data is the New Oil 🤩

You can check out my notes in my GitHub Repo: https://rb.gy/nznkii


My Key Takeaways from this episode💪

✅1. What is a Higher-Order Component?
♦️ A function that takes an existing component as an argument and then enhances that component(adds some extra features to it), and returns this enhanced component.
♦️ They are Pure Functions. They never modify the component, but just add extra features on top of it.

✅2. What makes the Data Layer of our app?
♦️ In a very generic way to see our React app, we can say it is composed of 2 Main Layers: Data Layer and UI Layer.
♦️ The Data Layer consists of state, props, local variables and whatever data our app deals with.
♦️ It powers the UI layer of our app.

✅3. What is Lifting the State Up?
♦️ Sometimes, we don't want to give the power of managing the state variable to the child component. Instead, we want to keep the state variable in the parent and pass its value as a prop from parent component to child component.
♦️ This way, the child component does not maintain its own state, but is being controlled by its parent. This is known as 'Lifting the State Up'.

✅4. What are Controlled and Uncontrolled Components?
♦️ Controlled Component: The Component that is being controlled by some other component. It is not able to maintain its own state.
♦️ UnControlled Component: The Component that itself has its single source of truth i.e. 'state' managed by itself is an Uncontrolled Component. It is not being controlled by any other component and is independently maintaining its own state variable.

✅5. What is Props Drilling?
♦️ Sometimes, we need to pass down data from one component to another through mutliple nested levels of components.
♦️ This is a problem as we are unnecessarily passing props even to those components which never need them. This is not a good way of managing the Data Layer. This problem is called 'Props Drilling'.

✅6. What is Context Provider?
♦️ We use it to provide the context to some portion of our app, alongwith specifying some value for the context.
♦️ The <SomeContext.Provider/> component is used to provide the value for the context. And we wrap some part of our app/whole app with this component.
♦️ It takes the 'value' prop where we can pass in the data we want to keep in the context. This data will override the default context value.

✅7. What is Context Consumer?
♦️ We use the component <SomeContext.Consumer/> to subscribe to a context. It lets us read the context value.
♦️ This component takes a function as a child, which takes the current context value and returns a React node.

Thanks Akshay Saini 🚀for sharing such wholesome knowledge on how to efficiently manage the Data Layer of our React apps.

hashtag#namastereact
hashtag#reactjs
hashtag#reactdeveloper
hashtag#BeingCurious

# HomeWork Questions

Q1. What is a Higher-Order Component?
It is a function that takes an existing component as an argument and then enhances that component(adds some extra features to it), and then returns this enhanced component.
Higher Order Components are Pure Functions. They never modify the component that they take in as input. They just add extra features on top of it/ enhance the basic component. | Enhanced Restaurant Component | = | Basic Component with dynamic Restaurant data + Label 'Promoted' on top of Basic Component |

Q2. What makes the Data Layer of our app?
In a very generic way to see our React app, we can say it is composed of 2 Main Layers: Data Layer and UI Layer.
The Data Layer consists of state, props, local variables and whatever data our app deals with.
It powers the UI layer of our app.

Q3. What makes the UI Layer of our app?
The UI layer consists of JSX which eventually gets rendered onto the Browser DOM.
It, in itself, is a Static layer, which is powered by the Data Layer.

Q4. What is Lifting the State Up?
Sometimes, we don't want to give the power of managing the state variable to the child component.
Instead, we want to keep the state variable in the parent and pass its value as a prop from parent component to child component. This is Lifting the State Up, since the child component is not maintaining its own state, but is being controlled by its parent.
Eg: We might want the state of multiple components to always change together i.e. be in sync (as in Accordion UI). To do this, we can remove the individual state variables from them and move/lift it to thier closest common parent component. Then to pass the state down to each child component, we use props. This is known as 'Lifting the State Up'.

Q5. What are Controlled and Uncontrolled Components?
Controlled Component: The Component that is being controlled by some other component. Eg: <MenuCategory/> is a controlled component since it gets controlled by its parent <MenuContainer/>. It is not able to maintain its own state.
UnControlled Component: The Component that itself has its single source of truth i.e. 'state' managed by itself is an Uncontrolled Component. It is not being controlled by any other component and is independently maintaining its own state variable.

Q6. What is Props Drilling?
Sometimes, we need to pass down data from one component to another through mutliple nested levels of components until we get to the component where the data is needed.
This is a problem since we are unnecessarily passing props even to those components which never need them. This is not a good way of managing the Data Layer.
This problem is called 'Props Drilling'.

Q7. What are Context Provider and Context Consumer?
Context Provider:
When we use the React Context concept, we first create Context as a central/ global place giving some default value to it.
Then we need to Provide it to our app, but not with the default value. We want to specify some value in the context.
So we need to use a component called <SomeContext.Provider/> to provide the value for the context. And we wrap some part of our app/whole app with this component.
To this component, we can pass the 'value' prop. In the value prop, we can pass in the data we want to keep in the context. This data will override the default value.
Context Consumer:
We use this component <SomeContext.Consumer/> to subscribe to a context. It lets us read the context value.
It is a component that subscribes to the context changes.
In this component, we wrap a function. That function takes the current context value and returns a React node.

Q8. If you don't pass a value to the provider, does it take the default value?
If we don't pass any value to the provider, it does not take the default value.
Instead, it simply assigns undefined to the context value and when later we try to use the context value inside some consumer or useContext(), we get a typeError saying the value is undefined.
If we totally avoid the Provider component, then the components where useContext() is written will take the default context value

````jsx

const ThemeContext = createContext("Default");
const User = ()=>{
  const context = useContext(ThemeContext);
  return <h2>User: {context}</h2>
}
const App = ()=>{
  return (
    <div>
          <ThemeContext.Provider value = {{context:"User1"}}>
            <User/>  //Child inside Provider will get "User1"
          <ThemeContext.Provider/>
          //Totally avoiding the Provider component:
          <User/>   //Child outside Provider will get "Default"
    </div>
  )
}
\```





````
