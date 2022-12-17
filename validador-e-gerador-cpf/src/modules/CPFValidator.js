export default class CPFValidator {
    #number;

    constructor(number) {
        this.#number = String(number.toString()
                        .replace(/\D+/g, ''));
    }

    isCPF() {
        if (this.#number.length !== 11) return false;

        if (!this.#isDigitsValid) return false;

        if (!this.#isNextLastDigitValid()) return false;

        if (!this.#isLastDigitValid()) return false;

        return true;
    }

    #isDigitsValid() {
        const validDigits = Array.from(this.#number, Number).reduce((acm, value) => {
            acm += value;
            return acm;
        }, 0);
        if (Number(this.#number[0]) === Math.floor(validDigits / 11)) return false;
        return true;
    }

    static calculateDigit(number, digitPosition) {
        let total = 0;
        let multiplier = 10;
        let index = digitPosition - multiplier;
        for(let i = index; i < digitPosition - 1; i++) {
            let value = Number(number[i]);
            total += (value * multiplier);
            multiplier--;
        }
        const digit = Math.floor(11 - (total % 11));
        return (digit >= 10) ? 0 : digit;
    }

    #isNextLastDigitValid() {
        const cpfNextLastDigit = CPFValidator.calculateDigit(this.#number, 10);
        if (Math.floor(this.#number[9]) === cpfNextLastDigit) {
            this.#number += cpfNextLastDigit.toString();
            return true;
        }
        return false;
    }

    #isLastDigitValid() {
        return Math.floor(this.#number[10]) === CPFValidator.calculateDigit(this.#number, 11);
    }
}