import { IMenuExtension, IUIExtension, ICommandExtension } from 'phosphide';
/**
 * Plugin loader function for the command.
 */
export declare function commandContributor(): Promise<ICommandExtension>;
/**
 * Plugin loader function for the menu.
 */
export declare function menuContributor(): Promise<IMenuExtension>;
/**
 * Plugin loader function for the UI items.
 */
export declare function uiContributor(): Promise<IUIExtension>;
