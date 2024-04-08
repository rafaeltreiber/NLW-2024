import { ComponentProps } from "react";

interface IconButtonprops extends ComponentProps<'button'> {
  transparent?: boolean
}

export function IconButton({ transparent, ...props }: IconButtonprops) {
  return (
    <button
      {...props}
      className={transparent
        ? 'bg-black/20 border border-white/10 rounded-md p-1.5'
        : 'bg-white/10 border border-white/10 rounded-md p-1.5'
      }
    />
  )
}