import Image from "next/image";
import Link from "next/link";

const BannerContainer = ({
  style,
  bgStyle,
  url,
  image,
  title,
  description,
}) => {
  return (
    <div
      style={bgStyle}
      className={`${style} flex h-28 items-center justify-between rounded-xl p-5 lg:ps-8 ps-4`}
    >
      <div className="flex items-center gap-4 text-white lg:gap-6">
        {image && (
          <Image
            className="h-24 md:w-44 w-28 object-cover"
            src={image || "/default-banner.png"}
            alt="notification"
            width={100}
            height={100}
          />
        )}
        <div>
          <h2 className="text-2xl font-medium">{title}</h2>
          <p className="md:text-[1.1rem] text-[1rem]">{description}</p>
        </div>
      </div>

      {url && (
        <Link href={url}>
          <i className="ri-arrow-right-s-line ri-2x text-white"></i>
        </Link>
      )}
    </div>
  );
};

export default BannerContainer;
