export default function Container({children,className=""}:{children:React.ReactNode,className?:string}) {
    return <div className={`container max-w-7xl ${className}`}>{children}</div>;
  }