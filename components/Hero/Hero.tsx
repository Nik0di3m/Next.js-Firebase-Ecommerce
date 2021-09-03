import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <Image
                src="/images/Banner.png"
                alt="Banner"
                width={1920}
                height={651}
            />
        </div>
    )
}

export default Hero
