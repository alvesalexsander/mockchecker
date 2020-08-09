export default interface IRequest {
    method: string;
    query: {
        [key: string]: any;
        byKey?: string;
        byMatchingAny?: {
            [key: string]: any;
        };
        byMatchingEvery?: {
            [key: string]: any;
        };
    };
    requiredServices: string[] | string;

    /**
     * Set a new condition to the list of conditions data must to attend.
     * @param key Condition key - string.
     * @param value Condition value - any type.
     */
    and(key: string, value: any): this;

    /**
     * Set a new condition to the list of conditions data may attend at least one.
     * @param key Condition key - string.
     * @param value Condition value - any type.
     */
    or(key: string, value: any): this;
}
