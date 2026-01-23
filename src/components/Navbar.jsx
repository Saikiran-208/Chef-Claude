import ClaudeLogo from "../assets/chef.png"

const Navbar = () => {
    return (
        <header className="sticky top-0 z-100 py-4 bg-white/70 backdrop-blur-[10px] border-b border-white/20">
            <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-3">
                <img src={ClaudeLogo} alt="Claude Logo" className="h-10 w-auto" />
                <h1 className="text-2xl font-bold text-[#1a1a1a] font-display">
                    Chef <span className="text-primary-orange">Claude</span>
                </h1>
            </div>
        </header>
    )
}

export default Navbar
