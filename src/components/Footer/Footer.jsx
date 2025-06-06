import styles from "./Footer.module.css";

export default function Footer({ className, content }) {
  return <footer className={className}>{content}</footer>;
}
