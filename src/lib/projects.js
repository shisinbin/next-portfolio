import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import React from 'react';

const projectsDir = path.join(process.cwd(), 'content/projects');

export async function getAllProjects() {
  const fileNames = await fs.readdir(projectsDir);

  const projects = await Promise.all(
    fileNames.map(async (fileName) => {
      if (!fileName.endsWith('.mdx')) return null;

      const filePath = path.join(projectsDir, fileName);
      const rawContent = await fs.readFile(filePath, 'utf8');
      const { data: frontmatter } = matter(rawContent);

      return {
        slug: fileName.replace(/\.mdx$/, ''),
        ...frontmatter,
      };
    })
  );

  return projects
    .filter(Boolean)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export const getProjectBySlug = React.cache(async (slug) => {
  const filePath = path.join(projectsDir, `${slug}.mdx`);

  let rawContent;
  try {
    rawContent = await fs.readFile(filePath, 'utf8');
  } catch (err) {
    return null;
  }

  const { data: frontmatter, content } = matter(rawContent);
  return { frontmatter, content };
});
