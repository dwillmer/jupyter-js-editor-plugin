import { IMenuExtension, IUIExtension, ICommandExtension } from 'phosphide';
/**
 * Plugin loader function for the command.
 */
export declare function commandLoader(): Promise<ICommandExtension>;
/**
 * Plugin loader function for the menu.
 */
export declare function menuLoader(): Promise<IMenuExtension>;
/**
 * Plugin loader function for the UI items.
 */
export declare function uiLoader(): Promise<IUIExtension>;
