---
title: Whole New Stuffs
desc: There so many thing to do, like wash machine, write sentance to made me sad, and many more.
date: 2022-01-14
---

Ok, for most suring me that the code worked.

```js
assert.throws(
	() => {
		eval('let x = 1; let x = 2;');
	},
	{
		name: 'SyntaxError',
		message: "Identifier 'x' has already been declared",
	}
);
```
