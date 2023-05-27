import Image from "next/image";

type ProfileImageProps = {
  src?: string | null;
  className?: string;
};

export function ProfileImage({
  src,
  className = "",
}: //   ...props
ProfileImageProps) {
  return (
    <>
      <div
        className={`relative h-12 w-12 overflow-hidden rounded-full ${className}`}
      >
        {src == null ? null : (
          <Image src={src} alt="Priofile Image" quality={100} fill />
        )}
      </div>
    </>
  );
}