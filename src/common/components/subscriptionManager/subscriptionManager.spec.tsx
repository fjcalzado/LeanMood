import * as React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { SubscriptionManager } from './subscriptionManager';

describe('common/subscriptionManager', () => {
  it('is defined', () => {
    expect(SubscriptionManager).not.to.be.undefined;
  });

  it('calls the subscribe action on componentWillMount', () => {
    // Arrange
    const subscribeAction = sinon.spy((payload) => { });
    const payload = {};
    const unsubscribeAction = sinon.spy(() => { });

    // Act
    const progressBarComponent = mount(
      <SubscriptionManager
        subscribe={subscribeAction}
        payload={payload}
        unsubscribe={unsubscribeAction}
       />,
    );

    // Assert
    expect(subscribeAction.called).to.be.true;
  });

  it('calls the unsubscribe action on componentunMount', () => {
    // Arrange
    const subscribeAction = sinon.spy((payload) => { });
    const payload = {};
    const unsubscribeAction = sinon.spy(() => { });

    // Act
    const progressBarComponent = mount(
      <SubscriptionManager
        subscribe={subscribeAction}
        payload={payload}
        unsubscribe={unsubscribeAction}
       />,
    );

    progressBarComponent.unmount();

    // Assert
    expect(subscribeAction.called).to.be.true;
    expect(unsubscribeAction.called).to.be.true;
  });

  // Pending Null values, default values
});
