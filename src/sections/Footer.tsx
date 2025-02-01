// Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.

const socialIcons = [
    {
        icon: (
            <a href="https://discord.com/">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 640 512"
                    className="size-5 fill-zinc-500 hover:fill-black"
                >
                    <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
                </svg>
            </a>
        )
    },
    {
        icon: (
            <a href="https://www.youtube.com/">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 576 512"
                    className="size-5 fill-zinc-500 hover:fill-black"
                >
                    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/>
                </svg>
            </a>
        )
    },
    {
        icon: (
            <a href="https://www.linkedin.com">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512"
                    className="size-5 fill-zinc-500 hover:fill-black"
                >
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
            </a>
        )
    },
    {
        icon: (
            <a href="https://www.facebook.com/">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512"
                    className="size-5 fill-zinc-500 hover:fill-black"
                >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
                </svg>
            </a>
        )
    }
]

export const FooterSection = () => {

    return (
        <footer className="py-12 bg-zinc-950 px-4 md:px-0">
            <div className="container">
                <div className="flex justify-between items-center">
                    <a href="/">
                        <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500">
                            BlockSmith
                        </h2>
                    </a>
                    <nav className="hidden md:flex gap-12 text-zinc-500 font-heading font-black">
                        <a href="/" className="hover:text-fuchsia-500 transition-colors hover:underline hover:underline-offset-2">Home</a>
                        <a href="/blog" className="hover:text-fuchsia-500 transition-colors hover:underline hover:underline-offset-2">Blog</a>
                        <a href="/careers" className="hover:text-fuchsia-500 transition-colors hover:underline hover:underline-offset-2">Careers</a>
                        <a href="/contact" className="hover:text-fuchsia-500 transition-colors hover:underline hover:underline-offset-2">Contact</a>
                    </nav>
                </div>

                <div className="mt-12 md:mt-48 md:flex justify-between items-center">
                    <p className="text-zinc-400">
                        &copy; 2024 BlockSmith. All rights reserved
                    </p>
                    <div className="mt-4 md:mt-0 flex gap-6">
                        {socialIcons.map((icon, iconIndex) => (
                            <div className="inline-flex size-10 bg-zinc-800 rounded-full items-center justify-center hover:bg-fuchsia-500 transition-colors group" key={iconIndex}>
                                {icon.icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}


