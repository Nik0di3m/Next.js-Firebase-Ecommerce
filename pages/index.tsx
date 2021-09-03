import Head from 'next/head'
import Ads from '../components/AdsSection/Ads'
import Hero from '../components/Hero/Hero'
import HotProducts from '../components/HotProducts/HotProducts'
import Menu from '../components/Menu/Menu'

export default function Home() {
    return (
        <div className="text-primary">
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu />
            <Hero />
            <main className="max-w-[1536px] px-4 mx-auto">
                <Ads />
                <HotProducts />
            </main>
        </div>
    )
}
