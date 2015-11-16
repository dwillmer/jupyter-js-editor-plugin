// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  EditorModel, EditorWidget
} from 'jupyter-js-editor';

import {
  IMenuExtension, IUIExtension
} from 'phosphide';

import {
  Tab
} from 'phosphor-tabs';


var MENU = {
  items: [
    {
      location: ["New", "Editor"],
      command: "jupyter.new.editor"
    }
  ]
};

/**
 * Plugin loader function for the menu.
 */
export
function menuLoader(): Promise<IMenuExtension> {
  return Promise.resolve(MENU);
}

/**
 * Plugin loader function for the UI items.
 */
export
function uiLoader(): Promise<IUIExtension> {
  var model = new EditorModel();
  var widget = new EditorWidget(model);
  var ui = {
    items: [widget],
    tabs: [new Tab('Editor')]
  };
  return Promise.resolve(ui);
}
