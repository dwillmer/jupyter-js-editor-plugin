// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  EditorModel, EditorWidget
} from 'jupyter-js-editor';

import {
  DisposableDelegate, IDisposable
} from 'phosphor-disposable';

import {
  registerExtension
} from 'phosphor-plugins';


/**
 * Plugin configuration.
 */
var COMMAND_ID = "jupyter:new:editor";
var COMMAND_CAPTION = "New Editor Panel";
var MENU_LOCATION = ["New", "Editor"];

var MENU = {
  location: MENU_LOCATION,
  command: COMMAND_ID
};


var commandCount = 0;

var COMMAND = {
  id: COMMAND_ID,
  caption: COMMAND_CAPTION,
  handler: () => {
    var ext = {
      // id: "jupyter-js-editor-plugin:command-extension"+commandCount,
      // point: "ui:main",
      // item: buildEditorPanel(),
      // data: null,
      // config: null,
      // isDisposed: false,
      // dispose: () => { console.log('Dispose') }
    };

    // registerExtension(ext);
  }
};

/**
 * Builds a new editor panel and returns it in the format
 * required by phosphide.
 */
function buildEditorPanel(): any {
  var model = new EditorModel();
  var widget = new EditorWidget(model);
  widget.title.text = 'Editor';
  widget.title.closable = true;
  var ext = {
    item: widget,
    isDisposed: false,
    dispose: () => {}
  };
  return ext;
}

/**
 * Plugin loader function for the command.
 */
export
function commandContributor(): any {
  console.log('js-editor: Command Contributor called');
  return {
    item: COMMAND,
    isDisposed: false,
    dispose: () => {}
  };
}

/**
 * Plugin loader function for the menu.
 */
export
function createMenuContribution(): any {
  console.log('js-editor: Menu contributor called');
  return {
    item: MENU,
    isDisposed: false,
    dispose: () => {}
  };
}

/**
 * Plugin loader function for the UI items.
 */
export
function createUIContribution(): any {
  console.log('js-editor: UI Contributor called');
  return buildEditorPanel();
}
