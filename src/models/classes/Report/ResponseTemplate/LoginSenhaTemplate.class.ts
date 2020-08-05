import AbstractTemplate from './AbstractTemplate.class';

export default class LoginSenhaTemplate extends AbstractTemplate {
    generate(data: any): string {
        return data?.sucessoSenha
            ? data?.sucessoSenha
                ? `\n${this.color.cyan(`Fluxo de Senha:\t\t`)}${this.color.yellowBright(`Sucesso`)}`
                : `\n${this.color.cyan(`Fluxo de Senha:\t\t`)}${this.color.yellowBright(`Falha`)}`
            : `\n${this.color.cyan(`Fluxo de Senha:\t`)}${this.color.yellowBright(this.notFoundMessage)}`;
    }
}
