# React Native Modal Base Practice

Proposal for nice developer experience when using modal in React Native.

## Problems

1. The client side code becomes very messy if you use many modals.

```
render() {
    return (
        <View>
            ...
            <Modal>...</Modal>
            <Modal>...</Modal>
            <Modal>...</Modal>
            <Modal>...</Modal>
            <Modal>...</Modal>
            <Modal>...</Modal>
        </View>
    );    
}
```

2. You may need many booleans to handle multiple modals in your main client file.
```
this.state = {
    isVisibleModalOne: false,
    isVisibleModalTwo: false,
    isVisibleModalFour: false,
    ...    
};
```

3. You may use duplicate code to handle modals inside each file that needs modal.
```
// in One.js

showModal() {
    this.setState({
        isVisibleModal: true    
    });    
}

closeModal() {
    this.setState({
        isVisibleModal: false    
    });
}
```

```
// in Other.js

showModal() {
    this.setState({
        isVisibleModal: true    
    });
}

...
```

Over and over...

4. Redux or something ?

Althogh You may aleady use Redux to avoid these shortcommings, It is difficult to dodge all of above.













