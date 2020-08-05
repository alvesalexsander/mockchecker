import AbstractTemplate from './AbstractTemplate.class';

export default class ElegibilidadeAdesaoTemplate extends AbstractTemplate {
    generate(data: any): string {
        return data
            ? data.sucessoElegibilidadeContaDigital
                ? `\n${this.color.cyan(`Elegível Conta Digital:\t`)}${this.color.yellowBright(`Sucesso`)}`
                : `\n${this.color.cyan(`Elegível Conta Digital:\t`)}${this.color.yellowBright(`Falha`)}`
            : `\n${this.color.cyan(`Elegível Conta Digital:\t`)}${this.color.yellowBright(this.notFoundMessage)}`;
    }
}
