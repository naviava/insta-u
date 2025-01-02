interface IProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: IProps) {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
}
