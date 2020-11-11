# batch-state
> A small module to simplify the usage of React's useState hook.

## Installation
This package requires `react` to function.

Using NPM:
```
> npm install batch-state
```

Or, if you're using Yarn:
```
> yarn add batch-state
```

## Usage
`batch-state` is a function that calls `React.useState` multiple times. It's meant to be easier to use and less to type. 

### Creating State
To create states, use the array destructuring syntax to get your values. The number of variables (states) returned is the number of values you pass into `batchState`.
```jsx
import batchState from 'batch-state';

// ... //

const [value1, value2, value3 /* ... */] = batchState("value1", "value2", "value3" /* ... */);
```

### Reading State
Simply just reference the variable to use the state.

```jsx
import batchState from 'batch-state';

function MyFunctionalReactComponent() {
	const [state1, state2, state3] = batchState(1, "string", true);
	
	return (
		<>
			<p children={state1} />
			<p children={state2} />
			<p children={state3} />
		</>
	)
}
```

This would render:
```html
<p>1</p>
<p>string</p>
<p>true</p>
```

### Setting State
Each state object returned by `batchState` is a special type of the value you put in. Each value has a method named `set()` that accepts only one argument: the new value of the state.
```jsx
import batchState from 'batch-state';

// ... //

const [myState] = batchState(true);

// ... //

myState.set(false);

return <p children={myState} />;
```

Would render:
```html
<p>true</p>
```

Then:
```html
<p>false</p>
```

## API Documentation
> **`batchState(...values)`**
> Create multiple states at once.
> *returns `any`*

> **`stateValue.set(v)`**
> Set a value for the new state.
> *returns `void`*

## License
`batch-state` is issued under the MIT license.

Copyright 2020 RealSGII2 (Thomas Wise)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
