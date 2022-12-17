import './assets/css/style.css';
import CPFValidator from './modules/CPFValidator';
import CPFGenerator from './modules/CPFGenerator';

function copyCPFToClipboard(copyText) {
    return () => {
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand("copy");
    }
}

(() => {
    const cpfGenerator = new CPFGenerator();

    const inputCPFGeneratted = document.querySelector('.cpf-generatted');
    const btnCopy = document.querySelector('.btn-copy');
    const btnGenerate = document.querySelector('.btn-generate');
    const cpfInput = document.querySelector('.cpf');

    inputCPFGeneratted.value = cpfGenerator.generateCPF();
    btnCopy.onclick = copyCPFToClipboard(inputCPFGeneratted);
    btnGenerate.onclick = () => inputCPFGeneratted.value = cpfGenerator.generateCPF();

    cpfInput.oninput = function () {
        var v = cpfInput.value;
        if (isNaN(v[v.length - 1])) {
            cpfInput.value = v.substring(0, v.length - 1);
            return;
        }
        cpfInput.setAttribute("maxlength", "14");
        if (v.length == 3 || v.length == 7) cpfInput.value += ".";
        if (v.length == 11) cpfInput.value += "-";
        document.addEventListener('keydown', e => {
            if (e.keyCode == 8) {
                if (v.substring(0, v.length - 1) == '.' || v.substring(0, v.length - 1) == '-') cpfInput.value = v.substring(0, v.length - 2);
            }
        });
    };

    document.addEventListener('submit', e => {
        e.preventDefault();
        const cpfValue = cpfInput.value;
        const cpfValidator = new CPFValidator(cpfValue);
        const veredito = document.querySelector('.veredito');

        veredito.classList.remove('valido');
        veredito.classList.remove('invalido');
        if (cpfValidator.isCPF()) {
            veredito.classList.add('valido');
            veredito.innerHTML = 'CPF Válido';
        } else {
            if (cpfValue == '') {
                veredito.classList.remove('valido');
                veredito.classList.remove('invalido');
                veredito.innerHTML = '';
            } else {
                veredito.classList.add('invalido');
                veredito.innerHTML = 'CPF Inválido';
            }
        }
    });
    
})();
