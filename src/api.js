export const getCharactersList = async (page = 1) => {
    const apiData = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${page}`
    );
    const apiConvertedData = await apiData.json();
    const totalCount = apiConvertedData.info.count / 20;

    for (let i = 2; i <= totalCount+1; i++) {
        const tmpData = await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`);
        const jsonData = await tmpData.json();
        apiConvertedData.results = [...apiConvertedData.results, ...jsonData.results]
    }
    return apiConvertedData.results;
};

