// Copyright (c) Jupyter Development Team.
// Distributed under the terms of the Modified BSD License.
'use strict';
var jupyter_js_editor_1 = require('jupyter-js-editor');
var phosphor_tabs_1 = require('phosphor-tabs');
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
function menuLoader() {
    return Promise.resolve(MENU);
}
exports.menuLoader = menuLoader;
/**
 * Plugin loader function for the UI items.
 */
function uiLoader() {
    var model = new jupyter_js_editor_1.EditorModel();
    var widget = new jupyter_js_editor_1.EditorWidget(model);
    var ui = {
        items: [widget],
        tabs: [new phosphor_tabs_1.Tab('Editor')]
    };
    return Promise.resolve(ui);
}
exports.uiLoader = uiLoader;
//# sourceMappingURL=index.js.map