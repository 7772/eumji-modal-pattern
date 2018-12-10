# The Best Practice of Modal In React Native

***Proposal*** for nice developer experience when using modal in React Native.

The name, **Eumji Modal Pattern**.

---

## Why need Eumji Modal Pattern?

Modal make the messy. - Galahad in kingsman (maybe).

Please read [problems]().

---

## The Proposal

**Just Add 3 lines code in your client side that needs modals.**
**We are No Messy, No State, No Duplicate.**

**How?**

**1. Array variable that contains the name of Modals**

We Must name `modals`.

```
const modals = ["firstModal", "secondModal", "thirdModal"];
```

**2. Call function with modals in the render function.**

We Must name `retrieveModal`.

```
// In YourComponent.js

render() {
    return (
        <View>
            // ...
            this.props.retrieveModal(modals);
        </View>
    );
}
```

**3. Export component with Higher Order Function**

We Must name `withModal`.

```
export default withModal(YourComponent);
```

---

## Example

**! IMPORTANCE**

Make sure that this proposal is using [`react-native-modal`](https://github.com/react-native-community/react-native-modal)(Recommended).

If you do not want to use `react-native-modal`, You have to update the name of visible prop of your modal component in `withModal.js`. 

**1. Make Modal Component**

We will define Modal Component, (<Modal ...>) in withModal.js
So, Just make only View Component.

We Must name `FooModal` by appending `Modal` as postfix.

```
// FirstModal.js

export default FirstModal = ({ closeModal }) => {
  return (
    <View style={styles.modal}>
      <TouchableOpacity 
        style={styles.close}
        onPress={closeModal}
      >
        <Text>Close Modal</Text>
      </TouchableOpacity>
      <View style={styles.main}>
        <Text>FirstModal</Text>
      </View>
    </View>
  );
};
```

**2. Make Modal Handler Using Higher Order Function with getModal function.**

We Must name `withModal.js`.

```
// withModal.js

import Modal from "react-native-modal";

import FirstModal from "./FirstModal";
import SecondModal from "./SecondModal";
import ThirdeModal from "./ThirdeModal";

const getModal = (modal, closeModal) => {
  const modals = {
    firstModal: <FirstModal closeModal={closeModal} />,
    secondModal: <SecondModal closeModal={closeModal} />,
    thirdModal: <ThirdModal closeModal={closeModal} />,
    // ...
  };
  return modals[modal];
};

export default function withModal(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.showModal = this.showModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.retrieveModal = this.retrieveModal.bind(this);

      this.state = {
        isVisible: {
          firstModal: false,
          secondModal: false,
          thirdModal: false,
        }
      };
    }

    showModal(modal) {
      this.setState({ 
        isVisible: {
          [modal]: true
        } 
      });
    }

    closeModal(modal) {
      this.setState({ 
        isVisible: {
          [modal]: false
        } 
      });
    }

    renderModal(modal, index) {
      const { isVisible } = this.state;
      if (!isVisible.hasOwnProperty(modal)) return;
      return (
        <Modal key={index} isVisible={isVisible[modal]}>
          {getModal(modal, this.closeModal)}
        </Modal> 
      );
    }

    retrieveModal(modals) {
      if (modals.constructor !== Array) return;
      return modals.map((modal, index) => {
        return this.renderModal(modal, index);
      });
    }

    render() {
      return (
        <WrappedComponent 
          {...this.props} 
          showModal={this.showModal} 
          closeModal={this.closeModal} 
          retrieveModal={this.retrieveModal} 
        />
      );
    }
  };
}
```

#### How to open Modal

Make sure that use `fooModal` as key if you want to open `<FooModal />`;

```
// In YourComponent.js

this.props.showModal("fooModal");
```

#### How to close Modal

**1. If you want to close Modal in YourComponent.js**

Make sure that use `fooModal` as key if you want to close `<FooModal />`;


```
// In YourComponent.js

this.props.closeModal("fooModal");
```

**2. If you want to close Modal in Modal Component**

```
export default FooModal = ({ closeModal }) => {
  return (
    <View style={styles.modal}>
      <TouchableOpacity 
        style={styles.close}
        onPress={closeModal}          // We Use this line to close modal
      >
        <Text>Close Modal</Text>
      </TouchableOpacity>
      <View style={styles.main}>
        <Text>FirstModal</Text>
      </View>
    </View>
  );
};
```

#### Things To Do To Add New Modal

**1. Make Modal Component.**

Make sure that Modal function gets `closeModal` functions as property.

```
const NewModal = ({ closeModal }) => { ... };

export default NewModal;
```

**2. import NewModal Component in `withModal.js`**

```
import NewModal from "./NewModal";
```

**3. Add NewModal in getModal function**

Make sure that `modals` in getModal function has camelCase as key (`newModal`).

Make sure that add closeModal prop in Modal Component.

```
const getModal = (modal, closeModal) => {
  const modals = {
    // ...
    newModal: <NewModal closeModal={closeModal} />,
  };
  return modals[modal];
};
```

**4. Add state as boolean in contructor in `withModal.js`**

Make sure that use `camelCase`, not `PascalCase` because this variable will be used as key to handle modal. 

```
this.state = {
    isVisible: {
        ...
        newModal: false,
    }
};
```

**5. Add elements (`newModal`) in Array in YourComponent.js**

```
render() {
    const modals = [ ..., "newModal" ];
    return(
        this.props.retrieveModal(modals);
    );
}
```

---

### Examples

- [simple-eumji-modal-pattern]() - Implementation of the Eumji Modal Pattern. With this example you can right apply eumji-modal-pattern in your project.

---

### Implementation

Althogh Eumji Modal Pattern has some tasks, it will make your client side code very clean. I think that this pattern helps developer experience to be enhanced.

Please Submit any feedback via issue.

Thanks!

-- Landon





























