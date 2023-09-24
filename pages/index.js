import Image from "next/image";
import useSWR from "swr";
//für normale RESTfull APIs with JSON data
//wir benötigen eine fetcher function (ist wie wrapper der normalen fetch funktion)
const fetcher = (...args) => fetch(...args).then((res) => res.json());

//jetzt kann man die Funktion aufrufen als Componente

export default function HomePage() {
  const { data, isLoading, error } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  console.log(data[1].name);
  return (
    <div>
      <h1>Hello from Next.js</h1>

      <p>{data[1].slug}</p>
      <Image src={data[1].imageSource} width={200} height={200} alt="hi" />
    </div>
  );
}
