// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  EditorModel, EditorWidget
} from 'jupyter-js-editor';

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
function menuLoader(extension:any): Promise<any> {
  return Promise.resolve(MENU);
}

/**
 * Plugin loader function for the UI items.
 */
export
function uiLoader(extension: any): Promise<any> {
  var model = new EditorModel();
  var widget = new EditorWidget(model);
  var ui = {
    items: [widget],
    tabs: [new Tab('Editor')]
  };
  return Promise.resolve(ui);
}
