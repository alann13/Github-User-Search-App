import { format } from 'date-fns'

export const formatGithubProfile = ({
  avatar_url,
  bio,
  company,
  created_at,
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
    created_at,
    html_url,
    location,
    login,
    name,
    stats: [
      { label: 'Repos', count: public_repos },
      { label: 'Followers', count: followers },
      { label: 'Following', count: following },
    ],
    twitter_username,
  }

  return formattedProfile
}

export const formatDate = (date) => {
  return format(new Date(date), 'MMM do yyyy')
}
