export function Section({children,id,className=""}:{children:React.ReactNode,id?:string,className?:string}) {
    return <section id={id} className={`py-16 md:py-24 ${className}`}>{children}</section>;
  }