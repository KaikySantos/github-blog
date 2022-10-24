import {
  InfoProfileContainer,
  InfoProfileContent,
  TagsContainer,
} from './styles'

import { Tag } from '../../../components/Tag'

import {
  FaGithub,
  FaBuilding,
  FaUserFriends,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import { ButtonLink } from '../../../components/ButtonLink'
import { useEffect, useState } from 'react'
import { api } from '../../../lib/axios'

interface UserInfoProps {
  avatar_url: string
  html_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
}

export function InfoProfile() {
  const [userInfo, setUserInfo] = useState<UserInfoProps>({} as UserInfoProps)

  async function getUserInfo() {
    const response = await api.get('/users/kaikySantos')

    setUserInfo(response.data)
  }

  useEffect(() => {
    getUserInfo()
  }, [])

  return (
    <InfoProfileContainer>
      <img src={userInfo.avatar_url} alt="" />
      <InfoProfileContent>
        <div>
          <div className="contentHeader">
            <h3>{userInfo.name}</h3>
            <ButtonLink
              iconRight={<FaExternalLinkAlt />}
              text="GITHUB"
              isExternalLink
              link={userInfo.html_url}
            />
          </div>
          <p>{userInfo.bio}</p>
        </div>
        <TagsContainer>
          <Tag icon={<FaGithub />} text={userInfo.login} textAsWhite />
          <Tag icon={<FaBuilding />} text={userInfo.company} textAsWhite />
          <Tag
            icon={<FaUserFriends />}
            text={`${userInfo.followers} seguidores`}
            textAsWhite
          />
        </TagsContainer>
      </InfoProfileContent>
    </InfoProfileContainer>
  )
}
