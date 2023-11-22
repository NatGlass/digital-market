import { cn } from "@/lib/utils";

interface MaxWidthWrapperProps {
    children: React.ReactNode;
    className?: string;
}

const MaxWidthWrapper = ({children, className}: MaxWidthWrapperProps) => {
  return (
    <div className={cn("w-full mx-auto max-w-screen-xl px-2.5 md:px-20", className)}>
        {children}
    </div>
  )
}

export default MaxWidthWrapper