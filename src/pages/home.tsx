import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../apis/getProducts";
import CardProduct from "../components/cardProduct";
import { ICard } from "../types/cart.Type";

const HomePage = () => {
  const { isPending, error, data } = useQuery<ICard[]>({
    queryKey: ["repoData"],
    queryFn: fetchProduct,
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  if (!data || data.length === 0) return "No data found";
  return (
    <div className="container mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 lg:mx-0 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-4">
      {data.map((item) => (
        <CardProduct
          key={item.id}
          title={item.title}
          category={item.category}
          price={item.price}
          sku={item.sku}
          thumbnail={item.thumbnail}
        />
      ))}
    </div>
    </div>
  );
};

export default HomePage;
