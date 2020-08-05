import ReportResponse from './ReportResponse/ReportResponse.class';

const teste = new ReportResponse({
    type: 'tipoConta',
    data: {
        body: {
            billingProfile: {
                billDetailLevel: 'Fatura',
            },
        },
    },
});

console.log(teste.getResponse());

// teste.setType('statusFaturas');
// teste.setData({
//     "rfc-message-list-size": 1,
//     "rfc-message-list": {
//         "rfc-message": {
//             "type": "S",
//             "id": "ZRMCA",
//             "number": 102,
//             "message": "I:ZRMCA:102",
//             "log-msg-no": 0
//         }
//     },
//     "invoice-list-size": 6,
//     "invoice-list": {
//         "invoice": [
//             {
//                 "number": "0000003318104941",
//                 "status": "Paga",
//                 "month": "07",
//                 "value": 99,
//                 "expiration-date": "07/10/2020",
//                 "payment-date": "07/20/2020",
//                 "period-date": "07/01/2020",
//                 "emission-date": "07/01/2020",
//                 "customer-id": 109434335,
//                 "value-open": 0,
//                 "day-late": 0,
//                 "bill-type": "Fatura",
//                 "nodunning": "N",
//                 "item-list-size": 1,
//                 "barcode": "846300000003599901090119003410828408501165007500"
//             },
//             {
//                 "number": "0000003318104941",
//                 "status": "Paga",
//                 "month": "06",
//                 "value": 99,
//                 "expiration-date": "06/10/2020",
//                 "payment-date": "06/20/2020",
//                 "period-date": "06/01/2020",
//                 "emission-date": "06/01/2020",
//                 "customer-id": 109434335,
//                 "value-open": 0,
//                 "day-late": 0,
//                 "bill-type": "Fatura",
//                 "nodunning": "N",
//                 "item-list-size": 1,
//                 "barcode": "846300000003599901090119003410828408501165007500"
//             },
//             {
//                 "number": "0000003318104941",
//                 "status": "Paga",
//                 "month": "05",
//                 "value": 99,
//                 "expiration-date": "05/10/2020",
//                 "payment-date": "05/20/2020",
//                 "period-date": "05/01/2020",
//                 "emission-date": "05/01/2020",
//                 "customer-id": 109434335,
//                 "value-open": 0,
//                 "day-late": 0,
//                 "bill-type": "Fatura",
//                 "nodunning": "N",
//                 "item-list-size": 1,
//                 "barcode": "846300000003599901090119003410828408501165007500"
//             },
//             {
//                 "number": "0000003318104941",
//                 "status": "Paga",
//                 "month": "04",
//                 "value": 99,
//                 "expiration-date": "04/10/2020",
//                 "payment-date": "04/20/2020",
//                 "period-date": "04/01/2020",
//                 "emission-date": "04/01/2020",
//                 "customer-id": 109434335,
//                 "value-open": 0,
//                 "day-late": 0,
//                 "bill-type": "Fatura",
//                 "nodunning": "N",
//                 "item-list-size": 1,
//                 "barcode": "846300000003599901090119003410828408501165007500"
//             },
//             {
//                 "number": "0000003318104941",
//                 "status": "Paga",
//                 "month": "03",
//                 "value": 99,
//                 "expiration-date": "03/10/2020",
//                 "payment-date": "03/20/2020",
//                 "period-date": "03/01/2020",
//                 "emission-date": "03/01/2020",
//                 "customer-id": 109434335,
//                 "value-open": 0,
//                 "day-late": 0,
//                 "bill-type": "Fatura",
//                 "nodunning": "N",
//                 "item-list-size": 1,
//                 "barcode": "846300000003599901090119003410828408501165007500"
//             },
//             {
//                 "number": "0000003318104941",
//                 "status": "Paga",
//                 "month": "02",
//                 "value": 99,
//                 "expiration-date": "02/10/2020",
//                 "payment-date": "02/20/2020",
//                 "period-date": "02/01/2020",
//                 "emission-date": "02/01/2020",
//                 "customer-id": 109434335,
//                 "value-open": 0,
//                 "day-late": 0,
//                 "bill-type": "Fatura",
//                 "nodunning": "N",
//                 "item-list-size": 1,
//                 "barcode": "846300000003599901090119003410828408501165007500"
//             }
//         ]
//     },
//     "tid": "5704C45A4761257019E600016"

