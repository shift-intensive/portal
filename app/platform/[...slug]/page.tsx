import fs from 'node:fs';
import { join } from 'node:path';

interface PageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export const generateStaticParams = async () => {
  const contentDir = join(process.cwd(), 'app', 'platform', '(contents)');
  const paths: string[][] = [];

  const scanDirectory = async (dir: string, currentPath: string[] = []) => {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;

      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        if (fs.existsSync(join(fullPath, 'index.mdx'))) {
          paths.push([...currentPath, entry.name]);
        }

        await scanDirectory(fullPath, [...currentPath, entry.name]);
      } else if (entry.name.endsWith('.mdx') && entry.name !== 'index.mdx') {
        paths.push([...currentPath, entry.name.replace('.mdx', '')]);
      }
    }
  };

  await scanDirectory(contentDir);

  return paths;
};

const Page = async ({ params }: PageProps) => {
  const { slug } = await params;
  const Content = await import(`../(contents)/${slug.join('/')}/index.mdx`);

  return <Content.default />;
};

export default Page;
