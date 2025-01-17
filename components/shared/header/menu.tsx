import { ShoppingCartIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export default function Menu() {
    return(
        <div className="flex justify-end">
          <nav className="flex gap-3 w-full">
             <Link href="/signin" className="header-button flex items-center" >
                <UserIcon className="w-8 h-8" />
                <span className="font-bold">Sign in</span>
             </Link>

             <Link href="/cart" className="header-button flex items-center" >
                 <ShoppingCartIcon className="w-8 h-8" />
                 <span className="font-bold ms-1">Cart</span>
             </Link>
          </nav>
        </div>
    )
}