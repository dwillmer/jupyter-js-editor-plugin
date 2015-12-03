// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';
var jupyter_js_editor_1 = require('jupyter-js-editor');
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
    handler: function () {
        var ext = {};
        // registerExtension(ext);
    }
};
/**
 * Builds a new editor panel and returns it in the format
 * required by phosphide.
 */
function buildEditorPanel() {
    var model = new jupyter_js_editor_1.EditorModel();
    var widget = new jupyter_js_editor_1.EditorWidget(model);
    widget.title.text = 'Editor';
    widget.title.closable = true;
    var ext = {
        item: widget,
        isDisposed: false,
        dispose: function () { }
    };
    return ext;
}
/**
 * Plugin loader function for the command.
 */
function commandContributor() {
    console.log('js-editor: Command Contributor called');
    return {
        item: COMMAND,
        isDisposed: false,
        dispose: function () { }
    };
}
exports.commandContributor = commandContributor;
/**
 * Plugin loader function for the menu.
 */
function createMenuContribution() {
    console.log('js-editor: Menu contributor called');
    return {
        item: MENU,
        isDisposed: false,
        dispose: function () { }
    };
}
exports.createMenuContribution = createMenuContribution;
/**
 * Plugin loader function for the UI items.
 */
function createUIContribution() {
    console.log('js-editor: UI Contributor called');
    return buildEditorPanel();
}
exports.createUIContribution = createUIContribution;
//# sourceMappingURL=index.js.map