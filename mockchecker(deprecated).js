const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//const mockNumberValidation = require('./modules/mockNumberValidation.module');

const color = require('./shared/textColors');

let clientNumber = '';

console.log(`\n${color.basefy(`${color.highlight}MockChecker ${color.reset}${color.base}- Verifique facilmente um numero nos mocks.`)}`);

//startMockChecker();

function cliMockChecker(number, option) {
    clientNumber = require('./modules/numberValidator.module')(number);
    option = option ? require('./modules/focusOptions.module')(option) : 'invalido'
    new mockChecker(clientNumber, option);
    process.exit(1);
}

if (!isNaN(process.argv[2])) {
    cliMockChecker(process.argv[2], process.argv[3]);
}
else {
    (function startMockChecker() {
        rl.question(`\n${color.base}Para começar, digite o número que gostaria de verificar: ${color.reset}`, (res) => {
            clientNumber = require('./modules/numberValidator.module')(res.toString().trim());

            rl.question(`\n${color.base}Verificação ${color.resultify(`simples`)} ${color.base}ou ${color.resultify(`detalhada`)}?
                        \n${color.basefy(`(Digite '${color.resultify(`s`)}' ${color.base}para Simples ou '${color.resultify(`d`)}${color.base}' para Detalhada): `)}`,
                (option) => {
                    if (option === 'd' || option === 'D') {
                        rl.question(`\nQual é o direcionamento da verificação?
                                \n- Contratação de Pacotes -> Digite '${color.resultify('C')}'
                                \n- Pagamento de Conta -> Digite '${color.resultify('P')}'
                                \n- Benefícios -> Digite '${color.resultify('B')}'
                                \n- Religa -> Digite '${color.resultify('R')}': `,
                            (option) => {
                                option = option.toString().trim();
                                new mockChecker(clientNumber, option);
                                resetRun();
                            });
                    }
                    else {
                        new mockChecker(clientNumber);
                        resetRun();
                    }
                });
        });

        function resetRun() {
            rl.question(`\n${color.basefy("Gostaria de fazer outra consulta? (s / n):")}\n`, (res) => {
                new String(res).trim() === 's' ?
                    startMockChecker() :
                    new String(res).trim() === 'S' ?
                        startMockChecker() :
                        `\n${process.exit(1)}`;
            })
        }

    })();
}