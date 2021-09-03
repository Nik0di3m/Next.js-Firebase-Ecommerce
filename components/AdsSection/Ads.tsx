import Image from 'next/image'

const Ads = () => {
    return (
        <div className="py-6 lg:py-12">
            <div className="flex flex-col lg:flex-row justify-between">
                <div>
                    <Image
                        src="/images/Ads_Left.png"
                        alt="Ads"
                        width={712}
                        height={394}
                    />
                </div>
                <div>
                    <Image
                        src="/images/Ads_Right.png"
                        alt="Ads"
                        width={712}
                        height={394}
                    />
                </div>
            </div>
            <div className="mt-6 lg:mt-12">
                <Image
                    src="/images/Ads_Top_Full.png"
                    alt="Ads"
                    width={1536}
                    height={500}
                />
            </div>
        </div>
    )
}

export default Ads
