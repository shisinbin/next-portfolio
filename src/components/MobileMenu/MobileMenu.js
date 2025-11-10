import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { X } from 'react-feather';
import UnstyledButton from '@/components/UnstyledButton';
import VisuallyHidden from '@/components/VisuallyHidden';
import NavLink from '@/components/NavLink';
import styles from './MobileMenu.module.css';

function MobileMenu({ isOpen, onDismiss, links }) {
  return (
    <Dialog
      open={isOpen}
      onClose={onDismiss}
      className={styles.wrapper}
    >
      <div className={styles.backdrop} />
      <DialogPanel className={styles.menu}>
        <UnstyledButton
          onClick={onDismiss}
          className={styles.closeButton}
        >
          <X />
        </UnstyledButton>
        <div className={styles.filler} />

        <DialogTitle>
          <VisuallyHidden>Navigation Menu</VisuallyHidden>
        </DialogTitle>

        <nav className={styles.mobileNav}>
          {links.map(({ href, label }) => (
            <NavLink key={href} href={href} onClick={onDismiss}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.filler} />
      </DialogPanel>
    </Dialog>
  );
}

export default MobileMenu;
