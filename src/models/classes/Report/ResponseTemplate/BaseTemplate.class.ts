import chalk from 'chalk';
import IResponseTemplate from './ResponseTemplate.interface';
import SETTINGS from '../../../../shared/settings';

export default abstract class AbstractTemplate implements IResponseTemplate {
    readonly notFoundMessage: string = '\tInformação não disponível.';
    readonly color: typeof chalk = chalk;

    generate(data: any): string {
        return;
    }
}
