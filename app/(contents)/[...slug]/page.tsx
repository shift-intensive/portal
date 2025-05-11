import fs from 'node:fs';
import path from 'node:path';

export const dynamicParams = false;

const getContentPaths = (dir: string, basePath: string[] = []): { slug: string[] }[] => {
  const contentPath = path.join(process.cwd(), dir);
  const entries = fs.readdirSync(contentPath, { withFileTypes: true });

  const paths = entries.reduce<{ slug: string[] }[]>((paths, entry) => {
    if (entry.isDirectory()) {
      const newBasePath = [...basePath, entry.name];
      return [...paths, ...getContentPaths(path.join(dir, entry.name), newBasePath)];
    }

    if (entry.name === 'index.mdx') {
      return [...paths, { slug: basePath }];
    }

    return paths;
  }, []);

  return paths;
};

export const generateStaticParams = () => getContentPaths('app/(contents)');

interface PlatformPageProps {
  params: Promise<{ slug: string[] }>;
}

const PlatformPage = async (props: PlatformPageProps) => {
  const { slug } = await props.params;
  const path = `../${slug.join('/')}/index.mdx`;
  const { default: Page } = await import(path);

  return <Page />;
};

export default PlatformPage;
