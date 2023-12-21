# Assignment Episode-03

### What is JSX ?

<p>JSX stand for <strong>"Javascript XML".</strong></p>
<p>JSX provide HTML like syntax or XML like.</p>
<p>JSX makes developers life easy.</p>
<p>Babel Job to convert JSX into react elements.</p>

    JSX => React.createElement => React element Object => HMTLElement(render)

### Superpowers of JSX ?

- Readability: JSX code is often more readable, especially for those familiar with HTML.

- Performance: JSX compiles down to optimized JavaScript functions, ensuring faster rendering.

- Safety: JSX prevents injection attacks as it escapes any values embedded in it by default.

- The syntax of JSX might seem familiar to those who’ve worked with HTML, but there are some crucial differences:

- Self-closing tags: Just like in XML, if an element doesn’t have children, you must close it with a />.

```jsx
const image = <img src="path_to_image.jpg" alt="Description" />;
```

- CamelCase in attribute names: In JSX, you use camelCase for attributes instead of the hyphenated names you find in HTML. For instance, tabindex in HTML becomes tabIndex in JSX.

```jsx
const inputField = <input tabIndex="1" />;
```

- Dynamic content with curly braces: You can embed any JavaScript expression within curly braces.

```jsx
let greeting = "Hello";

const greetElement = <h1>{greeting}, codedamn!</h1>;
```


## Role of `type` attribute in script tag? What options can I use there?
A: The `type` attribute specifies the type of the script. The type attribute identifies the content between the `<script>` and `</script>` tags. It has a Default value which is “text/javascript”.
### `type` attribute can be of the following types:
- `text/javascript` : It is the basic standard of writing javascript code inside the `<script>` tag.
    ### Syntax
    ```
    <script type="text/javascript"></script>
    ```
- `text/ecmascript` : this value indicates that the script is following the `EcmaScript` standards.
- `module`: This value tells the browser that the script is a module that can import or export other files or modules inside it.
- `text/babel` : This value indicates that the script is a babel type and required bable to transpile it.
- `text/typescript`: As the name suggest the script is written in `TypeScript`.

## `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in `JSX`.
A: The Difference is stated below:
- `{TitleComponent}`: This value describes the `TitleComponent` as a javascript expression or a variable. 
The `{}` can embed a javascript expression or a variable inside it.
- `<TitleComponent/>` : This value represents a Component that is basically returning Some JSX value. In simple terms `TitleComponent` a function that is returning a JSX value.
A component is written inside the `{<  />}` expression.
- `<TitleComponent></TitleComponent>` :  `<TitleComponent />` and `<TitleComponent></TitleComponent>` are equivalent only when `< TitleComponent />` has no child components. The opening and closing tags are created to include the child components.
### Example
```
<TitleComponent>
    <FirstChildComponent />
    <SecondChildComponent />
    <ThirdChildComponent />
</TitleComponent>
```