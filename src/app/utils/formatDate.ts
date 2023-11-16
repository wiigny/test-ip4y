export const formatDate = (dateUser: string, wHours?: boolean) => {
  const date = new Date(dateUser);

  const day = String(date.getUTCDate()).padStart(2, "0");
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  if (wHours) {
    const hrs = String(date.getUTCHours()).padStart(2, "0");
    const min = String(date.getUTCMinutes()).padStart(2, "0");
    const sec = String(date.getUTCSeconds()).padStart(2, "0");

    return `${day}/${month}/${year} às ${hrs}:${min}:${sec} `;
  } else {
    return `${day}/${month}/${year}`;
  }
};
