import Link from 'next/link';
import { Fragment } from 'react';

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui';

interface BreadcrumbItemType {
  emoji: string;
  path: string;
  title: string;
}

export async function generateMetadata({ params }: ContentsLayoutProps) {
  const { slug } = params;
  const module = await import(`../(contents)/${slug.join('/')}/index.mdx`);

  return {
    title: `${module.metadata.emoji} ${module.metadata.title}`
  };
}

const getBreadcrumbs = async (slug: string[]) => {
  const breadcrumbs: BreadcrumbItemType[] = [];

  for (let i = 0; i < slug.length; i++) {
    const currentPath = slug.slice(0, i + 1).join('/');

    const module = await import(`../(contents)/${currentPath}/index.mdx`);

    breadcrumbs.push({
      ...module.metadata,
      path: `/platform/${currentPath}`
    });
  }

  return breadcrumbs;
};

interface ContentsLayoutProps {
  children: React.ReactNode;
  params: { slug: string[] };
}

const ContentsLayout = async ({ children, params }: ContentsLayoutProps) => {
  const { slug } = await params;
  const breadcrumbs = await getBreadcrumbs(slug);
  const lastBreadcrumb = breadcrumbs.at(-1)!;

  return (
    <div className='container mx-auto px-4 py-8'>
      <div className='mb-6 mb-20 flex items-center justify-between'>
        <Breadcrumb>
          <BreadcrumbList>
            {breadcrumbs.length > 3 ? (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild href={breadcrumbs[0].path}>
                    <Link href={breadcrumbs[0].path}>
                      <div className='flex items-center gap-1'>
                        <span>{breadcrumbs[0].emoji}</span>
                        <span>{breadcrumbs[0].title}</span>
                      </div>
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                <BreadcrumbItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <BreadcrumbEllipsis />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {breadcrumbs.slice(1, -2).map((item) => (
                        <DropdownMenuItem asChild key={item.path}>
                          <BreadcrumbLink asChild href={item.path}>
                            <Link href={item.path}>
                              <div className='flex items-center gap-1'>
                                <span>{item.emoji}</span>
                                <span>{item.title}</span>
                              </div>
                            </Link>
                          </BreadcrumbLink>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </BreadcrumbItem>

                <BreadcrumbSeparator />

                {breadcrumbs.slice(-2).map((item, index) => (
                  <Fragment key={item.path}>
                    <BreadcrumbItem key={item.path}>
                      <BreadcrumbLink asChild href={item.path}>
                        <Link href={item.path}>
                          <div className='flex items-center gap-1'>
                            <span>{item.emoji}</span>
                            <span>{item.title}</span>
                          </div>
                        </Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    {index < 1 && <BreadcrumbSeparator />}
                  </Fragment>
                ))}
              </>
            ) : (
              breadcrumbs.slice(0, -1).map((item, index) => (
                <Fragment key={item.path}>
                  <BreadcrumbItem key={item.path}>
                    <BreadcrumbLink asChild href={item.path}>
                      <Link href={item.path}>
                        <div className='flex items-center gap-1'>
                          <span>{item.emoji}</span>
                          <span>{item.title}</span>
                        </div>
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                </Fragment>
              ))
            )}

            <BreadcrumbItem key={lastBreadcrumb.path}>
              <BreadcrumbPage>
                <div className='flex items-center gap-1'>
                  <span>{lastBreadcrumb.emoji}</span>
                  <span>{lastBreadcrumb.title}</span>
                </div>
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* <div className='flex items-center gap-2'>
          <Button size='icon' variant='ghost'>
            <ShareIcon />
          </Button>
        </div> */}
      </div>

      <div className='mb-4 ml-[-10px] text-7xl'>{lastBreadcrumb.emoji}</div>
      <h1 className='mb-8 text-4xl font-bold tracking-tight'>{lastBreadcrumb.title}</h1>

      {children}
    </div>
  );
};

export default ContentsLayout;
