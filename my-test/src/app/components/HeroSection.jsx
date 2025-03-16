import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-md md:max-w-2xl lg:max-w-4xl mx-auto">
      {/* Hình nền */}
      <div className="relative">
        <Image 
          src="/bot.jpg"  // Đổi thành đường dẫn hình ảnh phù hợp
          alt="AI Robot"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg"
        />

        {/* Overlay chứa nội dung */}
        <div className="absolute top-0 left-0 w-full h-full  from-black/60 via-black/30 to-transparent rounded-2xl p-6">
          {/* Logo */}
          <div className="bg-white px-4 py-2 rounded-tl-2xl text-blue-700 font-bold text-5xl w-fit">
            hekate
          </div>

          {/* Văn bản mô tả */}
          <p className="text-white font-light text-[10px] mt-4 leading-relaxed">
            Build an intelligent business using pre-built <br /> AI, data-driven cloud applications, and a <br /> comprehensive portfolio of cloud platform <br /> services.
          </p>

          {/* Dữ liệu thống kê */}
          <div className="mt-24 space-y-4">
            <p className="text-white text-3xl font-bold">90% <br /><span className="text-[11px] font-light">Natural Language Processing</span></p>
            <p className="text-white text-3xl font-bold">50% <br /><span className="text-[11px] font-light">Computer Vision</span></p>
            <p className="text-white text-3xl font-bold">70% <br /><span className="text-[11px] font-light">Big Data Analytics</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}