// });
// teste.generateResponse();
// console.log(teste, teste.isReady() ? 'READY' : 'NOT READY');
// console.log(teste.getResponse());

// EXEMPLO INVOICE
/* {
    "rfc-message-list-size": 1,
    "rfc-message-list": {
        "rfc-message": {
            "type": "S",
            "id": "ZRMCA",
            "number": 102,
            "message": "I:ZRMCA:102",
            "log-msg-no": 0
        }
    },
    "invoice-list-size": 6,
    "invoice-list": {
        "invoice": [
            {
                "number": "0000003318104941",
                "status": "Paga",
                "month": "07",
                "value": 99,
                "expiration-date": "07/10/2020",
                "payment-date": "07/20/2020",
                "period-date": "07/01/2020",
                "emission-date": "07/01/2020",
                "customer-id": 109434335,
                "value-open": 0,
                "day-late": 0,
                "bill-type": "Fatura",
                "nodunning": "N",
                "item-list-size": 1,
                "barcode": "846300000003599901090119003410828408501165007500"
            },
            {
                "number": "0000003318104941",
                "status": "Paga",
                "month": "06",
                "value": 99,
                "expiration-date": "06/10/2020",
                "payment-date": "06/20/2020",
                "period-date": "06/01/2020",
                "emission-date": "06/01/2020",
                "customer-id": 109434335,
                "value-open": 0,
                "day-late": 0,
                "bill-type": "Fatura",
                "nodunning": "N",
                "item-list-size": 1,
                "barcode": "846300000003599901090119003410828408501165007500"
            },
            {
                "number": "0000003318104941",
                "status": "Paga",
                "month": "05",
                "value": 99,
                "expiration-date": "05/10/2020",
                "payment-date": "05/20/2020",
                "period-date": "05/01/2020",
                "emission-date": "05/01/2020",
                "customer-id": 109434335,
                "value-open": 0,
                "day-late": 0,
                "bill-type": "Fatura",
                "nodunning": "N",
                "item-list-size": 1,
                "barcode": "846300000003599901090119003410828408501165007500"
            },
            {
                "number": "0000003318104941",
                "status": "Paga",
                "month": "04",
                "value": 99,
                "expiration-date": "04/10/2020",
                "payment-date": "04/20/2020",
                "period-date": "04/01/2020",
                "emission-date": "04/01/2020",
                "customer-id": 109434335,
                "value-open": 0,
                "day-late": 0,
                "bill-type": "Fatura",
                "nodunning": "N",
                "item-list-size": 1,
                "barcode": "846300000003599901090119003410828408501165007500"
            },
            {
                "number": "0000003318104941",
                "status": "Paga",
                "month": "03",
                "value": 99,
                "expiration-date": "03/10/2020",
                "payment-date": "03/20/2020",
                "period-date": "03/01/2020",
                "emission-date": "03/01/2020",
                "customer-id": 109434335,
                "value-open": 0,
                "day-late": 0,
                "bill-type": "Fatura",
                "nodunning": "N",
                "item-list-size": 1,
                "barcode": "846300000003599901090119003410828408501165007500"
            },
            {
                "number": "0000003318104941",
                "status": "Paga",
                "month": "02",
                "value": 99,
                "expiration-date": "02/10/2020",
                "payment-date": "02/20/2020",
                "period-date": "02/01/2020",
                "emission-date": "02/01/2020",
                "customer-id": 109434335,
                "value-open": 0,
                "day-late": 0,
                "bill-type": "Fatura",
                "nodunning": "N",
                "item-list-size": 1,
                "barcode": "846300000003599901090119003410828408501165007500"
            }
        ]
    },
    "tid": "5704C45A4761257019E600016"

} */
