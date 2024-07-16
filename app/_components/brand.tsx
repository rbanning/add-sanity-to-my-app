import Image from "next/image";

export function Brand({size, light}: {size?: 32 | 64, light?: boolean}) {
  light ??= false;
  size ??= 32;

  return (
    <Image 
      src={`/logo/brand-logo-${size}${light ? '-light' : ''}.png`}
      alt="brand logo"
      width={size}
      height={size} />
  )
}