import React from 'react';

const SocialLinks = ({ links }) => (
  <ul className="social-links">
    {links.map(link => (
      <li key={link.name}>
        <a href={link.url} target="_blank" rel="noopener noreferrer">
          {link.name}
        </a>
      </li>
    ))}
  </ul>
);

export default SocialLinks;
