export const combineNameUsers = (name: string, ltName: string) => {
  const firstName = name[0].toUpperCase() + name.substring(1);

  const ltNames = ltName.split(" ");

  const lastName =
    ltNames.length > 1
      ? ltNames
          .map((str) =>
            str.length > 2 ? str[0].toUpperCase() + str.substring(1) : str
          )
          .join(" ")
      : ltName[0].toUpperCase() + ltName.substring(1);

  return `${firstName} ${lastName}`;
};
