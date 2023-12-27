# Namaste React

# Parcel

- Dev Build
- Local Server
- HMR (Hot Module Refreshment)/ Automatically refresh the page
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing : read yourself
- Code Splitting
- Differential Bundling - To support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles

# Namaste Food

- Components
- Header
- - Logo
- - Nav Items
- Body
- - Search
- - RestaurantContainer
- - RestaurantCard
-      - Img
-      - Name of Res, Star Rating, cuisine,
- Footer
- - Copyright
- - Links
- - Address
- - Contact

## Two types of Export/Import

- Default Export/Import

export default Component;
import Component from "path";

- Named Export/Import

export const Component;
import {Component} from "path";

# React Hooks

React Hooks is basically (Normal JS utility functions)

    useState() - Superpowerfull state Variable in react

`Syntax : useEffect( () => {}, [] ) `

# Two Approaches to make an api call

### First Approach

- As soon as page loads we can make api call and wait for response after get response then we render the UI

`Loads => API call(wait for resp) => Render`

### Second Approach

- As soon as page loads just render it whatever have just render it then make an api call then re-render it

- In React we use this approach. This is the better approach and It gives better UX (User Experience)

- If u think it render twice it can't matters because react renders your UI very fast

`Loads => Render => API call => Rerender `

- We can implement second approach using useEffect() hook


## useEffect

`If no dependency array => useEffect is called on every render`

    import {useEffect} from 'react;
    useEffect( () => {} )

`If dependency array is empty = [] => useEffect is called on initial render(just once)`

    import {useEffect} from 'react;
    useEffect( () => {}, [] )

`If dependency array is [btnName] => called everytime btnName is updated`

    import {useEffect} from 'react;
    useEffect( () => {}, [btnName])

## useState

Syntax:

    import {useState} from 'react;
    const [btnName,setBtnName] = useState("Login")

- Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)


# There are 2 Types of Routing in web apps

- Client Side Routing

- Server Side Routing
