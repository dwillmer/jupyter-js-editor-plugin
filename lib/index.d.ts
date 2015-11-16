import { IMenuExtension, IUIExtension } from 'phosphide';
/**
 * Plugin loader function for the menu.
 */
export declare function menuLoader(): Promise<IMenuExtension>;
/**
 * Plugin loader function for the UI items.
 */
export declare function uiLoader(): Promise<IUIExtension>;
