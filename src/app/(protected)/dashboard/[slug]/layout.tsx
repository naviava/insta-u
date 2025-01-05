import { Sidebar } from "~/components/global/sidebar";
import { Navbar } from "~/components/global/navbar";

interface IProps {
  children: React.ReactNode;
  params: { slug: string };
}

export default function SlugLayout({ children, params }: IProps) {
  return (
    <div className="p-3">
      {/* Sidebar */}
      <Sidebar slug={params.slug} />
      {/* Navbar */}
      <div className="lg:-pl-5 flex flex-col overflow-auto lg:ml-[250px] lg:pl-10">
        <Navbar slug={params.slug} />
        {children}
      </div>
    </div>
  );
}
