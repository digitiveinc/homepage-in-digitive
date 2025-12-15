import { z } from 'zod'
import { Member, Achievement, App, Service, CompanyInfo } from '@/types'

// JSONファイルから直接データを読み込む
import companyJson from '../../data/company.json'
import membersJson from '../../data/members.json'
import achievementsJson from '../../data/achievements.json'
import appsJson from '../../data/apps.json'
import servicesJson from '../../data/services.json'

// Zod スキーマ定義
const MemberSchema = z.object({
  id: z.string().min(1, 'Member ID must not be empty'),
  name: z.string().min(1, 'Name is required'),
  nameEn: z.string().min(1, 'English name is required'),
  position: z.string().min(1, 'Position is required'),
  positionEn: z.string().min(1, 'English position is required'),
  image: z.string().min(1, 'Image path is required'),
  bio: z.string().min(1, 'Bio is required'),
  social: z.object({
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
  }).optional(),
})

const AchievementSchema = z.object({
  id: z.string().min(1, 'Achievement ID must not be empty'),
  slug: z.string().min(1, 'Slug is required'),
  client: z.string().min(1, 'Client is required'),
  title: z.string().min(1, 'Title is required'),
  category: z.array(z.string()).min(1, 'At least one category is required'),
  image: z.string().min(1, 'Image path is required'),
  description: z.string().min(1, 'Description is required'),
  services: z.array(z.string()).min(1, 'At least one service is required'),
  date: z.string().min(1, 'Date is required'),
})

const AppSchema = z.object({
  id: z.string().min(1, 'App ID must not be empty'),
  slug: z.string().min(1, 'Slug is required'),
  name: z.string().min(1, 'Name is required'),
  icon: z.string().min(1, 'Icon is required'),
  category: z.string().min(1, 'Category is required'),
  description: z.string().min(1, 'Description is required'),
  screenshots: z.array(z.string().min(1, 'Screenshot path is required')),
  downloadLinks: z.object({
    ios: z.string().optional(),
    android: z.string().optional(),
    web: z.string().optional(),
  }),
  features: z.array(z.string()).min(1, 'At least one feature is required'),
  createdAt: z.string().min(1, 'Created date is required'),
})

const ServiceSchema = z.object({
  id: z.string().min(1, 'Service ID must not be empty'),
  slug: z.string().min(1, 'Slug is required'),
  name: z.string().min(1, 'Name is required'),
  shortName: z.string().min(1, 'Short name is required'),
  description: z.string().min(1, 'Description is required'),
  details: z.string().min(1, 'Details are required'),
  image: z.string().min(1, 'Image path is required'),
  color: z.string().regex(/^#[0-9A-F]{6}$/i, 'Invalid color format'),
})

const CompanyInfoSchema = z.object({
  name: z.string().min(1, 'Company name is required'),
  nameEn: z.string().min(1, 'English company name is required'),
  concept: z.string().min(1, 'Concept is required'),
  mission: z.string().min(1, 'Mission is required'),
  vision: z.string().min(1, 'Vision is required'),
  coreValues: z.array(z.string()).min(1, 'At least one core value is required'),
  founded: z.string().min(1, 'Founded date is required'),
  address: z.string().min(1, 'Address is required'),
  addressEn: z.string().min(1, 'English address is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Invalid email address'),
  website: z.string().url('Invalid website URL'),
  ceoName: z.string().min(1, 'CEO name is required'),
})

// データ取得時のエラーハンドリング
const handleValidationError = (error: z.ZodError, context: string) => {
  console.error(`Validation error in ${context}:`, error.issues)
}

export async function getCompanyInfo(): Promise<CompanyInfo> {
  try {
    const validated = CompanyInfoSchema.parse(companyJson)
    return validated as CompanyInfo
  } catch (error) {
    if (error instanceof z.ZodError) {
      handleValidationError(error, 'CompanyInfo')
    }
    throw error
  }
}

export async function getMembers(): Promise<Member[]> {
  try {
    const data = membersJson.members
    const validated = z.array(MemberSchema).parse(data)
    return validated as Member[]
  } catch (error) {
    if (error instanceof z.ZodError) {
      handleValidationError(error, 'Members')
      console.warn('Using empty members array due to validation errors')
    }
    return []
  }
}

export async function getMember(id: string): Promise<Member | undefined> {
  const members = await getMembers()
  return members.find((m) => m.id === id)
}

export async function getAchievements(): Promise<Achievement[]> {
  try {
    const data = achievementsJson.achievements
    const validated = z.array(AchievementSchema).parse(data)
    return validated as Achievement[]
  } catch (error) {
    if (error instanceof z.ZodError) {
      handleValidationError(error, 'Achievements')
      console.warn('Using empty achievements array due to validation errors')
    }
    return []
  }
}

export async function getAchievement(slug: string): Promise<Achievement | undefined> {
  const achievements = await getAchievements()
  return achievements.find((a) => a.slug === slug)
}

export async function getApps(): Promise<App[]> {
  try {
    const data = appsJson.apps
    const validated = z.array(AppSchema).parse(data)
    return validated as App[]
  } catch (error) {
    if (error instanceof z.ZodError) {
      handleValidationError(error, 'Apps')
      console.warn('Using empty apps array due to validation errors')
    }
    return []
  }
}

export async function getApp(slug: string): Promise<App | undefined> {
  const apps = await getApps()
  return apps.find((a) => a.slug === slug)
}

export async function getAppCategories() {
  const apps = await getApps()
  return appsJson.categories
}

export async function getServices(): Promise<Service[]> {
  try {
    const data = servicesJson.services
    const validated = z.array(ServiceSchema).parse(data)
    return validated as Service[]
  } catch (error) {
    if (error instanceof z.ZodError) {
      handleValidationError(error, 'Services')
      console.warn('Using empty services array due to validation errors')
    }
    return []
  }
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
