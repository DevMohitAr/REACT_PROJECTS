import React from "react";
const graphqlQuery = `
      query collectionByHandle($handle: String!, $first: Int, $after: String, $before: String,$last:Int) {
        collection(handle: $handle) {
          id
          title
          products(first: $first, after: $after, before: $before,last:$last) {
            edges {
              node {
                id
                title
                handle
                description
                images(first: 1) {
                  edges {
                    node {
                      id
                      url
                      width
                      height
                      altText
                    }
                  }
                }
              }
            }
            pageInfo {
              hasNextPage
              endCursor
              startCursor
              hasPreviousPage
            }
          }
        }
      }
    `;
const  getProductsData =async(
  first,
  last,
  beforeCursor,
  afterCursor
)=> {
  
  const requestBody = {
    query: graphqlQuery,
    variables: {
      handle: "wedding",
      first: first,
      last: last,
      after: afterCursor,
      before: beforeCursor,
    },
  };
  const accessToken = "09a4365e9f2e1af48a520162bdb3f8aa";
  try {
    const result = await fetch(
      "https://0dadf7-3.myshopify.com/api/2023-07/graphql.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Shopify-Storefront-Access-Token": accessToken,
        },
        body: JSON.stringify(requestBody),
        cache: "no-store",
      }
    );
    const data = await result.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
  }
}
export default function New() {
  const [products, setProducts] = React.useState([]);
  const [afterCursor, setAfterCursor] = React.useState(null);
  const [beforeCursor, setBeforeCursor] = React.useState(null);
  const [hasNextPage, setHasNextPage] = React.useState(false);
  const [hasPreviousPage, setHasPreviousPage] = React.useState(false);
  const fetchData = async (
    first = 4,
    last = null,
    beforeCursor = null,
    afterCursor = null
  ) => {
    const data = await getProductsData(first, last, beforeCursor, afterCursor);
    const newProducts = data.data.collection.products.edges;
    setProducts(newProducts);
    setAfterCursor(data.data.collection.products.pageInfo.endCursor);
    setBeforeCursor(data.data.collection.products.pageInfo.startCursor);
    setHasNextPage(data.data.collection.products.pageInfo.hasNextPage);
    setHasPreviousPage(data.data.collection.products.pageInfo.hasPreviousPage);
  };
  React.useEffect(() => {
    console.log("mamn");

    fetchData();
  }, []);

  const handlePrevClick = () => {
    fetchData(null, 4, beforeCursor, null);
  };
  const handleNextClick = () => {
    fetchData(4, null, null, afterCursor);
  };

  return (
    <section>
      <div>
        <ul className="flex justify-between flex-wrap gap-10 px-10">
          {products.map((product) => (
            <li
              key={product.node.id}
              className="text-center border-4 rounded-md "
            >
              <h2 className="capitalize ">{product.node.title}</h2>
              
              

              <p className="capitalize text-stone-600">
                {product.node.description}
              </p>
              
              <img src={product.node.images.edges[0].node.url} alt="al" />
            </li>
          ))}
        </ul>
        <div className="flex justify-center px-10 mt-7 gap-28 mt-16">
          <button
            className={
              hasPreviousPage
                ? "bg-stone-100 capitalize py-6 px-12 border-2 border-stone-950 text-stone-800 font-bold"
                : "bg-stone-100 capitalize py-6 px-12  text-stone-300 font-bold"
            }
            onClick={handlePrevClick}
            disabled={!hasPreviousPage}
          >
            Prev
          </button>
          <button
            className={
              hasNextPage
                ? "bg-stone-100 capitalize py-6 px-12 border-2 border-stone-950 text-stone-800 font-bold"
                : "bg-stone-100 capitalize py-6 px-12  text-stone-300 font-bold"
            }
            onClick={handleNextClick}
            disabled={!hasNextPage}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}