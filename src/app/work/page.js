import { getAllProjects } from '@/lib/projects';
import styles from './workpage.module.css';
import Link from 'next/link';

async function WorkPage() {
  const projects = await getAllProjects();

  return (
    <section>
      <h1>Work Page</h1>
      <p>This is my work.</p>
      <ul>
        {projects.map((project) => (
          <li key={project.slug}>
            <Link href={`/work/${project.slug}`}>
              <h2>{project.title}</h2>
              <p>{project.date}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default WorkPage;
