import { Member, Achievement, App, Service, CompanyInfo } from '@/types'

// JSONファイルから直接データを読み込む
import companyJson from '../../data/company.json'
import membersJson from '../../data/members.json'
import achievementsJson from '../../data/achievements.json'
import appsJson from '../../data/apps.json'
import servicesJson from '../../data/services.json'

export async function getCompanyInfo(): Promise<CompanyInfo> {
  return companyJson as CompanyInfo
}

export async function getMembers(): Promise<Member[]> {
  return membersJson.members as Member[]
}

export async function getMember(id: string): Promise<Member | undefined> {
  const members = await getMembers()
  return members.find((m) => m.id === id)
}

export async function getAchievements(): Promise<Achievement[]> {
  return achievementsJson.achievements as Achievement[]
}

export async function getAchievement(slug: string): Promise<Achievement | undefined> {
  const achievements = await getAchievements()
  return achievements.find((a) => a.slug === slug)
}

export async function getApps(): Promise<App[]> {
  return appsJson.apps as App[]
}

export async function getApp(slug: string): Promise<App | undefined> {
  const apps = await getApps()
  return apps.find((a) => a.slug === slug)
}

export async function getAppCategories() {
  return appsJson.categories
}

export async function getServices(): Promise<Service[]> {
  return servicesJson.services as Service[]
}

export async function getService(slug: string): Promise<Service | undefined> {
  const services = await getServices()
  return services.find((s) => s.slug === slug)
}

// フィルタリング関数
export async function getAchievementsByCategory(category: string): Promise<Achievement[]> {
  const achievements = await getAchievements()
  return achievements.filter((a) => a.category.includes(category))
}

export async function getAppsByCategory(category: string): Promise<App[]> {
  const apps = await getApps()
  return apps.filter((a) => a.category === category)
}
