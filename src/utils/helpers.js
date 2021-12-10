export const formatGithubProfile = ({
  avatar_url,
  bio,
  company,
  createdAt,
  followers,
  following,
  html_url,
  location,
  login,
  name,
  public_repos,
  twitter_username,
}) => {
  const formattedProfile = {
    avatar_url,
    bio,
    company,
    createdAt,
    following,
    followers,
    html_url,
    location,
    login,
    name,
    public_repos,
    twitter_username,
  }

  return formattedProfile
}
