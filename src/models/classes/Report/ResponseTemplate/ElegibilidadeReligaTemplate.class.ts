import AbstractTemplate from './AbstractTemplate.class';

export default class ElegibilidadeTemplate extends AbstractTemplate {
    generate(data: any): string {
        return `${this.color.cyan(`Elegível ao Religa:\t`)}${this.color.yellowBright(
            data?.sucessoReliga ? 'Sim' : 'Não' || this.notFoundMessage,
        )}`;
    }
}
