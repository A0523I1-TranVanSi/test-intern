import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-between px-10 py-4 ">
      {/* Logo */}
      <div className="text-5xl font-bold text-blue-700">hekate</div>

      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 pt-1">
        <ul className="flex space-x-6 text-gray-700 text-lg font-bold  px-6 py-2 rounded-lg ">
          <li className="cursor-pointer hover:text-blue-600">Home</li>
          <li className="cursor-pointer hover:text-blue-600">About Us</li>
          <li className="cursor-pointer hover:text-blue-600">Services</li>
          <li className="cursor-pointer hover:text-blue-600">Success Stories</li>
          <li className="cursor-pointer hover:text-blue-600">Blog</li>
          <li className="cursor-pointer hover:text-blue-600">Contact</li>
        </ul>
      </div>

      {/* Cờ + Login */}
      <div className="flex items-center space-x-4">
        {/* Cờ Mỹ */}
        <Image src="/us.webp" alt="USA Flag" width={24} height={24} className="rounded-full" />

        {/* Nút Login */}
        <button className="px-5 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800">
          Login
        </button>
      </div>
    </nav>
  );
}
