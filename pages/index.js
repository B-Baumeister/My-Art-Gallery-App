import Image from "next/image";
import useSWR from "swr";
//für normale RESTfull APIs with JSON data
//wir benötigen eine fetcher function (ist wie wrapper der normalen fetch funktion)
const fetcher = (...args) => fetch(...args).then((res) => res.json());

//jetzt kann man die Funktion aufrufen als Componente
function Character() {
  const { data } = useSWR("https://example-apis.vercel.app/api/art", fetcher);

  // render data
  return <div>Hello {data.name}!</div>; // Hello Luke Skywalker!
}

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Image src={data.imageSource} width={200} height={200} alt="hi" />
    </div>
  );
}
