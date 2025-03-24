import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ICustomCard } from "@/types/type";
import { Minus, Plus, Star } from "lucide-react";
import { FC, memo, useCallback, useState } from "react";
import { Button } from "./ui/button";
import { useStore } from "@/stores";

const CustomCard: FC<{ data: ICustomCard[] }> = ({ data }) => {
  const [cartItems, setCartItems] = useState<{ [key: number]: number }>({});
  const { addCount, removeCount } = useStore((state) => state);

  const handleAddtoCart = useCallback(
    (id: number) => {
      setCartItems((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }));
      addCount();
    },
    [addCount]
  );

  const handleIncrease = useCallback(
    (id: number) => {
      setCartItems((prev) => ({ ...prev, [id]: prev[id] + 1 }));
      addCount();
    },
    [addCount]
  );

  const handleDecrease = useCallback(
    (id: number) => {
      setCartItems((prev) => {
        const newCount = prev[id] - 1;
        if (newCount === 0) {
          const updatedCart = { ...prev };
          delete updatedCart[id];
          return updatedCart;
        }
        return { ...prev, [id]: newCount };
      });
      removeCount();
    },
    [removeCount]
  );

  return (
    <div className="flex flex-wrap gap-8 justify-center">
      {data.map((e: ICustomCard) => {
        return (
          <Card className="flex w-[250px] border-2" key={e.id}>
            <div className="h-[100%]">
              <CardContent className="flex items-center justify-center h-[250px]">
                <img src={e.image} width={150} height={150} />
              </CardContent>
              <CardFooter>
                <div className="flex flex-col gap-y-2 justify-start w-full">
                  <label>{e.title}</label>
                  <div className="flex items-center gap-x-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < e.rating.rate
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <label className="ml-2">{e.rating.count}</label>
                  </div>
                  <label className="text-blue-400 font-semibold">
                    Rs {e.price}
                  </label>
                </div>
              </CardFooter>
            </div>
            {cartItems[e.id] ? (
              <div className="flex items-center w-full justify-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleDecrease(Number(e.id))}
                >
                  <Minus size={16} />
                </Button>
                <label className="text-lg">{cartItems[e.id]}</label>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleIncrease(e.id)}
                >
                  <Plus size={16} />
                </Button>
              </div>
            ) : (
              <Button className="w-full" onClick={() => handleAddtoCart(e.id)}>
                Add to Cart
              </Button>
            )}
          </Card>
        );
      })}
    </div>
  );
};

export default memo(CustomCard);
