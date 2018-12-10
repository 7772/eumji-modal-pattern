
import React, { Component } from 'react';
import Modal from "react-native-modal";

import FirstModal from "./components/modals/FirstModal";
import SecondModal from "./components/modals/SecondModal";
import ThirdModal from "./components/modals/ThirdModal";

const getModal = (modal, closeModal) => {
  const modals = {
    firstModal: <FirstModal closeModal={closeModal} />,
    secondModal: <SecondModal closeModal={closeModal} />,
    thirdModal: <ThirdModal closeModal={closeModal} />,
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