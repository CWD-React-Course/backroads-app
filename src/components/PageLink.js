const PageLink = ({ id, href, linkClass, text }) => {
  return (
    <li key={id}>
      <a href={href} className={linkClass}>{text}</a>
    </li>
  );
}

export default PageLink;