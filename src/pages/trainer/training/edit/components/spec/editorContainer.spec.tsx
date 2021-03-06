import * as React from 'react';
import {mount} from 'enzyme';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import * as trainingContentChanged from '../../actions/trainingContentChanged';
import * as updateEditorCursor from '../../actions/updateEditorCursor';
import {EditorContainerComponent} from '../editorContainer';

const createStore = configureStore();

describe('EditorContainerComponent', () => {
  it('should be defined', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      trainer: {
        training: {
          content: '',
        },
      },
    });

    const trainingContentChangedStub = sinon.stub(trainingContentChanged,
      'trainingContentChangedAction', () => ({ type: 'dummy' }));

    const updateEditorCursorStub = sinon.stub(updateEditorCursor,
      'updateEditorCursorAction', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <EditorContainerComponent />
      </Provider>,
    );

    // Assert
    expect(container).not.to.be.undefined;
  }).bind(this));

  it('should contain a property called content and be informed', sinon.test(() => {
    // Arrange
    const sinon: sinon.SinonStatic = this;

    const mockStore: any = createStore({
      trainer: {
        training: {
          content: 'Test content',
        },
      },
    });

    const trainingContentChangedStartStub = sinon.stub(trainingContentChanged,
      'trainingContentChangedAction', () => ({ type: 'dummy' }));

    const updateEditorCursorStub = sinon.stub(updateEditorCursor,
      'updateEditorCursorAction', () => ({ type: 'dummy' }));

    // Act
    const container = mount(
      <Provider store={mockStore}>
        <EditorContainerComponent />
      </Provider>,
    );

    // Assert
    const presentational = container.find('EditorComponent');
    expect(presentational).not.to.be.undefined;
    expect(presentational.prop('content')).to.equal('Test content');
  }).bind(this));
});
