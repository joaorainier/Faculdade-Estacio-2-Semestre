import  Head  from "next/head";
import Menu from "../componentes/Menu";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Loja Next</title>
            </Head>
            <Menu />
            <main className='d-flex justify-content-center aling-items-center '>
                <h1 className="">Página Inicial</h1>
            </main>
            
        </>
    )
}