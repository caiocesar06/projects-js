import CPFValidator from "./CPFValidator";

export default class CPFGenerator {
    #rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    #format(cpf) {
        return (
            String(cpf).slice(0, 3) + '.' +
            String(cpf).slice(3, 6) + '.' +
            String(cpf).slice(6, 9) + '-' +
            String(cpf).slice(9, 11)
        );
    }

    generateCPF() {
        const cpfWithoutDigits = this.#rand();
        const cpfNextLastDigit = CPFValidator.calculateDigit(cpfWithoutDigits, 10);
        const cpfLastDigit = CPFValidator.calculateDigit(cpfWithoutDigits + cpfNextLastDigit, 11);
        const cpfGenerated = cpfWithoutDigits + cpfNextLastDigit + cpfLastDigit;
        return this.#format(cpfGenerated);
    }
}