const SocialLink = ({ href, icon, iconClass }) => {
  return (
    <li>
      <a
        href={href}
        target='_blank'
        className={iconClass}
        rel='noreferrer'>
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLink;