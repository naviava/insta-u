interface IProps {
  params: { slug: string };
}

export default function SlugPage({ params }: IProps) {
  return <div>Currently on {params.slug} dashboard slug page.</div>;
}
