export interface KeywordCategory {
  id: string;
  name: string;
  keywords: string[];
}

export interface KeywordDescription {
  keyword: string;
  category: string;
  description: string;
  example?: string;
  relatedKeywords?: string[];
} 