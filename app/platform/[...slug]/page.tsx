import fs from 'node:fs';
import { join } from 'node:path';

interface PageProps {
  params: {
    slug: string[];
  };
}

export const generateStaticParams = async () => {
  const contentDir = join(process.cwd(), 'app', 'platform', '(contents)');
  const paths: string[][] = [];

  const scanDirectory = async (dir: string, currentPath: string[] = []) => {
    const entries = await fs.promises.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      // Skip files/folders starting with underscore or dot
      if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;

      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        // Check for index.mdx in directory
        if (fs.existsSync(join(fullPath, 'index.mdx'))) {
          paths.push([...currentPath, entry.name]);
        }
        // Recursively scan subdirectories
        await scanDirectory(fullPath, [...currentPath, entry.name]);
      } else if (entry.name.endsWith('.mdx') && entry.name !== 'index.mdx') {
        // Add MDX files (excluding index.mdx)
        paths.push([...currentPath, entry.name.replace('.mdx', '')]);
      }
    }
  };

  await scanDirectory(contentDir);

  console.log(paths);
  return paths;
};

const Page = async ({ params }: PageProps) => {
  console.log('params', `../${await params.slug.join('/')}/index.mdx`);
  const Content = await import(`../(contents)/${await params.slug.join('/')}/index.mdx`);

  return <Content.default />;
};

export default Page;
