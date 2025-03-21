const fetchData = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) throw new Error("Failed to fectch!");
  return await res.json();
};

export const promiseData = fetchData();
