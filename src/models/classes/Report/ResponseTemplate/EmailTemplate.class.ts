import AbstractTemplate from './AbstractTemplate.class';

export default class EmailTemplate extends AbstractTemplate {
    generate(data: any): string {
        return data
            ? data.sucessoEnvioEmail
                ? `${this.color.cyan(`2ª via Email:\t\t`)}${this.color.yellowBright(`Sucesso`)}`
                : `${this.color.cyan(`2ª via Email:\t\t`)}${this.color.yellowBright(`Falha`)}`
            : `${this.color.cyan(`2ª via Email:\t\t`)}${this.color.yellowBright(this.notFoundMessage)}`;
    }
}
