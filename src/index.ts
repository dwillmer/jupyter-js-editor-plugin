// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';

import {
  EditorModel, EditorWidget
} from 'jupyter-js-editor';

import {
  IMenuExtension, IUIExtension, ICommandExtension
} from 'phosphide';

import {
  DisposableDelegate, IDisposable
} from 'phosphor-disposable';

import {
  loadExtension, ExtensionDelegate
} from 'phosphor-plugins';

import {
  Tab
} from 'phosphor-tabs';


/**
 * Plugin configuration.
 */
var COMMAND_ID = "jupyter:new:editor";
var COMMAND_CAPTION = "New Editor Panel";
var MENU_LOCATION = ["New", "Editor"];

var MENU = {
  items: [
    {
      location: MENU_LOCATION,
      command: COMMAND_ID
    }
  ]
};

var COMMAND = {
  id: COMMAND_ID,
  caption: COMMAND_CAPTION,
  handler: () => {
    var ext = new ExtensionDelegate(() => {
      return {
        object: buildEditorPanel(),
        data: undefined,
        config: undefined
      };
    });

    loadExtension("ui:main", ext);
  }
};

/**
 * Builds a new editor panel and returns it in the format
 * required by phosphide.
 */
function buildEditorPanel(): IUIExtension {
  var model = new EditorModel();
  var widget = new EditorWidget(model);
  var ui = {
    items: [widget],
    tabs: [new Tab('Editor')]
  };
  return ui;
}

/**
 * Plugin loader function for the command.
 */
export
function commandLoader(): Promise<ICommandExtension> {
  return Promise.resolve(COMMAND);
}

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
  let ui = buildEditorPanel();
  return Promise.resolve(ui);
}
