import dynamic from "next/dynamic"
import Image from "next/image"

const DynamicMap = dynamic (()=> import('../../components/Map'), {ssr: false});

export default function Home() {
  return (
    <>
        <header style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white'}}>
                  <Image src="/images/logo.png" width="200" height="200" alt="SkyTrain Stop" />
          <h1> SkyTrain Stops</h1>
        </header>
    <DynamicMap/>
    </>
  )
}
