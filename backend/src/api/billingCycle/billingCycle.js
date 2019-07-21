const restful = require('node-restful')
const mongoose = restful.mongoose


const creditSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome do Crédito.'] },
    value: { type: Number, min: 0, required: [true, 'Informe o valor do Crédito.'] }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome do Débito.'] },
    value: { type: Number, min: 0, required: [true, 'Informe o valor do Débito.'] },
    status: { type: String, required: false, uppercase: true, enum: ['PAGO', 'PENDENTE', 'AGENDADO'] }
})

const billinCycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    month: { type: Number, min: 1, max: 12, required: true },
    year: { type: Number, min: 1970, max: 2100, required: true },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restful.model('BillingCycle', billinCycleSchema)