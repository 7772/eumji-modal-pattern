
import React, { Component } from 'react';
import Modal from "react-native-modal";

import FirstModal from "./components/modals/FirstModal";
import SecondModal from "./components/modals/SecondModal";
import ThirdModal from "./components/modals/ThirdModal";

const getModal = (modal, close) => {
  const modals = {
    firstModal: <FirstModal close={close} />,
    secondModal: <SecondModal close={close} />,
    thirdModal: <ThirdModal close={close} />,
  };
  return modals[modal];
};

export default function withModal(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.show = this.show.bind(this);
      this.close = this.close.bind(this);
      this.retrieveModal = this.retrieveModal.bind(this);

      this.state = {
        isVisible: {
          firstModal: false,
          secondModal: false,
          thirdModal: false,
        }
      };
    }

    show(modal) {
      this.setState({ 
        isVisible: {
          [modal]: true
        } 
      });
    }

    close(modal) {
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
          {getModal(modal, this.close)}
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
          show={this.show} 
          close={this.close} 
          retrieveModal={this.retrieveModal} 
        />
      );
    }
  };
}