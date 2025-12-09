import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';

const blogDir = path.join(process.cwd(), 'content/blog');

export async function getAllBlogPosts() {
  const fileNames = await fs.readdir(blogDir);

  const posts = await Promise.all(
    fileNames
      .filter((name) => name.endsWith('.mdx'))
      .map(async (fileName) => {
        const filePath = path.join(blogDir, fileName);
        const rawContent = await fs.readFile(filePath, 'utf8');
        const { data: frontmatter } = matter(rawContent);

        return {
          slug: fileName.replace(/\.mdx$/, ''),
          ...frontmatter,
        };
      })
  );

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const getBlogPostBySlug = React.cache(async (slug) => {
  const filePath = path.join(blogDir, `${slug}.mdx`);

  let rawContent;
  try {
    rawContent = await fs.readFile(filePath, 'utf8');
  } catch (err) {
    return null;
  }

  const { data: frontmatter, content } = matter(rawContent);
  return { frontmatter, content };
});
