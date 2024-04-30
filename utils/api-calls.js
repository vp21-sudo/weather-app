const getCurrenWteather = async (lat, long, setLoading) => {
  const url =
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${long}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ae6bf15df8msh36a5e1f2df94617p1cf128jsn7b5c7adf7e6a",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    setLoading(false)
    return result
  } catch (error) {
    console.error(error);
  }
};

export { getCurrenWteather };
