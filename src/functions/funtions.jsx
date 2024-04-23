import axios from "axios";

export const Data = async () => {
  try {
    const options = {
      headers: {
        accept: "application/json",
      },
    };

    const response = await axios.get(
      `https://api.potterdb.com/v1/characters`,
      options
    );
    return response.data;
  } catch (error) {
    console.error("Error al obtener la data:", error);
  }
};
