## Problems

**1. The client side code becomes very messy if you use many modals.**

It is jusy messy and can not play soccer very well.

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

**2. You may need many booleans to handle multiple modals in your main client file.**
```
this.state = {
    isVisibleModalOne: false,
    isVisibleModalTwo: false,
    isVisibleModalFour: false,
    ...    
};
```

**3. You may use duplicate code to handle modals inside each file that needs modal.**
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

**4. Redux or something ?**

Although You may already use Redux or something to avoid these shortcomings, It is difficult to dodge all of above.

