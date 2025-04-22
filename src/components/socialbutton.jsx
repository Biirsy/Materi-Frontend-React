const SocialButton = ({ platform, url, buttonColor }) => {
  return (
    <a
      className={`btn btn-${buttonColor} transition hover:scale-105`}
      href={url}
      target="_blank"
    >
      {platform}
    </a>
  );
};

export default SocialButton;
