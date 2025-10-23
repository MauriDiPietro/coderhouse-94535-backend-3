class Cal {
  chequearValores(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return true;
    return false;
  }

  suma(num1, num2) {
    if (this.chequearValores(num1, num2))
      throw new Error("Los valores deben ser numéricos");
    return num1 + num2;
  }

  resta(num1, num2) {
    if (this.chequearValores(num1, num2))
      throw new Error("Los valores deben ser numéricos");
    return num1 - num2;
  }
}

export const calculadora = new Cal();