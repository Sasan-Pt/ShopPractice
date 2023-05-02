import { useAtom } from "jotai";
import { objectsAtom, totalPrice } from "../../components/shareComponent/Store";
import styles from "./styles.module.css";

const CheckOut = () => {
  const [objects, setObjects] = useAtom(objectsAtom);
  const [overPrice, setOverPrice] = useAtom(totalPrice);
  console.log(objects);
  // @ts-ignore
  return (
    <div
      className="mx-auto my-0 mt-4 grid max-w-3xl grid-cols-checkOutFirst gap-3 bg-bgRecipColor p-5"
      style={{ direction: "rtl" }}
    >
      <h1>رسید</h1>
      <div className={styles.header}>
        <div>اسم</div>
        <div>قیمت</div>
      </div>
      {objects.map((item) => (
        <div className={styles.item} key={Math.random()}>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      ))}
      <div className={styles.total}>
        <div>قیمت کل:</div>
        <div>{overPrice.toFixed(2)}</div>
      </div>
    </div>

    /*        <table className="grid grid-cols-3 border border-black">
            <thead>
            <tr>
                <th className={"p-12"}>Name</th>
               <th className={"p-12"}>Age</th>
                <th className={"p-12"}>Gender</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={"p-12"}>John</td>
                <td className={"p-12"}>30</td>
                <td className={"p-12"}>Male</td>
            </tr>
            <tr>
                <td className={"p-12"}>Jane</td>
                <td className={"p-12"}>25</td>
                <td className={"p-12"}>Female</td>
            </tr>
            <tr>
                <td className={"p-12"}>Bob</td>
                <td className={"p-12"}>45</td>
                <td className={"p-12"}>Male</td>
            </tr>
            </tbody>
        </table>*/

    /*        <div className="grid grid-cols-games">
            <div className="col-start-2 col-end-3">
                <div className="grid grid-cols-checkOutFirst border border-black grid-rows-nowork">
                        <div className="col-start-4 col-end-5 border-l-[1px] border-black text-center">ردیف</div>
                        <div className="col-start-3 col-end-4  row-start-1 row-end-2 text-center">اسم</div>
                    <div className="col-start-3 col-end-2 text-center row-start-1 row-end-2">تعداد</div>
                    <div className="col-start-1 col-end-2  row-start-1 row-end-2 text-center">قیمت</div>
                    {objects?objects.map((x,index)=>{
                        let start=index+2
                        let end=index+3
                        return (
                        <>
                            <div className={`col-start-4 col-end-5 border-l-[1px] border-black text-center row-start-${index+2} row-end-${index+3} `}>{index+1}</div>
                            <div className={`col-start-4 col-end-3  row-start-${start} row-end-${end} text-center `}>{x.name}</div>
                            <div className={`col-start-3 col-end-2 row-start-${start} row-end-${end} text-center `}>{x.price}</div>
                            <div className={`col-start-2 col-end-1 row-start-${start} row-end-${end} text-center `}>{x.price}</div>
                            {console.log(index+2,index+3)}
                        </>
                        )

                    }):null}
                   {/!* {console.log(objects.map((x,index)=>index))}*!/}



                </div>
            </div>

        </div>*/
  );
};
export default CheckOut;
