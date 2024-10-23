// validates.ts

// Função para verificar se um campo está vazio ou não
export const vIsEmpty = (value: any): boolean => {
    return value === null || value === undefined || value === '';
};
export const campoNaoPreenchido = (value: any): boolean => {
    return value === null || value === undefined || value === '';
};

// Função para verificar se uma data é válida
export const campoForData = (date: any): boolean => {
    return !isNaN(Date.parse(date));
};

// Função para validar CPF
export const vIsValidCPF = (cpf: string): boolean => {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0, rest;

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    rest = (sum * 10) % 11;

    if ((rest === 10) || (rest === 11)) rest = 0;
    if (rest !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    rest = (sum * 10) % 11;

    if ((rest === 10) || (rest === 11)) rest = 0;
    return rest === parseInt(cpf.substring(10, 11));
};

// Função para verificar se o valor é um número
export const vIsNumber = (value: any): boolean => {
    return !isNaN(parseFloat(value)) && isFinite(value);
};

// Outras validações podem ser adicionadas aqui...
