import React, { useEffect, useState } from "react";
import Carousel from "../../components/shareComponent/Carousel";
import MiddleRibbon from "../../components/Body/middleRibbon";
import { useQuery, useQueryClient } from "react-query";
import axios from "axios";
import Image from "next/image";
import Button from "../../components/shareComponent/Button";
import { useAtom } from "jotai";
import { objectsAtom, totalPrice } from "../../components/shareComponent/Store";

export function getPostsPaginated(page: number) {
  return axios.get(`/api/newGames/${page}`).then((res) => {
    return {
      posts: res.data,
    };
  });
}

const Index = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);
  const [objects, setObjects] = useAtom(objectsAtom);
  const [beta, setBeta] = useAtom(totalPrice);

  const { data, isLoading, error, isError, isPreviousData } = useQuery({
    queryKey: ["carousel", { page }],
    keepPreviousData: true,
    queryFn: async () => {
      return getPostsPaginated(page);
    },
  });
  useEffect(() => {
    if (data?.posts.hasMore) {
      queryClient.prefetchQuery(["todos", page + 1], () =>
        getPostsPaginated(page + 1)
      );
      queryClient.prefetchQuery(["todos", page + 2], () =>
        getPostsPaginated(page + 2)
      );
    }
  }, [data, page, queryClient]);

  console.log(page);

  const previousPage = () => {
    setPage((prevState) => prevState - 1);
    console.log("i work");
  };
  const nextPage = () => {
    if (!isPreviousData || data?.posts.hasMore) {
      setPage((prevState) => prevState + 1);
      console.log("he work");
    }
  };
  console.log("im from" + " " + isPreviousData);

  const buttTest = (event) => {
    event.preventDefault();
    const name = event.target.form.childNodes[1].innerHTML;
    const price = event.target.form.childNodes[2].children[1].innerHTML.replace(
      "$",
      ""
    );
    let newPrice = +price;
    // @ts-ignore
    setObjects((prevObjects) => [...prevObjects, { name, price }]);
    setBeta((prevState) => prevState + newPrice);
  };

  return (
    <div>
      <div>
        <Carousel
          show={"hidden"}
          widthSize="w-[98%]"
          marginLeft={"mr-auto"}
          translate={"null mt-2"}
          secondShow={"null"}
          showButtons={"hidden"}
        />
        <MiddleRibbon />
        <div className="grid grid-cols-games">
          {isLoading ? (
            <div>Loadings ...</div>
          ) : (
            <div className="col-start-2 col-end-3 flex flex-wrap items-center justify-center">
              <ul className="flex flex-wrap items-center justify-center">
                {data?.posts.todos
                  .filter((x) => x.message)
                  .map((x) => {
                    return (
                      <form className="mt-2 mr-4 basis-[22%]">
                        <Image src={x.message.pic} width={400} height={450} />
                        <div className="flex items-center justify-center font-bold">
                          {x.message.name}
                        </div>
                        <div
                          className="ml-8 mr-8 mt-2 flex justify-between"
                          style={{ direction: "rtl" }}
                        >
                          <div>قیمت:</div>
                          <div>{x.message.price}$</div>
                        </div>
                        <Button
                          buttonColor={
                            "bg-secondaryButtonColor w-full h-12 mt-4"
                          }
                          textColor={"text-white"}
                          input={"add to shop"}
                          buttest={buttTest}
                        />
                      </form>
                    );
                  })}
              </ul>
              <button
                className={"mr-5"}
                onClick={() => previousPage()}
                disabled={page === 0}
              >
                preview
              </button>
              <span>{page + 1}</span>
              <button
                className="ml-6"
                onClick={() => nextPage()}
                disabled={isPreviousData || !data?.posts.hasMore}
                // Disable the N
                // ext Page button until we know a next page is available
              >
                next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
