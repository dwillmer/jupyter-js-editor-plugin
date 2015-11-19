// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';
var jupyter_js_editor_1 = require('jupyter-js-editor');
var phosphor_plugins_1 = require('phosphor-plugins');
var phosphor_tabs_1 = require('phosphor-tabs');
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
    handler: function () {
        console.log("JUPYTER_JS_EDITOR_PLUGIN COMMAND INVOKED");
        var ext = new phosphor_plugins_1.ExtensionDelegate(function () {
            return {
                object: buildEditorPanel(),
                data: undefined,
                config: undefined
            };
        });
        phosphor_plugins_1.loadExtension("ui:main", ext);
    }
};
function buildEditorPanel() {
    var model = new jupyter_js_editor_1.EditorModel();
    var widget = new jupyter_js_editor_1.EditorWidget(model);
    var ui = {
        items: [widget],
        tabs: [new phosphor_tabs_1.Tab('Editor')]
    };
    return ui;
}
/**
 * Plugin loader function for the command.
 */
function commandLoader() {
    console.log("Loading command..." + COMMAND.id);
    return Promise.resolve(COMMAND);
}
exports.commandLoader = commandLoader;
/**
 * Plugin loader function for the menu.
 */
function menuLoader() {
    return Promise.resolve(MENU);
}
exports.menuLoader = menuLoader;
/**
 * Plugin loader function for the UI items.
 */
function uiLoader() {
    var ui = buildEditorPanel();
    return Promise.resolve(ui);
}
exports.uiLoader = uiLoader;
//# sourceMappingURL=index.js.map