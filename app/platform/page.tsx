export const generateStaticParams = () => [{ slug: 'welcome' }];

export const dynamicParams = false;

interface PlatformPageProps {
  params: Promise<{ slug: string }>;
}

const PlatformPage = async (props: PlatformPageProps) => {
  const { slug } = await props.params;
  const { default: Post } = await import(`./(contents)/${slug}.mdx`);

  return <Post />;
};

export default PlatformPage;
