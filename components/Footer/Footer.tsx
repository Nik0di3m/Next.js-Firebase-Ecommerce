import Image from 'next/image'

const Footer = () => {
    return (
        <footer className="bg-[#232323] text-[#ffffff] flex flex-col justify-around items-center">
            <div className="w-full flex justify-start space-x-48 items-center">
                <div>
                    <Image
                        src="/images/footerLogo.png"
                        alt="Logo"
                        width={386}
                        height={310}
                    />
                </div>
                <div>
                    <h2 className="text-xl">Information</h2>
                    <ul className="font-light">
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl">About us</h2>
                    <ul className="font-light">
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-xl">Users</h2>
                    <ul className="font-light">
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
