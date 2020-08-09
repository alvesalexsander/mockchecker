/*
    Created by Alexsander Alves.
    Distributed under GLP 3.0 license.

    Contact: alvesalexsander@live.com
*/
import IResponseTemplate from './ResponseTemplate.interface';

export default abstract class BaseTemplate implements IResponseTemplate {
    readonly notFoundMessage: string = '\tData not found.';

    generate(data: any): string {
        return;
    }
}
