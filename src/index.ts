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
  registerExtension, IContribution
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

/**
 * Builds a new editor panel and returns it in the format
 * required by phosphide.
 */
function buildEditorPanel(): IContribution {
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
 * Plugin loader function for the menu.
 */
export
function createMenuContribution(): IContribution {
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
function createUIContribution(): IContribution {
  return buildEditorPanel();
}
