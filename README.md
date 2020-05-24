##### When you read this I want you to think about the component tree in react.

Of course you will not only want to pass state down the component tree with useState and props.

So we ask ourselves.. How do we pass state back up the tree or manage it globally?

###### Look at the simply named code and how all parents, childs and leafs have the same state.

```
App.jsx --> Parent.tsx --> Child.tsx --> ChildLeaf.tsx
```