import IResponseTemplate from './ResponseTemplate.interface';

export default abstract class BaseTemplate implements IResponseTemplate {
    readonly notFoundMessage: string = '\tInformação não disponível.';

    generate(data: any): string {
        return;
    }
}
