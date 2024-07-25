export const getAllHeroes = async () => {
  try {
    const response = await fetch(
      "http://homologacao3.azapfy.com.br/api/ps/metahumans"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
