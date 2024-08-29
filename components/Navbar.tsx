import MaxWidthWrapper from "./MaxWidthWrapper";
import { Link, animateScroll as scroll } from "react-scroll";

interface NavbarProps {
    brandName: string;
}

const Navbar = (props: NavbarProps) => {
    return (
        <div className="bg-inherit relative z-50 inset-x-0 flex items-center border-b border-orange-50 shadow-sm">
            <header className="relative m-2 w-full">
                <MaxWidthWrapper>
                    {/* Centered Title Navbar */}
                    <div className="flex justify-center w-full py-2">
                        <Link
                            to="Home"
                            activeClass="none"
                            offset={-250}
                            duration={500}
                            smooth={true}
                            spy={true}
                            className="cursor-pointer"
                        >
                            <p className="text-5xl font-bold text-center">Men, Money, Marriage <br/>& the Meaning of Life</p>
                        </Link>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    );
};

export default Navbar;
