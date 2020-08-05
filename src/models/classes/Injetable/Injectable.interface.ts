export default interface IInjectable {
    [key: string]: any;

    /**
     * Takes an item as parameter and inject in a new property.
     * @param item Item to inject
     * @param newPropertyName String property name
     */
    injectNewProp(item: any, newPropertyName: string): boolean;

    /**
     * Takes an item as parameter and inject in a existing property.
     * @param item Item to inject
     * @param propertyName String property name
     */
    injectAtProp(item: any, propertyName: string): boolean;

    /**
     * Import a JS or JSON file and returns it
     * @param pathReceived String file path with '.js' or '.json' extensions.
     */
    injectFileFromPath(pathReceived: string): any;

    isRelativePath(pathString: string): boolean;

    getBaseFolderPath(): string;

    isFileJS(filePath: string): boolean;

    isFileJSON(filePath: string): boolean;
}
