export const cpf_validator = (str: string) => {
  const numbersCpf = str.replace(/[^0-9]+/g, "");

  if (numbersCpf.length === 11) {
    const cpfReplaced = str.replace(
      /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      "$1.$2.$3-$4"
    );

    return cpfReplaced;
  } else if (!isNaN(+str)) {
    return str;
  } else if (numbersCpf.length == 10) {
    return numbersCpf;
  }
};
